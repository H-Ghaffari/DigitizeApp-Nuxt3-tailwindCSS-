<template>
    <div
        class="container mx-auto 2xl:max-w-screen-2xl min-w-screen min-h-screen bg-yellow-500 flex items-start p-10 sm:p-14 lg:p-20 overflow-hidden relative">
        <template v-if="error.statusCode == 404">
            <div
                class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-7 lg:p-10 relative flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div class="w-[90%] sm:w-[70%] md:w-[50%] xl:w-[40%] mb-6 sm:mb-8 md:mb-0">
                    <!-- <img src="~/public/images/404.png" alt=""> -->
                    <video class="w-full" autoplay loop>
                        <source src="~/public/videos/Sequence.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="w-full md:w-1/2">
                    <!-- <div class="mb-10 lg:mb-20">
                    logo
                </div> -->
                    <div class="mb-10 md:mb-20">
                        <h1 dir="rtl"
                            class="font-black uppercase text-xl sm:text-2xl sm:leading-[50px] text-center leading-10 lg:text-4xl lg:leading-[65px] 2xl:text-5xl 2xl:leading-[90px] text-orange-600 mb-10 xl:mb-20">
                            چنین
                            صفحه ای در
                            سایت وجود ندارد!
                        </h1>
                    </div>
                    <div class="mb-4 flex justify-center">
                        <button @click="handleError"
                            class="text-base sm:text-lg xl:text-2xl flex items-center bg-green-500 p-2.5 sm:p-3 md:p-2.5 rounded-lg outline-none focus:outline-none transform transition-all hover:scale-110 text-stone-50 hover:text-stone-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            <span> صفحه اصلی</span>
                        </button>
                    </div>
                </div>
            </div>
        </template>
        <!-- <div
            class="w-64 md:w-96 h-96 md:h-full bg-blue-400 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-28 rounded-full pointer-events-none -rotate-45 transform">
        </div>
        <div
            class="w-96 h-full bg-lime-600 bg-opacity-20 absolute -bottom-96 right-96 rounded-full pointer-events-none -rotate-45 transform">
        </div> -->
    </div>
</template>

<script setup>

const props = defineProps(['error']);
// console.log(props.error.statusCode);
// console.log(props.error.statusMessage);

// if (errorVar.value.statusCode == 404 || '404') {
//     errorVar.value.message = "چنین صفحه ای در سایت وجود ندارد!!"
// }

function handleError() {
    clearError({ redirect: '/' });
}
</script>

