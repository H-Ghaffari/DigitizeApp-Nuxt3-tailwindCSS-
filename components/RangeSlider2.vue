<!-- https://blog.openreplay.com/create-a-custom-range-slider-with-vue/ -->
<!-- https://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html -->
<!-- https://css-tricks.com/value-bubbles-for-range-inputs/ -->
<!-- https://javascript.info/coordinates -->
<!-- https://matcha.fyi/range-slider-javascript/ -->
<!-- https://stackoverflow.com/questions/10004723/html5-input-type-range-show-range-value -->
<!-- https://stackoverflow.com/questions/22181289/internet-explorer-11-css-style-of-range-slider -->
<!-- https://stackoverflow.com/questions/48880523/how-to-precisely-find-thumb-position-of-input-type-range -->

<template>
    <div class="mt-5 h-12 w-[197px] relative p-2">
        <span class="absolute bottom-0 left-0 pl-4 text-xs">{{ numberFormat(min) }}</span>
        <div class="custom-slider relative w-[168px]">
            <input ref="slider" :value="sliderValue" @input="({ target }) => (sliderValue = parseFloat(target.value))"
                type="range" :min="min" :max="max" :step="step"
                class="slider w-full relative appearance-none rounded-lg z-0" />

            <div ref="tooltip"
                class="tooltip bg-stone-100 text-orange-400 text-xs font-bold z-10 absolute border px-1 pt-0.5 rounded border-orange-500 ">
                {{ numberFormat(sliderValue) }}
            </div>
        </div>
        <span class="absolute bottom-0 right-0 text-xs">{{ numberFormat(max) }}</span>
    </div>
</template>


<script setup>
import { ref, watchEffect } from "vue";
import { numberFormat } from "~/helpers/formatHelper";

// define component props for the slider component
const { min, max, step, modelValue, color } = defineProps({
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
const tooltip = ref(null);
const bgColor = ref('');

// function to get the progress of the slider
const getProgress = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
};

// function to set the css variable for the progress
const setCSSProgress = (progress) => {
    slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
};

// watchEffect to update the css variable when the slider value changes
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

        let extraWidth = (100 - progress) / 10;
        // set the css variable
        setCSSProgress(progress + extraWidth);

        const length = sliderValue.value.toString().length;

        tooltip.value.style.left = ((progress - ((length - 1) * progress / 25))) - (length > 1 ? 5 : 0) + '%';
        bgColor.value = [
            '-webkit-gradient(',
            'linear, ',
            'left top, ',
            'right top, ',
            'color-stop(' + (1 - progress / 100) + ', #e2e8f0), ',
            'color-stop(' + (1 - progress / 100) + ',' + color + ')',
            ')'
        ].join('');

        // bgColor.value = [
        //     'linear-gradient(',
        //     'to left top, ',
        //     'to right top, ',
        //     'color-stop(' + (1 - progress / 100) + ', #e2e8f0), ',
        //     'color-stop(' + (1 - progress / 100) + ',' + color + ')',
        //     ')'
        // ].join('');

        console.log(bgColor.value);
        // console.log(tooltip.value.children[0]);
        // var off = slider.value.offsetWidth / (parseInt(slider.value.max) - parseInt(slider.value.min));
        // var px = ((slider.value.valueAsNumber - parseInt(slider.value.min)) * off) - (tooltip.value.children[0].offsetWidth / 2);
        // tooltip.value.style.right = px + 'px';
        // console.log(slider.value.getBoundingClientRect());   

        // const ratio = (range.value - range.min) / (range.max - range.min)
        // tooltip.style.left = `calc(${thumbSize / 2}px + ${ratio * 100} - ${ratio} * ${thumbSize}px)`

    }
});
</script>

<style scoped>
/* دو تا متغییر دلخواه تعریف کردیم */
.custom-slider {
    --trackHeight: 0.0625rem;
    --thumbRadius: 0.75rem;
}

/* تا جای مین و مکس عوض شود */
.range-slider input[type="range"] {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.range-slider {
    margin: auto;
    text-align: center;
    position: relative;
}

.range-slider input[type="range"] {
    position: absolute;
    left: 0;
    bottom: 0;
}

input[type="range"]:focus {
    /* Eliminates focus on Chrome, Edge */
    outline: none;
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
}

input[type=range]:focus {
    outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--trackHeight);
    cursor: pointer;
    background: #2497e3;
    border-radius: 25px;
    cursor: pointer;
    border: 0;
}

input[type="range"]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    border: none;
    height: var(--thumbRadius);
    width: var(--thumbRadius);
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    margin-top: -7px;
}

input[type="range"]::-moz-range-track {
    width: 100%;
    height: var(--trackHeight);
    cursor: pointer;
    background: #2497e3;
    border-radius: 1px;
    box-shadow: none;
    border: 0;
}

input[type="range"]::-moz-range-thumb {
    z-index: 2;
    position: relative;
    border: none;
    height: var(--thumbRadius);
    width: var(--thumbRadius);
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
}

input[type="range"]::-ms-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
}

input[type="range"]::-ms-fill-lower,
input[type="range"]::-ms-fill-upper {
    background: #2497e3;
    border-radius: 1px;
    box-shadow: none;
    border: 0;
}

input[type="range"]::-ms-tooltip {
    display: none;
}

input[type="range"]::-ms-thumb {
    z-index: 2;
    box-shadow: 0px 0px 0px #000;
    border: 1px solid #2497e3;
    height: 7px;
    width: 7px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
}
</style>