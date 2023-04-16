<template>
    <div class="bg-gray-200 flex justify-center items-center h-screen">
        <div class="relative">
            <button
                class="bg-blue-500 px-4 py-2 rounded-lg text-white inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white">
                <span>show more</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 ml-1">
                    <path fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <div class="bg-white rounded-lg mt-1 w-56 overflow-hidden border border-gray-300 absolute left-0">
                <a href="" class="block px-4 py-2 text-gray-700 hover:bg-red-100 ">Account</a>
                <a href="" class="block px-4 py-2 text-gray-700 hover:bg-red-100">Support</a>
                <a href="" class="block px-4 py-2 text-gray-700 hover:bg-red-100">Settings</a>

            </div>
        </div>
    </div>
</template>