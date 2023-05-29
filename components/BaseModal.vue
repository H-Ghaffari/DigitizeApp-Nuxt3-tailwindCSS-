<!-- https://lobotuerto.com/notes/a-basic-modal-component-with-vue-and-tailwind -->
<template>
    <!-- Render inside our `<div id="modals"></div>` in index.html -->
    <Teleport to="#modals">
        <!-- Show / hide the modal -->
        <div v-if="show" class="md:hidden transition-all duration-1000">
            <!-- The backdrop --><!--bg-gray-900 opacity-40-->
            <div @click="$emit('closeModal')" class="fixed inset-0 backdrop-blur-[2px] transition-all duration-1000">
            </div>

            <!-- Where the actual content goes -->
            <slot></slot>
        </div>
    </Teleport>
</template>

<script setup>

const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    }
});

const emits = defineEmits(['closeModal']);

// const showVar = ref(props.show);

</script>