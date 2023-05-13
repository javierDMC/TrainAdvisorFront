<script setup lang="ts"></script>

<template>
     <h2 class="font-bold mt-10 ml-10 text-4xl">Hacer Valoracion</h2>

     <div class="ml-2 mt-5">

          <div class="grid grid-cols-2">
               <div class="m-2">
                    <label for="origen" class="block mb-2 text-sm font-medium text-black">Estación de origen:</label>
                    <select id="origen"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                         <option>Valencia-Estacio del Nord</option>
                         <option>Valencia-Joaquin Sorolla</option>
                         <option>Madrid-Chamartin</option>
                         <option>Barcelona-Sants</option>
                    </select>
               </div>
               <div class="m-2">
                    <label for="destino" class="block mb-2 text-sm font-medium text-black">Estación de destino:</label>
                    <select id="destino"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                         <option>Valencia-Estacio del Nord</option>
                         <option>Valencia-Joaquin Sorolla</option>
                         <option>Madrid-Chamartin</option>
                         <option>Barcelona-Sants</option>
                    </select>
               </div>
               <div class="m-2">
                    <label for="compania" class="block mb-2 text-sm font-medium text-black">Compañia:</label>
                    <select id="compania"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                         <option>Renfe</option>
                         <option>Ouigo</option>
                         <option>Iryo</option>
                    </select>
               </div>
               <div class="m-2">
                    <label for="servicio" class="block mb-2 text-sm font-medium text-black">Servicio:</label>
                    <select id="servicio"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                         <option>AVE</option>
                         <option>AVLO</option>
                         <option>Cercanias</option>
                         <option>Intercity</option>
                         <option>Alvia</option>
                         <option>Euromed</option>
                         <option>Media Distancia</option>
                         <option>Regional</option>
                    </select>
               </div>
               <div>
                    <div class="m-2">
                         <label for="hora_salida" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora
                              de salida:</label>
                         <input type="text" id="hora_salida"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="hh:mm">
                    </div>
               </div>
               <div>
                    <div class="m-2">
                         <label for="hora_llegada" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora
                              de llegada:</label>
                         <input type="text" id="hora_llegada"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="hh:mm">
                    </div>
               </div>
          </div>
          <div class="m-2">
               <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resume tu
                    experiencia:</label>
               <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Cómo fue..."></textarea>
     </div>
</div></template>