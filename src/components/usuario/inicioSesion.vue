<script setup lang="ts"></script>

<template>
    <div class="flex justify-center items-center py-16">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form class="space-y-6" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Accede en nuestra web</h5>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Tu email</label>
                    <input type="email" name="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="ejemplo@ejemplo.com" required>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Tu
                        password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required>
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                required>
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Recuérdame</label>
                    </div>
                    <a href="#" class="ml-auto text-sm text-blue-700 hover:underline">¿Has olvidado tu
                        password?</a>
                </div>
                <router-link to="/usuario/inicio"><button type="submit"
                        class="mt-4 w-full text-white bg-fuchsia-800 hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entra
                        a tu cuenta</button></router-link>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    ¿No estás registrado? <router-link to="/registro"><a href="#"
                            class="text-blue-700 hover:underline">Crear cuenta</a></router-link>
                </div>
            </form>
        </div>
    </div>
</template>