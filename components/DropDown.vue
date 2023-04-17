<template>
    <!-- <div class="bg-gray-200 flex justify-center items-center h-screen"> -->
    <div class="relative">
        <button v-if="open" @click="open = false" class="inset-0 fixed w-full h-full bg-red-100 opacity-50 "></button>
        <button @click="open = !open"
            class="z-10 relative px-4 py-2 rounded-lg text-white inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
            :class="[color]">
            <!-- :class="[color]" -->
            <!-- :class="[`bg-${color}-500`] -->
            <span>{{ title }}</span>
            <svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 ml-1">
                <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
            </svg>
        </button>
        <div v-if="open" class="bg-white rounded-lg mt-1.5 w-56 overflow-hidden border border-gray-300 absolute left-0">
            <template v-for="(item, index) in list_items" :key="item.index">
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 ">{{ item }}</a>
            </template>
        </div>
    </div>
    <!-- </div> -->
</template>

<!-- <script setup>
const open = ref(false);
const props = defineProps({
    list_items: {
        type: Array,
        default: () => []
    },
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "bg-blue-500",
    }
})
</script> -->

<script>
export default {
    props: {
        list_items: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            // default: "bg-blue-500",
        }
    },
    setup(props) {
        const open = ref(false);
        return { open }
    }
}

</script>