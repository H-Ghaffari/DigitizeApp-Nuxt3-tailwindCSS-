<!-- https://primevue.org/breadcrumb/ -->
<!-- https://libraries.io/npm/vue-3-breadcrumbs -->
<!-- https://stackoverflow.com/questions/70427567/how-can-i-build-dynamic-breadcrumbs-component-base-on-current-route-url -->
<!-- https://gist.github.com/AnoRebel/0690388ca901523d51476fd35d3037ab -->
<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center">
            <li v-for="(item, index) in items" :key="index">
                <div class="flex items-center">
                    <svg v-if="index != 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                        class="w-3 h-3 sm:w-4 sm:h-4 text-slate-800 mx-1">
                        <path
                            d="M34.2 261.6c-1.3-1.4-2.2-3.5-2.2-5.6s.8-4.2 2.2-5.6L147.7 130.2c1.3-1.4 3.2-2.2 5.2-2.2c3.9 0 7.1 3.2 7.1 7.1l0 241.7c0 3.9-3.2 7.1-7.1 7.1c-2 0-3.8-.8-5.2-2.2L34.2 261.6zm-23.3 22L124.4 403.7c7.4 7.8 17.7 12.3 28.4 12.3c21.6 0 39.1-17.5 39.1-39.1l0-241.7c0-21.6-17.5-39.1-39.1-39.1c-10.8 0-21.1 4.4-28.5 12.3L10.9 228.4C3.9 235.9 0 245.8 0 256s3.9 20.1 10.9 27.6z" />
                    </svg>

                    <div v-if="item.disabled"
                        class="text-sm sm:text-base xl:text-lg 2xl:text-xl text-slate-800 opacity-70 cursor-default">
                        {{ numberFormat(item.text) }}
                    </div>
                    <NuxtLink v-else :to="item.to"
                        class="text-sm sm:text-base xl:text-lg 2xl:text-xl text-orange-500 hover:text-gray-700">
                        {{ numberFormat(item.text) }}
                    </NuxtLink>
                </div>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { numberFormat } from '~/helpers/formatHelper';
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
})

</script>