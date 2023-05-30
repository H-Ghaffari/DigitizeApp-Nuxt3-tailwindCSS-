<template>
    <div class="bg-stone-100 w-full min-h-screen">
        <!--desktop navbar-->
        <DesktopNavbar></DesktopNavbar>

        <!--mobile app bar-->
        <MobileAppBar title="سبد خرید" fontSize="text-lg" :class="'mb-7'">
            <template v-slot:icon>
                <div class="rounded bg-white w-8 h-8 flex justify-center items-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-6 h-6 fill-slate-800">
                        <path fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </template>
        </MobileAppBar>

        <!--cart items-->
        <!-- https://cssgrid-generator.netlify.app/ -->
        <div class="px-2 md:px-4 container mx-auto 2xl:max-w-screen-2xl mb-4 md:mb-20 ">

            <div class="grid grid-cols-3 md:grid-rows-[auto_auto_1fr] gap-4 xl:gap-6">
                <!--سطر اول-->
                <div class="col-span-2 mt-4 md:flex items-center justify-between hidden">
                    <span class="text-slate-800 text-xl xl:text-2xl font-bold">سبد خرید</span>
                    <NuxtLink to="/" class="text-orange-500 text-sm xl:text-base font-bold">بازگشت به خانه</NuxtLink>
                </div>

                <ClientOnly>
                    <!--سطر دوم--> <!--cart items-->
                    <div
                        class="col-span-3 md:col-span-2 md:row-span-1 rounded-md overflow-hidden mb-8 md:mb-0 md:pb-4 md:bg-white">
                        <template v-if="store.cartLength > 0">
                            <div v-for="(item, index) in store.cart"
                                class="max-md:mb-2.5 max-md:rounded-lg max-md:shadow-lg max-md:shadow-gray-300/70 bg-white max-md:overflow-hidden"
                                :key="item.id">
                                <CartItem :product="item"></CartItem>
                                <hr v-if="index != store.cart.length - 1"
                                    class="my-2 hidden md:block w-3/4 bg-gray-200 h-px rounded-full mr-6">
                            </div>
                        </template>
                        <div v-else class="py-10 md:py-7 flex flex-col items-center justify-center">
                            <span class="text-2xl font-bold text-red-700 mb-8 md:mb-4">سبد خرید شما خالی است!</span>
                            <video
                                class="w-10/12 md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] 2xl:w-[350px] 2xl:h-[350px]"
                                autoplay loop>
                                <source src="~/assets/videos/sad-empty-box.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>

                    <!--desktop price-->
                    <div v-if="store.cart.length > 0"
                        class="hidden md:block row-span-2 max-h-[300px] xl:max-h-[350px] sticky md:top-24 lg:top-28 2xl:top-32">
                        <div class="bg-white rounded-md mb-4 p-4 xl:p-5">

                            <div class="flex justify-between items-center mb-4 xl:mb-5">
                                <span class="text-slate-900 font-bold text-sm xl:text-base">مجموع قیمت:</span>
                                <span class="text-orange-700 font-bold text-sm xl:text-base"> {{
                                    numberFormat(store.cartTotal)
                                }}
                                    تومان</span>
                            </div>

                            <div class="flex justify-between items-center gap-x-2 mb-4 xl:mb-5">
                                <div class="text-slate-900 text-sm xl:text-base whitespace-nowrap">کد تخفیف:</div>
                                <ButtonAddons @sentCode="compareDiscountCode"></ButtonAddons>
                            </div>

                            <div class="flex justify-between items-center mb-4 xl:mb-5">
                                <span class="text-slate-900 font-bold text-sm xl:text-base"> تخفیف:</span>
                                <span class="text-orange-700 font-bold text-sm xl:text-base"> {{ numberFormat(discount) }}
                                    تومان</span>
                            </div>

                            <div class="flex justify-between items-center mb-2">
                                <span class="text-slate-900 font-bold text-sm xl:text-base">قیمت نهایی:</span>
                                <span class="text-orange-700 font-bold text-sm xl:text-base"> {{
                                    numberFormat(store.cartTotal -
                                        discount) }}
                                    تومان</span>
                            </div>
                        </div>
                        <button
                            class="w-full xl:text-lg rounded-md text-center p-2 border-2 border-orange-600 bg-orange-600 text-stone-50 mb-2">ادامه
                            فرآیند
                            خرید</button>
                        <button
                            class="w-full xl:text-lg rounded-md border-2 border-orange-600 text-center p-2 bg-stone-50 text-orange-600">
                            انصراف از
                            خرید</button>
                    </div>
                </ClientOnly>

            </div>
            <!--mobile price-->
            <div v-if="store.cart.length > 0" class="md:hidden bg-white px-4 py-6 mb-20 rounded-lg">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-slate-900 font-bold text-lg">مجموع قیمت:</span>
                    <span class="text-orange-700 font-bold text-lg"> {{ numberFormat(store.cartTotal) }} تومان</span>
                </div>
                <p class="text-slate-800 text-sm">کد تخفیف دارید؟</p>
            </div>
            <!--mobile add to cart btn-->
            <button class=" md: hidden w-full rounded-md text-center p-2 bg-orange-500 text-stone-50">ادامه فرآیند
                خرید</button>
        </div>

        <!--mobile bottom navigation-->
        <MobileBottomNavigation></MobileBottomNavigation>
    </div>

    <!--footer-->
    <Footer></Footer>
</template>

<script setup>
import { numberFormat } from '~/helpers/formatHelper';
import { useCartStore } from '~/store/cart.store';


const discount = ref(0);
const store = useCartStore();

function compareDiscountCode(value) {
    discount.value = (value == '123' ? 250000 : 0);
}
</script>
