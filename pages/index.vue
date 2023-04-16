<template>
    <!-- <div class="bg-gray-400 h-screen">
        <div class="container mx-auto xl:max-w-screen-xl">
            <div class="grid grid-cols-1 gap-y-4 md:grid-cols-12 md:gap-8 grid-rows-[60px_minmax(500px,_1fr)]">
                <div class="bg-white p-4 hidden md:block col-span-2 row-span-2">sidbar</div>
                <div class="bg-white p-4 col-span-10">sort header</div>
                <div class="bg-white p-4 col-span-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                    quae alias ipsum nulla sunt voluptate sit ipsa aut, odio harum tempora possimus perferendis quasi libero
                    animi. At animi similique ducimus quia quis nisi corporis cumque quibusdam nulla reiciendis aperiam
                    nesciunt quaerat obcaecati, qui quod fugiat asperiores, totam sed accusantium possimus eaque natus nihil
                    odio veritatis? Labore culpa recusandae earum perspiciatis quod explicabo in vel quasi magnam. Natus,
                    corrupti excepturi deleniti omnis autem amet voluptatibus dicta, necessitatibus, aut exercitationem sit
                    adipisci ullam similique facere veniam placeat? Similique ea atque iure odit accusantium voluptatem a
                    nobis nihil maxime. Illum dignissimos porro vel?</div>
            </div>
        </div>
    </div> -->
    <DropDown :list_items="list_items" title="show more" color="bg-red-500"></DropDown>
</template>
<script setup>
const list_items = ['Account', 'Support', 'Settings'];
</script>