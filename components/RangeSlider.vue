<!-- https://codepen.io/mountainash/pen/MeJaKx -->
<!-- https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/ -->
<!-- https://stackoverflow.com/questions/22181289/internet-explorer-11-css-style-of-range-slider -->
<!-- https://blog.openreplay.com/create-a-custom-range-slider-with-vue/ -->
<template>
    <div class="slider mt-3 2xl:mt-4 mb-7 lg:mb-8 2xl:mb-11 relative px-1">
        <span class="minimum absolute top-1.5 mt-1 left-0 text-xs lg:text-sm 2xl:text-lg text-slate-800">{{
            numberFormat(min) }}</span>
        <div class="range relative">
            <input type="range" name="slider" id="slider1" ref="slider" :value="sliderValue"
                @input="({ target }) => (sliderValue = parseFloat(target.value))" :min="min" :max="max" :step="step"
                required
                class="block w-full p-0 h-0.5 2xl:h-1 cursor-pointer rounded-sm box-content focus:outline-none focus:border-none">
            <span ref="title"
                class="tooltip whitespace-nowrap bg-stone-100 text-orange-600 text-xs lg:text-sm 2xl:text-lg z-50 absolute -bottom-7 2xl:-bottom-11 lg:-bottom-8 border px-1 pt-0.5 rounded border-orange-500 text-center">{{
                    numberFormat(sliderValue) }}
            </span>
        </div>
        <span class="maximum mt-1 absolute top-1.5 right-0 text-xs lg:text-sm 2xl:text-lg text-slate-800">{{
            numberFormat(max) }}</span>
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { numberFormat } from "~/helpers/formatHelper";

// define component props for the slider component
const { min, max, step, modelValue, color, width } = defineProps({
    width: {
        type: String,
        default: '40vw',
    },
    color: {
        type: String,
        default: '#3b82f6',
    },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    step: {
        type: Number,
        default: 1,
    },
    modelValue: {
        type: Number,
        default: 50,
    },
});

// define emits for the slider component
const emit = defineEmits(["update:modelValue"]);

// define refs for the slider component
const sliderValue = ref(modelValue); //مقدار اولیه
const slider = ref(null);
const title = ref(null);
// const thumbwidth = 12;
let thumbwidth = ref(0);

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
})
function handleResize() {
    thumbwidth.value = window.matchMedia('(min-width: 1536px)').matches ? 20 : 14;
    // console.log(thumbwidth.value);
}

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
});

// function to get the progress of the slider
function getProgress(value, min, max) {
    return ((value - min) / (max - min)) * 100;
}

// function to set the css variable for the progress
const setCSSProgress = (progress) => {
    slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
};

// watchEffect to upslider the css variable when the slider value changes
watchEffect(() => {
    if (slider.value) {
        // emit the updated value to the parent component
        emit("update:modelValue", sliderValue.value);

        // update the slider progress
        const progress = getProgress(
            sliderValue.value,
            slider.value.min,
            slider.value.max
        );

        // let extraWidth = (100 - progress) / 10;
        // // set the css variable
        // setCSSProgress(progress + extraWidth);
        setCSSProgress(progress);

        // title.value.innerHTML = sliderValue.value;

        let pos = progress / 100;

        let thumbCorrect = thumbwidth.value * (pos - 0.5) * -1;

        let titlepos = Math.round((pos * slider.value.offsetWidth) - thumbwidth.value / 0.4 + thumbCorrect);

        const maxLeft = slider.value.offsetWidth - title.value.offsetWidth;

        title.value.style.removeProperty('right');
        title.value.style.removeProperty('left');

        if (titlepos < -4) {
            title.value.style.left = -4 + 'px';
        } else if (titlepos > maxLeft) {
            title.value.style.right = -4 + 'px';
        } else {
            title.value.style.left = titlepos + 'px';
        }

        // show "progress" on the track
        pos = Math.round(pos * 99); // to hide stuff behide the thumb
        var grad = 'linear-gradient(90deg, #e2e8f0 ' + (100 - pos) + '%,' + color + ' ' + (100 - pos) + '%)';
        // console.log(grad);
        slider.value.style.setProperty("background", grad);

    }
});
</script>

<style scoped>
.range {
    width: v-bind(width);
}

input[type=range] {
    -webkit-appearance: none;
    /* background: #FFE014; */
    /* box-sizing: content-box; */
}

input[type=range]:focus {
    outline: none;
    border: none;
    /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type=range]::-ms-track {
    width: v-bind(width);
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
}

/* تا جای مین و مکس عوض شود */
input[type="range"] {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: v-bind(thumbwidth + 'px');
    height: v-bind(thumbwidth + 'px');
    border: none;
    border-radius: v-bind(thumbwidth + 'px');
    background: v-bind(color);
    cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    width: v-bind(thumbwidth + 'px');
    height: v-bind(thumbwidth + 'px');
    border: none;
    background: v-bind(color);
    border-radius: v-bind(thumbwidth + 'px');
    cursor: pointer;
}

/* Would be nice doesn't show in Chrome
input[type=range]::-webkit-slider-thumb:before {
	content: attr(data-count);
	display: block;
	background: green;
	width: 10px;
	height: 10px;
}
*/
</style>