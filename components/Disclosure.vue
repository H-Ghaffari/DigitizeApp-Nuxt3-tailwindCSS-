<template>
    <div class="bg-white rounded-2xl p-2 max-w-md w-full flex flex-col gap-y-4">
        <!-- accordion NO.1 -->
        <div class="flex flex-col gap-y-2">
            <!-- header -->
            <div @click="accordion[0] = !accordion[0]"
                class="flex cursor-pointer py-2 px-4 flex-row justify-between rounded-lg font-semibold text-sm items-center text-fuchsia-800 bg-fuchsia-100 hover:bg-fuchsia-200">
                <span>What is your refund policy?</span>
                <svg :class="{ 'rotate-180': accordion[0] }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" class="w-4 h-4 transition-all duration-700">
                    <path fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <!-- content -->
            <div ref="tab"
                class="px-2 text-justify transition-all duration-500 max-h-0 overflow-hidden text-gray-500 font-medium text-sm"
                :style="handleToggle(0)">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem repellat totam id cumque voluptatibus
                magnam esse quas ratione itaque laborum odit qui, hic accusamus corrupti iusto perspiciatis nisi possimus,
                numquam fugit praesentium eligendi. Rem illum pariatur doloribus nam veritatis totam deleniti. Molestias,
                modi nulla. Necessitatibus officia voluptatum voluptatibus unde autem voluptates doloremque sit inventore
                maiores explicabo, odit incidunt aspernatur nihil blanditiis saepe consectetur delectus corrupti reiciendis
                odio, neque aperiam eum quaerat earum! Voluptatibus velit maxime magni dignissimos, tenetur sapiente
                expedita repellendus, nam omnis assumenda voluptate commodi incidunt id, maiores dolor natus eius eum ut quo
                totam facere minima. Consectetur, placeat.
            </div>
        </div>

        <!-- accordion NO.2 -->
        <div class="flex flex-col gap-y-2">
            <!-- header -->
            <div @click="accordion[1] = !accordion[1]"
                class="flex cursor-pointer py-2 px-4 flex-row justify-between rounded-lg font-semibold text-sm items-center text-fuchsia-800 bg-fuchsia-100 hover:bg-fuchsia-200">
                <span>What is your refund policy?</span>
                <svg :class="{ 'rotate-180': accordion[1] }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" class="w-4 h-4 transition-all duration-700">
                    <path fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <!-- content -->
            <div ref="tab"
                class="px-2 text-justify transition-all duration-500 max-h-0 overflow-hidden text-gray-500 font-medium text-sm"
                :style="handleToggle(1)">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem repellat totam id cumque voluptatibus
                magnam esse quas ratione itaque laborum odit qui, hic accusamus corrupti iusto perspiciatis nisi possimus,
                numquam fugit praesentium eligendi. Rem illum pariatur doloribus nam veritatis totam deleniti. Molestias,
                modi nulla. Necessitatibus officia voluptatum voluptatibus unde autem voluptates doloremque sit inventore
                maiores explicabo, odit incidunt aspernatur nihil blanditiis saepe consectetur delectus corrupti reiciendis
                odio, neque aperiam eum quaerat earum! Voluptatibus velit maxime magni dignissimos, tenetur sapiente
                expedita repellendus, nam omnis assumenda voluptate commodi incidunt id, maiores dolor natus eius eum ut quo
                totam facere minima. Consectetur, placeat.
            </div>
        </div>
    </div>
</template>

<script setup>
// const resources = reactive([]);
// // set resources
// resources.length = 0;
// resources.push(...items)

const accordion = reactive([false, false]);
const tab = ref(null);

function handleToggle(x) {
    //console.log(tab.value);
    return accordion[x] ? `max-height: ${tab.value.scrollHeight}px` : '';
}

useHead({
    bodyAttrs: {
        class: 'bg-fuchsia-500',
    }
})
</script>