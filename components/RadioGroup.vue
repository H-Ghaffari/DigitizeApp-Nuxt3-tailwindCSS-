<template>
    <!-- <div class="bg-cyan-500 flex justify-center items-center h-screen"> -->
    <div class="flex flex-col gap-y-2  max-w-md w-full">
        <!--one-->
        <div @click="radio = 'one'" class=" rounded-lg p-4 flex cursor-pointer justify-between items-center"
            :class="radio === 'one' ? activeClass : 'bg-white'">
            <div>
                <p class="font-medium">Startup</p>
                <span class="font-light " :class="radio === 'one' ? 'text-gray-200' : 'text-gray-600'">12GB/6 CPUs ·
                    160 GB SSD disk</span>
            </div>
            <div v-if="radio === 'one'"
                class=" rounded-full bg-cyan-600 w-6 h-6 flex justify-center items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                    <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd" />
                </svg>

            </div>
        </div>
        <!--two-->
        <div @click="radio = 'two'" :class="radio === 'two' ? activeClass : 'bg-white'"
            class=" rounded-lg p-4 flex cursor-pointer justify-between items-center">
            <div>
                <p class="font-medium">Startup</p>
                <span class="font-light" :class="[radio === 'two' ? 'text-gray-200' : 'text-gray-600']">12GB/6 CPUs ·
                    160 GB SSD disk</span>
            </div>
            <div v-if="radio === 'two'"
                class=" rounded-full bg-cyan-600 w-6 h-6 flex justify-center items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                    <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd" />
                </svg>

            </div>
        </div>
        <!--three-->
        <div @click="radio = 'three'" :class="radio === 'three' ? activeClass : 'bg-white'"
            class=" rounded-lg p-4 flex cursor-pointer justify-between items-center">
            <div>
                <p class="font-medium">Startup</p>
                <span class="font-light" :class="[radio === 'three' ? 'text-gray-200' : 'text-gray-600']">12GB/6 CPUs ·
                    160 GB SSD disk</span>
            </div>
            <div v-if="radio === 'three'"
                class=" rounded-full bg-cyan-600 w-6 h-6 flex justify-center items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                    <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd" />
                </svg>

            </div>
        </div>


    </div>
    <!-- </div> -->
</template>

<script setup>
const radio = ref('one');
// const activeClass = "ring-4 ring-offset-1 ring-offset-transparent ring-cyan-200 bg-cyan-800 text-white";
const activeClass = "ring-4 ring-cyan-200 bg-cyan-800 text-white";
useHead({
    // bodyAttrs: {
    //     class: 'bg-cyan-500 flex justify-center items-center h-screen',
    // }
    bodyAttrs: {
        class: 'bg-cyan-500',
    }
})
</script>

