<template>
    <div class="text-orange-400 font-bold text-lg lg:text-xl 2xl:text-2xl mb-5">فیلتر</div>
    <div class="flex flex-col w-full">
        <!--برند محصول 1-->
        <FilterAccordion :headerColor="'text-slate-800'" :class="'mb-3 2xl:mb-4'">
            <template v-slot:headerTitle>
                <div class="flex items-center py-2 cursor-pointer rounded-md">
                    <span class="w-5 h-5 rounded-full bg-gray-200 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1.5 right-1.5" fill="none"
                            stroke="currentColor">
                            <path fill="#222F5D"
                                d="M12.833 13.271H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h11.666a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437Z" />
                            <path fill="#222F5D"
                                d="M2.158 12.833h-.875l.03-7.017c0-.496.227-.957.618-1.26l4.083-3.18a1.61 1.61 0 0 1 1.972 0l4.083 3.174c.385.303.619.776.619 1.266v7.017h-.875V5.821a.747.747 0 0 0-.28-.577L7.449 2.07a.735.735 0 0 0-.898 0L2.468 5.25a.727.727 0 0 0-.28.571l-.03 7.012Z" />
                            <path fill="#222F5D"
                                d="M9.917 13.27H4.083a.44.44 0 0 1-.437-.437V7.291c0-.723.589-1.312 1.312-1.312h4.084c.723 0 1.312.59 1.312 1.313v5.541a.44.44 0 0 1-.437.438Zm-5.396-.874h4.958V7.29a.44.44 0 0 0-.437-.437H4.958a.44.44 0 0 0-.437.438v5.104Z" />
                            <path fill="#222F5D"
                                d="M5.833 10.791a.44.44 0 0 1-.437-.437v-.875a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v.875a.44.44 0 0 1-.438.438ZM7.875 4.813h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438h1.75a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z" />
                        </svg>
                    </span>
                    <span class="mr-2 2xl:mr-3 md:text-base lg:text-lg 2xl:text-[22px]">برند محصول</span>
                </div>
            </template>
            <template v-slot:content>
                <!-- content -->
                <div class="md:text-base lg:text-lg 2xl:text-xl px-3 2xl:px-4">
                    <label for="apple" class="flex items-center py-2 2xl:py-3 cursor-pointer">
                        <input type="checkbox"
                            class="form-checkbox rounded-sm text-orange-300 focus:ring-orange-400 2xl:w-5 2xl:h-5"
                            name="brand" id="apple">
                        <span class="mr-2 2xl:mr-2.5"> اپل</span>
                    </label>
                    <label for="samsung" class="flex items-center py-2 2xl:py-3  cursor-pointer">
                        <input type="checkbox"
                            class="form-checkbox 2xl:w-5 2xl:h-5 rounded-sm text-orange-300 focus:ring-orange-400"
                            name="brand" id="sumsung">
                        <span class="mr-2 2xl:mr-2.5"> سامسونگ</span>
                    </label>
                    <label for="xiaumi" class="flex items-center py-2 2xl:py-3  cursor-pointer">
                        <input type="checkbox"
                            class="form-checkbox rounded-sm text-orange-300 focus:ring-orange-400 2xl:w-5 2xl:h-5"
                            name="brand" id="xiaumi">
                        <span class="mr-2 2xl:mr-2.5"> شیائومی</span>
                    </label>
                </div>
            </template>
        </FilterAccordion>
        <!--رنگ محصول 2-->
        <FilterAccordion :headerColor="'text-slate-800'" :class="'mb-3 2xl:mb-4'">
            <template v-slot:headerTitle>
                <div class="flex items-center text-slate-800 py-2 cursor-pointer  rounded-md">
                    <span class="w-5 h-5 rounded-full bg-gray-200 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1.5 right-1.5" fill="none"
                            stroke="currentColor">
                            <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                d="M5.833 2.625V10.5c0 .63-.256 1.207-.665 1.627l-.023.024a1.83 1.83 0 0 1-.163.146 2.041 2.041 0 0 1-.578.35c-.064.029-.128.052-.192.075-.228.076-.473.111-.712.111a2.48 2.48 0 0 1-.467-.046c-.075-.018-.151-.036-.227-.059a2.117 2.117 0 0 1-.268-.099c0-.006 0-.006-.006 0a2.946 2.946 0 0 1-.467-.286l-.006-.006a1.598 1.598 0 0 1-.21-.186c-.064-.07-.128-.14-.192-.216a2.94 2.94 0 0 1-.286-.467c.006-.006.006-.006 0-.006 0 0 0-.005-.006-.011-.035-.082-.064-.17-.093-.257-.024-.076-.041-.152-.059-.228a2.483 2.483 0 0 1-.046-.466V2.625c0-.875.583-1.458 1.458-1.458h1.75c.875 0 1.458.583 1.458 1.458Z" />
                            <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                d="M12.833 9.625v1.75c0 .875-.583 1.458-1.458 1.458H3.5c.24 0 .484-.035.712-.11.064-.024.128-.047.192-.077.204-.081.403-.198.578-.35.052-.04.11-.093.163-.145l.023-.024 3.967-3.96h2.24c.875 0 1.458.583 1.458 1.458ZM2.806 12.729a2.237 2.237 0 0 1-.957-.578 2.237 2.237 0 0 1-.577-.957c.227.73.805 1.307 1.534 1.534Z" />
                            <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                d="m10.716 6.586-1.581 1.58-3.967 3.961c.409-.42.665-.997.665-1.627V4.865l1.581-1.58c.618-.62 1.447-.62 2.065 0l1.237 1.236c.618.618.618 1.446 0 2.065ZM3.5 11.083a.583.583 0 1 0 0-1.167.583.583 0 0 0 0 1.167Z" />
                        </svg>
                    </span>
                    <span class="mr-2 2xl:mr-3 md:text-base lg:text-lg 2xl:text-[22px]">رنگ محصول</span>
                </div>
            </template>
            <template v-slot:content>
                <div class="md:text-base lg:text-lg 2xl:text-xl px-3 2xl:px-4">
                    <label for="red" class="flex items-center py-2 2xl:py-3  cursor-pointer">
                        <input type="checkbox"
                            class="form-checkbox rounded-sm text-orange-300 focus:ring-orange-400 2xl:w-5 2xl:h-5"
                            name="color" id="red">
                        <span class="mr-2 2xl:mr-2.5"> قرمز</span>
                    </label>
                    <label for="blue" class="flex items-center py-2 2xl:py-3  cursor-pointer">
                        <input type="checkbox"
                            class="form-checkbox rounded-sm text-orange-300 focus:ring-orange-400 2xl:w-5 2xl:h-5"
                            name="color" id="blue">
                        <span class="mr-2 2xl:mr-2.5"> آبی</span>
                    </label>
                    <label for="green" class="flex items-center py-2 2xl:py-3 cursor-pointer">
                        <input type="checkbox"
                            class="form-checkbox rounded-sm text-orange-300 focus:ring-orange-400 2xl:w-5 2xl:h-5"
                            name="color" id="green">
                        <span class="mr-2 2xl:mr-2.5"> سبز</span>
                    </label>
                </div>
            </template>
        </FilterAccordion>
        <!--محدوده قیمت-->
        <FilterAccordion :headerColor="'text-slate-800'">
            <template v-slot:headerTitle>
                <div class="flex items-center text-slate-800 py-2 cursor-pointer  rounded-md">
                    <span class="w-5 h-5 rounded-full bg-gray-200 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5 absolute top-1.5 right-1.5" fill="none"
                            stroke="currentColor">
                            <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                d="M10.523 7.904c-.245.239-.385.583-.35.95.053.63.63 1.091 1.26 1.091h1.109v.695a2.198 2.198 0 0 1-2.194 2.193H3.652a2.198 2.198 0 0 1-2.194-2.193V6.714c0-1.208.986-2.193 2.194-2.193h6.696c1.208 0 2.194.985 2.194 2.193v.84h-1.179c-.326 0-.624.128-.84.35Z" />
                            <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"
                                d="M1.458 7.239V4.573c0-.694.426-1.313 1.074-1.558l4.631-1.75c.724-.274 1.5.263 1.5 1.039V4.52M13.16 8.15v1.2c0 .322-.257.584-.584.596h-1.143c-.63 0-1.208-.461-1.26-1.091a1.172 1.172 0 0 1 .35-.95c.216-.222.513-.35.84-.35h1.213a.599.599 0 0 1 .583.594ZM4.083 7h4.084" />
                        </svg>
                    </span>
                    <span class="mr-2 2xl:mr-3 md:text-base lg:text-lg 2xl:text-[22px]">محدوده قیمت</span>
                </div>
            </template>
            <template v-slot:content>
                <RangeSlider color="#f97316" :min="1900000" :max="59312000" v-model="slider1" width="100%" />
            </template>
        </FilterAccordion>
    </div>
</template>

<script setup>
const slider1 = ref(40000000);
</script>