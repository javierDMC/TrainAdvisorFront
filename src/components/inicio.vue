<script setup lang="ts"></script>

<template>
    <div class="">
        <img src="./../assets/incio.jpg">
        <div class="flex justify-center items-end text-center z-20">
            <div class="bg-white border border-black border-4 rounded-lg shadow absolute">
                <img class="rounded-t-lg" src="./../assets/travel-holiday-vacation-301_89079.svg" alt="imagen trenes portada" />
                <div class="p-5 m-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIENVENIDO A</h5>
                    <h2 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">TRAIN ADVISOR</h2>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">La web para valorar tus viajes en tren</p>
                    <router-link to="/valoracion/ver"><a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-800 rounded-lg hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Ver valoraciones
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a></router-link>
                </div>
            </div>
        </div>
    </div>
</template>