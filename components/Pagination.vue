<template>
    <div class="flex justify-end">
        <ul class="list-none bg-transparent p-2 flex items-center">
            <li class="inline-block">
                <span
                    class="similar cursor-not-allowed text-slate-800 opacity-50 2xl:px-2 xl:px-1.5 md:px-1 md:h-9 lg:h-10 xl:h-12 2xl:h-14"
                    v-if="isInFirstPage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                        class="md:w-5 md:h-4 lg:w-6 lg:h-5 2xl:w-7 2xl:h-6" fill="currentColor">
                        <path
                            d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
                    </svg>
                </span>
                <a v-else @click.prevent="onClickFirstPage"
                    class="similar text-slate-800 2xl:px-2 xl:px-1.5 md:px-1 md:h-9 lg:h-10 xl:h-12 2xl:h-14" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                        class="md:w-5 md:h-4 lg:w-6 lg:h-5 2xl:w-7 2xl:h-6" fill="currentColor">
                        <path
                            d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
                    </svg>
                </a>
            </li>

            <li class="inline-block">
                <span
                    class="cursor-not-allowed similar text-slate-800 opacity-50 2xl:px-1 xl:px-0.5 md:h-9 lg:h-10 xl:h-12 2xl:h-14"
                    v-if="isInFirstPage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                        class="md:w-6 md:h-5 lg:w-7 lg:h-6 2xl:w-8 2xl:h-7" fill="currentColor">
                        <path
                            d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                </span>
                <a v-else @click.prevent="onClickPreviousPage"
                    class="similar text-slate-800 2xl:px-1 xl:px-0.5 md:h-9 lg:h-10 xl:h-12 2xl:h-14" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                        class="md:w-6 md:h-5 lg:w-7 lg:h-6 2xl:w-8 2xl:h-7" fill="currentColor">
                        <path
                            d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                </a>
            </li>

            <li v-for="page in pages" class="inline-block" :key="page.name">
                <span
                    class="cursor-not-allowed similar activeNumber md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl md:h-9 md:px-2 lg:h-10 xl:h-12 xl:px-2.5 2xl:h-14 2xl:px-3"
                    v-if="isPageActive(page.name)">
                    {{ numberFormat(page.name) }}
                </span>
                <a class="similar text-slate-600 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl md:h-9 md:px-2 lg:h-10 xl:h-12 xl:px-2.5 2xl:h-14 2xl:px-3"
                    href="#" v-else @click.prevent="onClickPage(page.name)" role="button">
                    {{ numberFormat(page.name) }}
                </a>
                <!-- <button
					type="button"
					@click="onClickPage(page.name)"
					:disabled="page.isDisabled"
					:class="{ active: isPageActive(page.name) }" 
				>{{ page.name }}</button> -->
            </li>

            <li class="inline-block">
                <span
                    class="cursor-not-allowed similar text-slate-800 opacity-50 2xl:px-1 xl:px-0.5 md:h-9 lg:h-10 xl:h-12 2xl:h-14"
                    v-if="isInLastPage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                        class="md:w-6 md:h-5 lg:w-7 lg:h-6 2xl:w-8 2xl:h-7" fill="currentColor">
                        <path
                            d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                    </svg>
                </span>
                <a v-else @click.prevent="onClickNextPage"
                    class="similar text-slate-800 2xl:px-1 xl:px-0.5 md:h-9 lg:h-10 xl:h-12 2xl:h-14" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                        class="md:w-6 md:h-5 lg:w-7 lg:h-6 2xl:w-8 2xl:h-7" fill="currentColor">
                        <path
                            d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                    </svg>
                </a>
            </li>

            <li class="inline-block">
                <!-- <button
					type="button"
					@click="onClickLastPage"
					:disabled="isInLastPage"
					aria-label="Go to last page"
				>Last</button> -->
                <span
                    class="cursor-not-allowed similar text-slate-800 opacity-50 2xl:px-2 xl:px-1.5 md:px-1 md:h-9 lg:h-10 xl:h-12 2xl:h-14"
                    v-if="isInLastPage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                        class="md:w-5 md:h-4 lg:w-6 lg:h-5 2xl:w-7 2xl:h-6" fill="currentColor">
                        <path
                            d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
                    </svg>
                </span>
                <a href="#" @click.prevent="onClickLastPage"
                    class="similar text-slate-800 2xl:px-2 xl:px-1.5 md:px-1 md:h-9 lg:h-10 xl:h-12 2xl:h-14" v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                        class="md:w-5 md:h-4 lg:w-6 lg:h-5 2xl:w-7 2xl:h-6" fill="currentColor">
                        <path
                            d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { numberFormat } from "~/helpers/formatHelper";

const props = defineProps({
    maxVisibleButtons: {
        type: Number,
        required: false,
        default: 5
    },

    totalPages: {
        type: Number,
        required: true
    },

    total: {
        type: Number,
        required: true
    },

    perPage: {
        type: Number,
        required: true
    },

    currentPage: {
        type: Number,
        required: true
    },

    hasMorePages: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['pagechanged']);

const middle = Math.floor((props.maxVisibleButtons - 1) / 2);
const route = useRoute();
const router = useRouter();

const startPage = computed(() => {
    if (props.currentPage === 1) {
        return 1;
    }

    if (props.currentPage === props.totalPages) {
        return props.totalPages - props.maxVisibleButtons + 1;
    }

    if (props.currentPage - middle > 0)
        return props.currentPage - middle;
    else return 1;
});

const endPage = computed(() =>
    Math.min(
        startPage.value + props.maxVisibleButtons - 1,
        props.totalPages
    )
);

const pages = computed(() => {
    const range = [];
    let i = startPage.value;

    if ((endPage.value - startPage.value) < (props.maxVisibleButtons - 1)) {
        let dist = (props.maxVisibleButtons - 1) - (endPage.value - startPage.value);
        i = startPage.value - dist;
    }

    for (i; i <= endPage.value; i += 1) {
        range.push({
            name: i,
            isDisabled: i === props.currentPage
        });
    }

    return range;
});

const isInFirstPage = computed(() => props.currentPage === 1);

const isInLastPage = computed(() => props.currentPage === props.totalPages);

function onClickFirstPage() {
    router.push({
        path: route.path,
        query: { ...route.query, page: 1 }
    });
    emit("pagechanged", 1);
};

function onClickPreviousPage() {
    router.push({
        path: route.path,
        query: { ...route.query, page: props.currentPage - 1 }
    });
    emit("pagechanged", props.currentPage - 1);
};

function onClickPage(p) {
    router.push({
        path: route.path,
        query: { ...route.query, page: p }
    });
    emit("pagechanged", p);
};

function onClickNextPage() {
    router.push({
        path: route.path,
        query: { ...route.query, page: props.currentPage + 1 }
    });
    emit("pagechanged", props.currentPage + 1);
};

function onClickLastPage() {
    router.push({
        path: route.path,
        query: { ...route.query, page: props.totalPages }
    });
    emit("pagechanged", props.totalPages);
};

function isPageActive(page) {
    return props.currentPage === page;
};

</script>

<style scoped>
/* w-10 h-14 */
.similar {
    @apply no-underline flex items-center justify-center mx-0.5 leading-none;
}

/* hover:bg-orange-100 */
.similar:hover {
    @apply bg-white rounded-md;
}

.activeNumber {
    @apply bg-orange-400 font-bold text-slate-900 rounded-md
}

/* 
.iconActive {
    @apply
} */
</style>