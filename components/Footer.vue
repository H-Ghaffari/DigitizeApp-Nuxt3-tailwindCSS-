<!-- https://stackoverflow.com/questions/73994409/how-to-remove-the-white-space-after-footer -->
<template>
    <footer class="hidden md:block bg-white w-full mx-auto 2xl:max-w-screen-2xl">
        <div
            class="container mx-auto 2xl:max-w-screen-2xl flex justify-between px-4 2xl:px-5 text-slate-800 xl:gap-x-24 md:gap-x-16 xl:py-9 md:py-8">
            <div class="grid grid-row-2 grid-col-7 md:gap-y-3 lg:gap-y-0 xl:gap-y-4 md:gap-x-11 xl:gap-x-24 w-3/4">
                <div class="col-span-7 flex items-center justify-start">
                    <span class="text-orange-400 2xl:text-4xl xl:text-3xl md:text-2xl font-bold">دیجی</span>
                    <span class="text-slate-800 2xl:text-4xl xl:text-3xl md:text-2xl font-bold">تایز</span>
                    <hr class="w-12 h-1 2xl:h-1.5 mr-2 bg-orange-400">
                </div>
                <div
                    class="col-span-5 2xl:text-2xl xl:text-xl md:text-lg text-right md:leading-relaxed lg:leading-10 xl:leading-loose 2xl:leading-[60px]">
                    <p>
                        دیجی تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی هوشمند و ساعت هوشمند می باشد.
                    </p>
                    <p>
                        دیجی تایز افتخار این را داشته که به <span class="text-orange-400"> {{ numberFormat(232122) }}
                            نفر</span> تا به اکنون
                        خدمت رسانی داشته باشد.
                    </p>
                </div>
                <div class="col-span-2 flex flex-col xl:gap-y-6 md:gap-y-4 2xl:text-2xl xl:text-xl md:text-lg">
                    <p class="font-bold">محصولات</p>
                    <a href="#" class="hover:text-blue-600">تلفن همراه</a>
                    <a href="#" class="hover:text-blue-600">لپ تاپ</a>
                    <a href="#" class="hover:text-blue-600">ساعت هوشمند</a>
                </div>
            </div>
            <div class="flex flex-col items-end w-1/4">
                <img class="aspect-w-1 mb-4" :src="getImageAbsolutePath('map.png')">
                <div class="flex justify-center ml-4">
                    <!-- <p>{{ numberFormat(021 - 123456) }}</p> -->
                    <div class="flex flex-col items-end xl:text-lg md:text-base 2xl:text-lg">
                        <p class="leading-none pt-1 pb-2">{{ numberFormat("021-123456") }}</p>
                        <p>info@digitize.com</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 mr-2 fill-orange-400">
                        <path fill-rule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clip-rule="evenodd" />
                    </svg>

                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { numberFormat } from "~/helpers/formatHelper";
import getImageAbsolutePath from "~/helpers/getImageAbsolutePath.js";
</script>