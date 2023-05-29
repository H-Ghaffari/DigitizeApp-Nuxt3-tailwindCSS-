<template>
    <div class="container mx-auto md:hidden flex justify-between items-center mt-9 text-slate-800 mb-4 px-2">
        <div>
            <slot name="icon"></slot>
        </div>
        <div class="font-bold text-slate-800" :class="fontSize"> {{ title }}</div>
        <div class="rounded bg-white w-8 h-8 flex justify-center items-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                class="w-6 h-6 stroke-slate-800">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },

    fontSize: {
        type: String,
        default: 'text-xl'
    }
});

</script>