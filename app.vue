<template>
  <NuxtPage>
  </NuxtPage>
  <div id="modals" class="relative z-[999]"></div>
</template>
<script setup>

import { useCartStore } from './store/cart.store';
import { onMounted } from 'vue';

useHead({
  title: 'Digitize App',
  htmlAttrs: { dir: 'rtl', lang: 'fa' },
  //htmlAttrs: { dir: 'rtl' },
});

const store = useCartStore();

onMounted(async () => {
  await store.initialiseStore();
});

</script>
