<template>
    <div class="w-full flex flex-col overflow-visible">
        <!-- header -->
        <div @click="accordion = !accordion" :class="headerColor">
            <div
                class="hover:bg-gray-50 max-md:inline-flex md:flex cursor-pointer mb-2 flex-row max-sm:gap-x-8 max-md:gap-x-12 md:justify-between rounded-lg items-center px-2">
                <slot name="headerTitle"></slot>
                <svg :class="{ 'rotate-180': accordion }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 md:w-3 md:h-3 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 transition-all duration-700">
                    <path fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        <!-- content -->
        <div ref="tab" class="text-justify transition-all duration-500 max-h-0 overflow-hidden" :style="handleToggle()">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    headerColor: {
        type: String,
        default: 'text-black',
    }
})

const accordion = ref(false);
const tab = ref(null);

function handleToggle() {
    //console.log(tab.value);
    return accordion.value ? `max-height: ${tab.value.scrollHeight}px` : '';
}

</script>