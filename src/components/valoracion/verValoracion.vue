<script setup lang="ts">
import Valoracion from './Valoracion.vue';
</script>

<template>
    <div class="grid grid-cols-3">
        <div class="font-bold mt-10 ml-10 mb-5 text-4xl">VALORACIONES</div>
        <div class="col-end-7 col-span-2 mt-10 mb-5 mr-5">
            <RouterLink to="/usuario/inicio"><button type="submit"
                    class="text-white bg-fuchsia-800 hover:bg-lime-500 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Volver</button>
            </RouterLink>
        </div>
    </div>


    <div class="border-4 border-fuchsia-800 ml-4 mr-2 mb-2 ">
        <Valoracion></Valoracion>
    </div>
</template>