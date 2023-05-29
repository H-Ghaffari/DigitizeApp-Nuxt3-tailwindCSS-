<template>
    <div class="flex justify-end w-full">
        <input type="text" ref="input"
            class="m-0 text-center w-full max-w-[150px] placeholder:text-gray-300 block !border-l-0 py-1 !rounded-r-md border-solid border-slate-700 bg-transparent md:px-1 lg:px-2 md:text-sm lg:text-base font-normal !leading-none text-neutral-700 transition duration-200 ease-in-out focus:z-[3] focus:border-orange-500 focus:text-neutral-700 focus:ring-0 focus:ring-offset-0 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="123ABC" />
        <button @click="sent()"
            class="z-[2] inline-block rounded-l-md bg-orange-600 md:px-2 lg:px-3 md:text-sm lg:text-base font-medium !leading-none  text-stone-50 hover:bg-orange-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init type="button">
            تایید
        </button>
    </div>
</template>
<script setup>

const input = ref(null);
const emits = defineEmits(['sentCode']);

function sent(event) {
    emits('sentCode', input.value.value);
}

</script>
