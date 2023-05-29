<template>
    <div
        class="bg-white w-full h-24 sm:h-32 md:h-28 lg:h-32 xl:h-36 p-2 pl-2.5 sm:p-3 sm:pl-4 md:p-4 md:px-6 flex gap-x-2 md:gap-x-4 xl:gap-x-2">
        <div class="w-1/5 h-full flex items-center justify-center">
            <img class="aspect-w-1 h-full" :src="product.imgSrc">
        </div>
        <!-- right -->
        <div class="flex w-full justify-between">
            <div class="flex flex-col justify-between items-start">
                <div class="font-bold text-slate-900 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">{{
                    numberFormat(product.title) }}
                </div>
                <div class="text-orange-700 font-bold text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">{{
                    numberFormat(product.price) }}
                    تومان</div>
            </div>

            <div class="flex flex-col justify-between items-end">
                <!--close icon-->
                <button @click="close(product)" class="text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-5 h-5 xl:w-6 xl:h-6">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <!--add minus-->
                <div class="flex items-center justify-between gap-x-2">
                    <button @click="addOrRemove(1)"
                        class="w-5 h-5 xl:w-6 xl:h-6 bg-gray-300 text-slate-800 rounded-full flex items-center justify-center">
                        <span class="sm:text-lg">+</span>
                    </button>
                    <!-- <div
                        class="px-2 xl:px-3 py-1 xl:py-2 xl:text-lg border xl:border-2 border-orange-400 rounded-sm text-slate-700">
                        {{ numberFormat(product.qty) }}
                    </div> -->
                    <input ref="target" type="text" @keydown="keydownFun()"
                        class="w-7 xl:w-9 !px-0 text-center py-1 xl:py-2 xl:text-lg border xl:border-2 border-orange-400 rounded-sm text-slate-700"
                        placeholder="" :value=numberFormat(qty)>

                    <button @click="addOrRemove(-1)"
                        class="w-5 h-5 xl:w-6 xl:h-6 bg-red-200 text-orange-500 font-bold rounded-full flex items-center justify-center">
                        <span class="sm:text-lg">-</span>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { numberFormat } from "~/helpers/formatHelper";
import { useCartStore } from "~/store/cart.store";
import { onMounted } from 'vue';
import { useToast, POSITION } from "vue-toastification";

const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
});

const qty = ref(1);
const loading = ref(false);
const target = ref(null);

onMounted(() => {
    qty.value = props.product.qty;
});


//https://stackoverflow.com/questions/53890358/write-non-english-numbers-in-html-input
// https://codingbeautydev.com/blog/vue-get-input-value/
// https://codereview.stackexchange.com/questions/166750/convert-persian-and-arabic-digits-to-english
function keydownFun() {
    event.preventDefault();

    if (event.key >= 0 && event.key <= 9) {
        var numbersList = "۰۱۲۳۴۵۶۷۸۹";
        var s = target.value.value;
        var i = target.value.selectionStart;
        s = s.substr(0, i) + numbersList[event.key] + s.substr(target.value.selectionEnd); //فارسی
        let en = s.replace(/[۰-۹]/g, d => numbersList.indexOf(d));

        if (en > 0 && en <= 10) {
            target.value.value = s;
            target.value.selectionStart = target.value.selectionEnd = i + 1;
            qty.value = en;
            props.product.qty = en;
            // await this.$store.commit('updateCart', { product: this.product })
            store.updateCart({ product: props.product });

            toast.clear();
            toast.success('سبد خرید بروز رسانی شد', {
                autoClose: 1000,
                position: POSITION.TOP_CENTER
            });
        }
        else if (en > 10) {
            toast.clear();
            toast.error('حداکثر 10 عدد قابل سفارش است', {
                autoClose: 3000,
                position: POSITION.TOP_CENTER
            });
        }

        return false;
    }

    // if (/^\d*$/.test(event.key)) {}
}

const store = useCartStore();
const toast = useToast();

async function addOrRemove(number) {
    loading.value = true;
    if (number === 1) {
        if (qty.value < 10) {
            qty.value++;
            props.product.qty = qty.value;
            // await this.$store.commit('updateCart', { product: this.product })
            await store.updateCart({ product: props.product });
            toast.clear();
            toast.success('سبد خرید بروز رسانی شد', {
                autoClose: 1000,
                position: POSITION.TOP_CENTER
            });
        } else {
            toast.clear();
            toast.warning('محصول به اتمام رسید', {
                autoClose: 3000,
                position: POSITION.TOP_CENTER
            });
        }
    }
    if (number == -1) {
        if (qty.value > 1) {
            qty.value--;
            props.product.qty = qty.value;
            //await this.$store.commit('updateCart', { product: this.product })
            await store.updateCart({ product: props.product });
            toast.clear();
            toast.success('سبد خرید بروز رسانی شد', {
                autoClose: 1000,
                position: POSITION.TOP_CENTER
            });
        } else {
            toast.clear();
            toast.warning('به حداقل مجاز رسیدید', {
                autoClose: 3000,
                position: POSITION.TOP_CENTER
            });
        }
    }
    loading.value = false
}

function close(p) {
    store.addRemoveCart({ product: p, toAdd: false });
}

</script>

<!-- <style scoped>
input[type="text"] {
    font-family: 'iranyekan' !important;
    direction: rtl !important;
}
</style> -->