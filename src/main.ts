import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import InicioVue from './components/Inicio.vue'
import InicioSesionVue from './components/usuario/InicioSesion.vue'
import {createRouter, createWebHistory} from 'vue-router'



const routes = [
    { path: '/', component: InicioVue },
    { path: '/login', component: InicioSesionVue },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

const app = createApp(App);

app.use(router)

router.isReady().then(() => {
  app.mount('#app');
});
