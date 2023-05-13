<script setup lang="ts"></script>

<template>
<div class="flex justify-center items-center py-16 text-center">
    <div class="max-w-sm bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="./../assets/travel-holiday-vacation-301_89079.svg" alt="imagen trenes portada" />
    </a>
    <div class="p-5 m-4">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIENVENIDO A</h5>
            <h2 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">TRAIN ADVISOR</h2>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">La web para valorar tus viajes en tren</p>
        <router-link to="/valoracion/ver"><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-800 rounded-lg hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver valoraciones
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a></router-link>
    </div>
</div>
</div>    


</template>