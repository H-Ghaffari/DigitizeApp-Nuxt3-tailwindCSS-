<template>
    <button class="py-4 cursor-pointer relative" :class="active ? 'text-slate-800 font-bold' : ''">
        <span class="md:text-[15px] xl:text-lg 2xl:text-xl"> {{ title }}</span>
        <span v-show="active" class="w-1.5 h-1.5 bg-orange-400 absolute -left-1 top-3 rounded-full"></span>
    </button>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    active: {
        type: Boolean,
        default: false,
    }
})
</script>