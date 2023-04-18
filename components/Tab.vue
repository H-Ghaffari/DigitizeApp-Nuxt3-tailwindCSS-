<template>
    <div class="max-w-md w-full flex flex-col gap-y-2">
        <!-- Tab header -->
        <div class="rounded-xl bg-blue-600 font-semibold text-gray-100 flex items-center justify-between p-1 gap-x-1">
            <button @click="tabNo = 1" :class="tabNo === 1 ? activeBtn : ''"
                class="px-2 py-3 w-full rounded-xl hover:bg-blue-500  focus:outline-none  focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-blue-500">
                Recent</button>
            <button @click="tabNo = 2" :class="tabNo === 2 ? activeBtn : ''"
                class="px-4 py-3 w-full rounded-xl hover:bg-blue-500  focus:outline-none focus:text-blue-700 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-blue-500">
                Popular</button>
            <button @click="tabNo = 3" :class="tabNo === 3 ? activeBtn : ''"
                class="px-2 py-3 w-full rounded-xl hover:bg-blue-500  focus:outline-none focus:text-blue-700 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-blue-500">
                Trending</button>
        </div>

        <!-- Tab content -->
        <div class="bg-white rounded-xl p-3">
            <!--1-->
            <div v-show="tabNo === 1">
                <div class="p-3 hover:bg-gray-100 hover:rounded-lg">
                    <p class="font-medium text-base">Does drinking coffee make you master?</p>
                    <span class="text-sm text-gray-500">5h ago &bull; 5comments &bull; 2 shares</span>
                </div>
                <div class="mt-1 p-3 hover:bg-gray-100 hover:rounded-lg">
                    <p class="font-medium text-base">Does drinking coffee make you master?</p>
                    <span class="text-sm text-gray-500">5h ago &bull; 5comments &bull; 2 shares</span>
                </div>
            </div>
            <!--2-->
            <div v-show="tabNo === 2">
                <div class="p-3 hover:bg-gray-100 hover:rounded-lg">
                    <p class="font-medium text-base">Is tech making coffee better or worse ?</p>
                    <span class="text-sm text-gray-500">5h ago &bull; 5comments &bull; 2 shares</span>
                </div>
                <div class="mt-1 p-3 hover:bg-gray-100 hover:rounded-lg">
                    <p class="font-medium text-base">Is tech making coffee better or worse ?</p>
                    <span class="text-sm text-gray-500">5h ago &bull; 5comments &bull; 2 shares</span>
                </div>
            </div>
            <!--3-->
            <div v-show="tabNo === 3">
                <div class="p-3 hover:bg-gray-100 hover:rounded-lg">
                    <p class="font-medium text-base">Ask me Anything : 10 answers to your questuions about coffee?</p>
                    <span class="text-sm text-gray-500">5h ago &bull; 5comments &bull; 2 shares</span>
                </div>
                <div class="mt-1 p-3 hover:bg-gray-100 hover:rounded-lg">
                    <p class="font-medium text-base">Ask me Anything : 10 answers to your questuions about coffee?</p>
                    <span class="text-sm text-gray-500">5h ago &bull; 5comments &bull; 2 shares</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const tabNo = ref(1);
const activeBtn = "bg-white text-blue-700";
useHead({
    bodyAttrs: {
        class: 'bg-blue-400',
    }
})
</script>