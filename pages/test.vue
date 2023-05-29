<template>
    <!-- <RangeSlider :max="2000" v-model="slider1" /> -->
    <!-- <RangeSlider color="#f97316" :min="1900000" :max="59312000" v-model="slider1" width="80vw" /> -->
    <!-- <RangeSlider3 /> -->
    <!-- <div class="mx-auto my-12">
        <pagination :total-pages="myPaginate.totalPages" :total="myPaginate.total" :per-page="myPaginate.perPage"
            :current-page="myPaginate.currentPage" :has-more-pages="myPaginate.hasMorePages" @pagechanged="showMore">
        </pagination>
    </div> -->

    <!-- <div class="mt-20">
        <BreadCrumb :items="BreadCrumbItems"></BreadCrumb>
    </div> -->

    <!-- <CartItem :product="product2"></CartItem> -->

    <!-- <div class="my-20">
        <ButtonAddons></ButtonAddons>
        <input type="text">
    </div> -->

    <!--modal start-->
    <button type="button" class="bg-indigo-200 px-3 py-1 font-medium" @click="showModal = true">
        Show modal
    </button>

    <div></div>

    <BaseModal :show="showModal" @close-modal="closeModal()">
        <div
            class="fixed z-10 bottom-0 max-h-[500px] rounded-t-3xl shadow-[0_-4px_8px_0px_rgba(0,0,0,0.1)] overflow-y-auto right-0 left-0 w-full bg-white p-6 sm:p-8">
            <!-- filter -->
            <div class="mb-10 w-[85%] sm:w-[70%]">
                <Filter></Filter>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="w-[45%] p-2 text-center text-stone-50 bg-orange-600 rounded text-base sm:text-lg border-2 border-orange-600">تایید</button>
                <button @click="showModal = false"
                    class="w-[45%] p-2 text-center bg-orange-100 text-orange-600 rounded text-base sm:text-lg border-2 border-orange-600">لغو
                    فیلتر</button>
            </div>
        </div>
    </BaseModal>


    <!-- <BaseModal :show="showModal">
        <div class="fixed inset-0 flex items-center justify-center">
            <div class="bg-white text-black">
                <div class="p-4">
                    <div class="text-lg">Hello Modal World!</div>

                    <div class="py-2 text-sm">Click to close:</div>

                    <button type="button" class="bg-indigo-200 px-3 py-1 font-medium" @click="showModal = false">
                        Hide modal
                    </button>
                </div>
            </div>
        </div>
    </BaseModal> -->
    <!--modal end-->
</template>

<script setup>
import { ref } from "vue";
// const slider1 = ref(40000000);

// const page = ref(0);
// const myPaginate = reactive({
//     currentPage: 1,
//     totalPages: 99,
//     total: 50,
//     perPage: 5,
//     hasMorePages: true,
// });

// function showMore(p) {
//     page.value = p;
//     myPaginate.currentPage = p;
// }


const BreadCrumbItems = [{ text: 'تلفن همراه', disabled: false, to: '#' },
{ text: 'برند آیفون', disabled: false, to: '#' },
{ text: 'آیفون13', disabled: true, to: '#' }];

const product2 = { id: 1, name: 'ساعت هوشمند اپل سری 6', image: '/images/apple-watch-7.png', price: 2250000, qty: 1 };

const showModal = ref(false)

function closeModal() {
    showModal.value = false
}
</script>

