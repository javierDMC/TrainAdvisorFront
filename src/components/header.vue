<script setup lang="ts"></script>

<template>
    <header>
    <nav class="bg-lime-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <router-link to="/"><a class="flex items-center"><img src="./../assets/travel-holiday-vacation-301_89079.svg" class="mr-3 h-6 sm:h-9" alt="TrainAdvisor Logo" />
                <span class=" text-xl font-semibold whitespace-nowrap dark:text-white">Train Advisor</span>
            </a></router-link>
            <div class="flex items-center lg:order-2">
                <router-link to="/login"><a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Registro</a>
</router-link>
                <router-link to="/registro"><a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Inciar sesión</a>
</router-link>    
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="https://renfe.com" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="./../assets/Logotipo_de_Renfe_Operadora.svg" class="mr-3 h-6 sm:h-9" alt="RenfeOperadora Logo" /></a>
                    </li>
                    <li>
                        <a href="https://ouigo.com" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="./../assets/TGV_Ouigo_2013_logo.svg" class="mr-3 h-6 sm:h-9" alt="Ouigo Logo" /></a>
                    </li>
                    <li>
                        <a href="https://iryo.eu" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="./../assets/Iryo_2021_logo.svg" class="mr-3 h-6 sm:h-9" alt="Iryo Logo" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>