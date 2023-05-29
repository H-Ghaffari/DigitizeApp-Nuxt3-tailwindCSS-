<template>
    <!--min-h-screen-->
    <div class="bg-stone-100 w-full min-h-screen ">
        <!--desktop navbar-->
        <DesktopNavbar></DesktopNavbar>

        <!--mobile app bar-->
        <MobileAppBar v-if="product" :title="product.title" fontSize="text-lg">
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


        <!--mobile breadCrumb-->
        <div v-if="product" class="container mx-auto px-3 mb-7 mt-5 md:hidden flex justify-between">
            <BreadCrumb :items="BreadCrumbItems"></BreadCrumb>
            <NuxtLink :to="{ name: 'cart' }" class="flex justify-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-slate-800" viewBox="0 0 576 512">
                    <path
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                <div v-if="store.cart.length > 0"
                    class="w-4 h-4 flex items-center justify-center bg-orange-500 rounded-full absolute -top-1.5 left-3 text-xs text-white font-medium">
                    {{ numberFormat(store.cart.length) }}
                </div>
            </NuxtLink>
        </div>

        <!-- sidbar and products -->
        <div
            class="container mx-auto 2xl:max-w-screen-2xl grid grid-cols-12 md:grid-rows-[50px_minmax(500px,_1fr)] gap-4 px-2 md:px-4 mb-5">
            <!--sidbar-->
            <div
                class="md:max-h-[calc(100vh_-_120px)] lg:max-h-[calc(100vh_-_140px)] overflow-y-auto sticky md:top-24 lg:top-28 col-span-3 row-span-2 hidden md:block">
                <div class="bg-white rounded-xl md:p-2 lg:p-6">
                    <!--categories-->
                    <div class="mb-7">
                        <div class="text-orange-400 font-bold md:text-lg xl:text-xl 2xl:text-2xl mb-5">دسته بندی</div>
                        <ul class="lg:px-2 md:px-1">
                            <!--1-->
                            <li class=" mb-1 2xl:mb-2">
                                <a class="flex items-center text-slate-800 py-2 cursor-pointer hover:bg-gray-50 rounded-md">
                                    <span class="w-5 h-5 rounded-full bg-gray-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1.5 right-1.5"
                                            fill="none" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"
                                                d="M13 4.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 1.75 1.75 1 4.75 1h4.5c3 0 3.75.75 3.75 3.75ZM8.5 3.625h-3" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"
                                                d="M7 13.825A1.163 1.163 0 1 0 7 11.5a1.163 1.163 0 0 0 0 2.325Z" />
                                        </svg>
                                    </span>
                                    <span class="mr-2 xl:mr-3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">تلفن
                                        همراه</span>
                                </a>
                            </li>
                            <!--2-->
                            <li class="mb-1 2xl:mb-2">
                                <a
                                    class="flex items-center text-slate-800 py-2 cursor-pointer hover:bg-gray-50 rounded-md ">
                                    <span class="w-5 h-5 rounded-full bg-gray-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1.5 right-1.5"
                                            fill="none" stroke="currentColor">
                                            <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round"
                                                d="M4.293 1.333H11.7c2.373 0 2.967.594 2.967 2.96v4.22c0 2.374-.594 2.96-2.96 2.96H4.293c-2.366.007-2.96-.586-2.96-2.953V4.294c0-2.367.594-2.96 2.96-2.96ZM8 11.48v3.187M1.333 8.666h13.334M5 14.666h6" />
                                        </svg>
                                    </span>
                                    <span class="mr-2 xl:mr-3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                        لپ تاپ
                                    </span>
                                </a>
                            </li>
                            <!--3-->
                            <li class=" ">
                                <a class="flex items-center text-slate-800 py-2 cursor-pointer hover:bg-gray-50 rounded-md">
                                    <span class="w-5 h-5 rounded-full bg-gray-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1.5 right-1.5"
                                            fill="none" stroke="currentColor">
                                            <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-miterlimit="10"
                                                d="M5.666 12.667h4.667c1.553 0 2.333-.78 2.333-2.333V5.667c0-1.553-.78-2.333-2.333-2.333H5.666c-1.553 0-2.333.78-2.333 2.333v4.667c0 1.553.78 2.333 2.333 2.333ZM10.666 1.333H5.333M10.666 14.666H5.333" />
                                            <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-miterlimit="10" d="M7.667 6.333v2h2" />
                                        </svg>
                                    </span>
                                    <span class="mr-2 xl:mr-3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">ساعت
                                        هوشمند</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--desktop BreadCrumb-->
            <div v-if="product" class="hidden md:block col-span-9">
                <div class=" bg-white h-full flex px-2 2xl:px-3 items-center gap-x-6 text-gray-400 rounded-md">
                    <BreadCrumb :items="BreadCrumbItems"></BreadCrumb>
                    <NuxtLink :to="{ name: 'cart' }" class="flex-auto flex justify-end relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-slate-800" viewBox="0 0 576 512">
                            <path
                                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                        <div v-if="store.cart.length > 0"
                            class="w-5 h-5 flex items-center justify-center bg-orange-500 rounded-full absolute -top-2 left-4 text-xs text-white font-medium">
                            {{ numberFormat(store.cart.length) }}
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <!--products-->
            <div v-if="product" class="col-span-12 md:col-span-9 md:bg-white md:rounded-md md:mb-10">
                <div
                    class="flex md:flex-col lg:flex-row md:gap-y-7 px-2 items-start justify-center md:py-8 md:px-4 md:gap-x-4">
                    <!--single product-->
                    <div class="flex flex-col md:flex-row items-center md:flex-auto md:items-start">
                        <!--image-->
                        <div class="w-3/5 max-w-xs mb-5 sm:mb-7">
                            <!-- <div class="w-7/12 max-w-xs mb-5"> -->
                            <img class="w-full h-auto" :src="product.imgSrc">
                            <div class="hidden md:flex items-center justify-between mt-3 gap-x-1">
                                <div class="flex-1 border border-gray-300 p-1 rounded-md">
                                    <img class="w-full h-auto" :src="product.imgSrc">
                                </div>
                                <div class="flex-1 border border-gray-300 p-1 rounded-md">
                                    <img class="w-full h-auto" :src="product.imgSrc">
                                </div>
                                <div class="flex-1 border border-gray-300 p-1 rounded-md">
                                    <img class="w-full h-auto" :src="product.imgSrc">
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:mr-5 lg:mr-7 2xl:mr-9">
                            <!--title-->
                            <div class="text-center md:text-right mb-5 md:mb-4">
                                <h1
                                    class="text-slate-800 text-lg sm:text-2xl md:text-base xl:text-xl 2xl:text-2xl font-bold mb-1 sm:max-md:mb-2 xl:mb-2 2xl:mb-3">
                                    {{
                                        product.title
                                    }} </h1>
                                <h1 class="text-slate-800 opacity-50 md:text-sm xl:text-base 2xl:text-lg">Apple Iphone 13
                                    256 GB</h1>
                            </div>

                            <hr class="w-full h-1 text-gray-300 hidden md:block mb-1 xl:mb-2 2xl:mb-4">

                            <!--colors-->
                            <div class="flex items-center justify-center gap-x-7 mb-7 w-full md:justify-start">
                                <div class="text-slate-800 text-base sm:max-md:text-lg md:text-sm xl:text-base 2xl:text-lg">
                                    انتخاب رنگ:</div>
                                <ProductColorPalette :colors="product.colors" :selected="product.selectedColor">
                                </ProductColorPalette>
                            </div>

                            <!--mobile seller-->
                            <div class=" md:hidden flex items-center flex-wrap text-xs sm:text-base gap-x-2 gap-y-4 mb-7">
                                <div class="flex items-center justify-center text-slate-800 flex-auto">
                                    <div class="flex items-center">
                                        <span class="w-4 h-4 rounded-full bg-gray-200 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1.5 right-1"
                                                fill="none" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                                    d="M1.756 6.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                                    d="M7 7c1.067 0 1.855-.87 1.75-1.937l-.385-3.897H5.641L5.25 5.063C5.145 6.13 5.932 6.999 7 6.999Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                                    d="M10.68 7c1.18 0 2.043-.957 1.926-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1H8.34l.409 4.09c.1.962.968 1.743 1.93 1.743ZM3.29 7c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 4.87C1.248 6.043 2.112 7 3.29 7ZM7 9.916c-.974 0-1.458.484-1.458 1.458v1.459h2.916v-1.459c0-.974-.484-1.458-1.458-1.458Z" />
                                            </svg>
                                        </span>
                                        <span class="mr-2 font-bold"> فروشنده:</span>
                                    </div>
                                    <span class="mr-3 opacity-70">دیجی تایز</span>
                                </div>
                                <div class="flex items-center justify-center text-slate-800 flex-auto ">
                                    <div class="flex items-center">
                                        <span class="w-4 h-4 rounded-full bg-gray-200 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1 right-1"
                                                fill="none" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.063"
                                                    d="M7.43 1.58 3.896 2.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.998.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V5.043c0-.87-.666-1.834-1.48-2.139L9.583 1.58c-.602-.22-1.566-.22-2.154 0Z" />
                                            </svg>
                                        </span>
                                        <span class="mr-2 font-bold"> گارانتی:</span>
                                    </div>
                                    <span class="mr-3 opacity-70">{{ numberFormat('18 ماه زرین خدمت') }} </span>
                                </div>
                                <div class="flex items-center justify-center text-slate-800 w-full">
                                    <div class="flex items-center">
                                        <span class="w-4 h-4 rounded-full bg-gray-200 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1.5 right-1"
                                                fill="none" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"
                                                    d="M10 1.333V8c0 .733-.6 1.333-1.333 1.333H1.333V5.08a2.6 2.6 0 0 0 2.06.92 2.562 2.562 0 0 0 1.734-.707c.206-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.907-1.94H10Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"
                                                    d="M14.667 9.333v2c0 1.107-.894 2-2 2H12C12 12.6 11.4 12 10.667 12c-.734 0-1.334.6-1.334 1.333H6.667c0-.733-.6-1.333-1.334-1.333C4.6 12 4 12.6 4 13.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 9.333 10 8.733 10 8V3.333h1.227c.48 0 .92.26 1.16.673L13.527 6h-.86C12.3 6 12 6.3 12 6.666v2c0 .367.3.667.667.667h2Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"
                                                    d="M5.333 14.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 14.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 8v1.333h-2A.669.669 0 0 1 12 8.667v-2c0-.367.3-.667.667-.667h.86l1.14 2Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                    stroke-width="1.125"
                                                    d="M6 3.333c0 .8-.353 1.513-.907 2A2.666 2.666 0 1 1 3.333.666 2.666 2.666 0 0 1 6 3.333Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                    stroke-width="1.125" d="M3.5 2.499v1l-.833.5" />
                                            </svg>
                                        </span>
                                        <span class="mr-2 font-bold"> ارسال توسط:</span>
                                    </div>
                                    <span class="mr-3 opacity-70"> انبار تهران</span>
                                </div>
                            </div>

                            <!--details-->
                            <div class="text-slate-800 bg-white rounded-lg p-4 md:p-0">
                                <h1 class="font-bold text-sm sm:max-md:text-base xl:text-base 2xl:text-xl mb-3 2xl:mb-4">
                                    ویژگی های کالا:</h1>
                                <div
                                    class="inline-grid text-sm sm:max-md:text-base xl:text-base 2xl:text-lg grid-cols-[auto_auto] place-items-center gap-x-1 gap-y-1 mb-2 2xl:mb-3">
                                    <span class="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                                    <span class="opacity-70">حافظه داخلی:</span>
                                    <span class="col-start-2 place-self-start">128 گیگابایت</span>
                                </div>
                                <br>
                                <div
                                    class="inline-grid text-sm sm:max-md:text-base xl:text-base 2xl:text-lg grid-cols-[auto_auto] place-items-center gap-x-1 gap-y-1 mb-2 2xl:mb-3">
                                    <span class="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                                    <span class="opacity-70">بازه اندازه صفحه نمایش: </span>
                                    <span class="col-start-2 text-rigt place-self-start">0.6 اینچ و بزرگتر</span>
                                </div>
                                <br>
                                <div
                                    class="inline-grid text-sm sm:max-md:text-base xl:text-base 2xl:text-lg grid-cols-[auto_auto] place-items-center gap-x-1 gap-y-1">
                                    <span class="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                                    <span class="opacity-70">شبکه های ارتباطی:</span>
                                    <span class="col-start-2 text-rigt place-self-start">2G 3G 4G 5G</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--desktop seller-->
                    <div
                        class="bg-gray-100 p-3 lg:gap-y-5 2xl:gap-y-7 rounded-md text-xs xl:text-sm 2xl:text-base lg:w-[30%] 2xl:w-[25%] md:w-4/5 mx-auto hidden md:flex flex-col">
                        <div
                            class="flex md:flex-row lg:gap-x-0 lg:flex-col lg:gap-y-5 2xl:gap-y-7 justify-between items-start">
                            <div
                                class="flex gap-y-2 flex-col lg:flex-row flex-1 md:items-center lg:items-start justify-center text-slate-800">
                                <div class="flex items-center">
                                    <span class="w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-gray-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="w-4 h-5 xl:w-6 xl:h-7 xl:-right-0.5 absolute top-1.5 right-1" fill="none"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                                d="M1.756 6.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                                d="M7 7c1.067 0 1.855-.87 1.75-1.937l-.385-3.897H5.641L5.25 5.063C5.145 6.13 5.932 6.999 7 6.999Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                                d="M10.68 7c1.18 0 2.043-.957 1.926-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1H8.34l.409 4.09c.1.962.968 1.743 1.93 1.743ZM3.29 7c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 4.87C1.248 6.043 2.112 7 3.29 7ZM7 9.916c-.974 0-1.458.484-1.458 1.458v1.459h2.916v-1.459c0-.974-.484-1.458-1.458-1.458Z" />
                                        </svg>
                                    </span>
                                    <span class="mr-2 font-bold"> فروشنده:</span>
                                </div>
                                <span class="lg:mr-1 opacity-70">دیجی تایز</span>
                            </div>
                            <div
                                class="flex gap-y-2 flex-col flex-1 lg:flex-row md:items-center lg:items-start justify-center text-slate-800">
                                <div class="flex items-center">
                                    <span class="w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-gray-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="w-4 h-5 xl:w-6 xl:h-7 xl:-right-0.5 absolute top-1 right-1" fill="none"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.063"
                                                d="M7.43 1.58 3.896 2.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.998.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V5.043c0-.87-.666-1.834-1.48-2.139L9.583 1.58c-.602-.22-1.566-.22-2.154 0Z" />
                                        </svg>
                                    </span>
                                    <span class="mr-2 font-bold"> گارانتی:</span>
                                </div>
                                <span class="lg:mr-1 opacity-70">{{ numberFormat('18 ماه زرین خدمت') }} </span>
                            </div>
                            <div
                                class="flex gap-y-2 flex-col lg:flex-row flex-1 md:items-center lg:items-start justify-center text-slate-800">
                                <div class="flex items-center">
                                    <span class="w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-gray-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="w-4 h-5 xl:w-6 xl:h-7 xl:-right-0.5 absolute top-1.5 right-1" fill="none"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"
                                                d="M10 1.333V8c0 .733-.6 1.333-1.333 1.333H1.333V5.08a2.6 2.6 0 0 0 2.06.92 2.562 2.562 0 0 0 1.734-.707c.206-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.907-1.94H10Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"
                                                d="M14.667 9.333v2c0 1.107-.894 2-2 2H12C12 12.6 11.4 12 10.667 12c-.734 0-1.334.6-1.334 1.333H6.667c0-.733-.6-1.333-1.334-1.333C4.6 12 4 12.6 4 13.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 9.333 10 8.733 10 8V3.333h1.227c.48 0 .92.26 1.16.673L13.527 6h-.86C12.3 6 12 6.3 12 6.666v2c0 .367.3.667.667.667h2Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"
                                                d="M5.333 14.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 14.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 8v1.333h-2A.669.669 0 0 1 12 8.667v-2c0-.367.3-.667.667-.667h.86l1.14 2Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                stroke-width="1.125"
                                                d="M6 3.333c0 .8-.353 1.513-.907 2A2.666 2.666 0 1 1 3.333.666 2.666 2.666 0 0 1 6 3.333Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                stroke-width="1.125" d="M3.5 2.499v1l-.833.5" />
                                        </svg>
                                    </span>
                                    <span class="mr-2 font-bold"> ارسال توسط:</span>
                                </div>
                                <span class="lg:mr-1 opacity-70"> انبار تهران</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-2 2xl:gap-y-5 justify-center items-center w-full">
                            <div class="mt-5 md:text-base xl:text-lg 2xl:text-2xl text-orange-600 text-center w-full">
                                <span class="font-bold">{{
                                    numberFormat(product.price) }}
                                </span> تومان
                            </div>
                            <Button @click="addOrRemove()"
                                class="flex items-center justify-center cursor-pointer bg-orange-500 rounded-md text-stone-50 md:w-2/5 lg:w-full p-2 md:text-base 2xl:text-xl ">
                                اضافه
                                به سبد
                                خرید
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else
                class="col-span-12 min-h-[300px] lg:min-h-[350px] 2xl:min-h-[400px]  md:col-span-9 w-full bg-white rounded-lg flex flex-col md:flex-row items-center justify-center p-5  md:p-10 md:gap-x-10 mt-2 md:mt-0">
                <div class="w-[70%] sm:w-[50%] lg:w-[40%] xl:w-[35%]">
                    <video class="w-full" autoplay loop>
                        <source src="~/public/videos/126985-product-not-found.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="w-full md:w-1/2 flex flex-col items-center gap-y-12 lg:gap-y-16 xl:gap-y-20 my-7 md:my-0">
                    <p class="text-3xl lg:text-4xl xl:text-5xl text-orange-600 font-bold">کالا یافت نشد!</p>
                    <button @click="navigateTo('/')"
                        class="text-base sm:text-lg md:text-base lg:text-lg xl:text-2xl flex items-center bg-orange-500 px-4 py-1.5 rounded-lg outline-none focus:outline-none transform transition-all hover:scale-110 text-stone-50 hover:text-stone-100">
                        <span> صفحه اصلی</span>
                        <div class="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-black">
                                <path fill-rule="evenodd"
                                    d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
                                    clip-rule="evenodd" />
                            </svg>

                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!--fixed add to cart button (mobile)-->
        <div v-if="product"
            class="md:hidden sticky bottom-0 left-0 right-0 w-full bg-white z-10 flex justify-around py-3 rounded-t-lg shadow-[0_-4px_8px_0px_rgba(0,0,0,0.1)]">
            <Button @click="addOrRemove()"
                class="flex items-center justify-center cursor-pointer bg-orange-500 text-stone-50  text-lg  rounded w-3/5">
                اضافه به سبد
                خرید</Button>
            <div class="flex flex-col text-stone-800 items-end">
                <span class="font-bold text-lg ">{{ numberFormat(product.price) }}</span>
                <span class="opacity-80">تومان</span>
            </div>
        </div>
    </div>
    <!--footer-->
    <Footer></Footer>
</template>

<script setup>
import productsArray from '~/helpers/dataBase';
import { numberFormat } from '~/helpers/formatHelper';
import { useCartStore } from '~/store/cart.store';
import { useToast } from "vue-toastification";

const store = useCartStore();
const route = useRoute();
const product = productsArray.find((o) => o.id == route.params.id);
const toast = useToast();

// onMounted(() => {
//     product = productsArray.find((o) => o.id == route.params.id);
// });

const BreadCrumbItems = [{ text: 'تلفن همراه', disabled: false, to: '#' },
{ text: 'برند آیفون', disabled: false, to: '#' },
{ text: 'آیفون13', disabled: true, to: '#' }];

// const exist = ref(store.cart.find(o => o.id == product.id) ? true : false);
// console.log(exist.value);


function addOrRemove() {
    let obj = store.cart.find(o => o.id == product.id);
    if (obj) {
        toast.info('محصول از قبل در سبد خرید شما موجود است', {
            autoClose: 2000,
        })
    }
    else {
        product.qty = 1;
        store.addRemoveCart({ product, toAdd: true });
        toast.success('محصول به سبد خریدتان اضافه شد', {
            autoClose: 1000,
        })
    }
}

</script>

<style scoped></style>