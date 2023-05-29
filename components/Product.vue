<template>
    <div class="bg-white rounded-lg p-1 shadow-lg flex flex-col">
        <!--image and heart-->
        <div class="rounded-lg bg-slate-200 relative mb-2 w-full h-40 2xl:h-48 flex items-center justify-end">
            <div
                class="bg-gray-300 flex justify-center cursor-pointer items-center w-5 h-5 xs:w-6 xs:h-6 sm:h-8 sm:w-8 md:w-6 md:h-6 rounded-full absolute top-2 right-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 sm:h-5 sm:w-5 md:w-3.5 md:h-3.5 fill-orange-400">
                    <path
                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            </div>
            <!-- <img class="max-w-full max-h-full" src="/images/apple-watch-7.png"> -->
            <div class="h-5/6 w-5/6 flex items-center justify-center my-auto">
                <img class="h-full aspect-w-1" :src="productObj.imgSrc">
            </div>
        </div>
        <!--description-->
        <div class="flex items-center justify-between mb-3 2xl:mb-4 p-1">
            <div class="font-light text-xs sm:text-base text-slate-300">{{ productObj.tag }}</div>
            <ProductColorPalette :colors="productObj.colors" :selected="productObj.selectedColor">
            </ProductColorPalette>
        </div>
        <div class="text-xs px-1 mb-4 2xl:mb-6 sm:max-md:text-base md:text-sm xl:text-base 2xl:text-lg">{{ productObj.title
        }}</div>
        <div class="flex flex-col justify-end flex-1">
            <div class="flex px-1 justify-end items-center text-red-600 text-xs sm:text-base 2xl:text-lg mb-3 2xl:mb-4">
                <span>{{ numberFormat(productObj.price) }}</span>
                <span class="mr-1">تومان</span>
            </div>
            <hr class="border border-stone-100 mb-1">
            <button @click="goSingleProduct(productObj.id)"
                class="p-2 sm:text-base 2xl:text-lg text-xs text-orange-500 text-center w-full">
                مشاهده و سفارش
            </button>
        </div>
    </div>
</template>

<script setup>
import { numberFormat } from "~/helpers/formatHelper";

const props = defineProps({
    productObj: {
        type: Object,
        default: () => ({})
    },
});

const router = useRouter();

function goSingleProduct(id2) {
    // router.push({
    //     name: 'singleProduct',
    //     params: { id: id2 }
    // });
    router.push(`/singleProduct/${id2}`)
}
</script>