<template>
    <div class="flex justify-center items-center h-7 sm:h-9">
        <template v-for="(color, index) in colors" :key="index">
            <!-- :class="bgColor[index]" -->
            <!-- :style="handleColor(index)" -->
            <!-- <div @click="selectedColor = color" :style="{ 'background-color': color }" -->
            <div @click="handleClick(color)" :style="{ 'background-color': color }"
                :class="[{ '-mr-1.5': index > 0 }, { 'ring-2': selectedColor === color }]"
                class="ringColor w-5 h-5 sm:w-7 sm:h-7 border-2 flex justify-center items-center border-white  rounded-full">
                <svg v-show="selectedColor === color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    class="w-3 h-3 sm:w-5 sm:h-5 fill-white">
                    <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </template>
        <!-- <div @click="selectedColor = colors[0]" :class="selectedColor === 'indigo' ? 'ring-2 ring-indigo-600' : ''"
            class="w-5 h-5 sm:w-7 sm:h-7 border-2 flex justify-center items-center border-white  rounded-full bg-indigo-600">
            <svg v-show="selectedColor === 'indigo'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                class="w-3 h-3 sm:w-5 sm:h-5 fill-white">
                <path fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <div @click="selectedColor = colors[1]" :class="selectedColor === 'yellow' ? 'ring-2 ring-yellow-400' : ''"
            class="w-5 h-5 sm:w-7 sm:h-7 border-2 flex justify-center items-center border-white rounded-full bg-yellow-400 -mr-1.5">
            <svg v-show="selectedColor === 'yellow'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                class="w-3 h-3 sm:w-5 sm:h-5 fill-white">
                <path fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <div @click="selectedColor = colors[2]" :class="selectedColor === 'orange' ? 'ring-2 ring-orange-400' : ''"
            class="w-5 h-5 sm:w-7 sm:h-7 border-2 flex justify-center items-center border-white rounded-full bg-orange-400 -mr-1.5">
            <svg v-show="selectedColor === 'orange'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                class="w-3 h-3 sm:w-5 sm:h-5 fill-white">
                <path fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <div @click="selectedColor = 'slate'" :class="selectedColor === 'slate' ? 'ring-2 ring-slate-900' : ''"
            class="w-5 h-5 sm:w-7 sm:h-7 border-2 flex justify-center items-center border-white rounded-full bg-slate-900 -mr-1.5">
            <svg v-show="selectedColor === 'slate'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                class="w-3 h-3 sm:w-5 sm:h-5 fill-white">
                <path fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd" />
            </svg>
        </div> -->
    </div>
</template>
<script setup>
import { hexToRgb } from "~/helpers/hexToRgb.js"
const props = defineProps({
    colors: {
        type: Array,
        default: () => [],
    },
    selected: {
        type: String,
        default: '',
    }
});
const selectedColor = ref(props.selected);


function handleClick(color) {
    //console.log(event.target);
    selectedColor.value = color;
    //event.target.classList.add('ring-2');
    //event.target.style.setProperty('--tw-ring-color', `rgb(${hexToRgb(color)})`);
    // let ring = document.querySelector('.ring-2');
    // if (ring != null) { ring.style.setProperty('--tw-ring-color', `rgb(${hexToRgb(oldValue)})`); }
}

// watch(selectedColor, (newValue, oldValue) => {
//     console.log("selectedColor", selectedColor.value);

//     if (process.client) {

//         let ring = document.querySelector('.ring-2');
//         console.log(ring);
//         // console.log(selectedColor.value);
//         // console.log("currentValue", currentValue);
//         // console.log("oldValue", oldValue);
//         if (ring != null) { ring.style.setProperty('--tw-ring-color', `rgb(${hexToRgb(oldValue)})`); }
//     }
// }, { immediate: true });


// function handleColor(x) {
//     let style = `background-color: ${props.colors[x]}`;
//     // let ring = document.querySelector('.ring-2');
//     //if (ring != null) { ring.style.setProperty('--tw-ring-color', `rgb(${hexToRgb(props.colors[x])})`); }
//     console.log(style);
//     return style;
// }

</script>

<style scoped>
.ringColor {
    --tw-ring-color: rgb(v-bind(hexToRgb(selectedColor)));
}
</style>
