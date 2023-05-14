<script setup lang="ts"></script>

<template>
     <h2 class="font-bold mt-10 ml-10 text-4xl">Buscar Valoración</h2>

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
                         <option>Castelló de la Plana</option>
                         <Option>Gandia</Option>
                         <Option>Sevilla-Santa Justa</Option>
                         <Option>Gijón-Xixón</Option>
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
                         <option>Castelló de la Plana</option>
                         <Option>Gandia</Option>
                         <Option>Sevilla-Santa Justa</Option>
                         <Option>Gijón-Xixón</Option>
                    </select>
               </div>
               <div class="m-2">
                    <label for="compania" class="block mb-2 text-sm font-medium text-black">Compañia:</label>
                    <select id="compania"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                         <option>Renfe</option>
                         <option>Ouigo</option>
                         <option>Iryo</option>
                         <option>Feve</option>
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
                         <label for="fecha" class="block mb-2 text-sm font-medium text-gray-900">Fecha:</label>
                         <input type="text" id="hora_llegada"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="dd/mm/aaaa">
                    </div>
               </div>
               <div class="grid grid-cols-2">
                    <div class="m-2">
                         <label for="hora_salida" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora
                              de salida:</label>
                         <input type="text" id="hora_salida"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="hh:mm">
                    </div>
               </div>
          </div>
          <div class="flex justify-center">
               <div class="flex justify-center">
                    <RouterLink to="/valoracion/ver"><button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                              class="p-3 m-2 text-black bg-lime-500 hover:bg-fuchsia-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                              type="button">
                              Buscar valoración
                         </button></RouterLink>
               </div>
          </div>
          <div class="flex justify-center">
                    <RouterLink to="/usuario/inicio"><button type="submit"
                              class="mt-8 text-white bg-fuchsia-800 hover:bg-lime-500 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Volver</button>
                    </RouterLink>
          </div>
</div></template>