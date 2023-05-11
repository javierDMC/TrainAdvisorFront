import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import InicioVue from './components/Inicio.vue'
import InicioSesionVue from './components/usuario/InicioSesion.vue'
import {createRouter, createWebHistory} from 'vue-router'
import RegistroUsuarioVue from './components/usuario/RegistroUsuario.vue'
import EditarUsuarioVue from './components/usuario/EditarUsuario.vue'
import BienvenidaUsuarioVue from './components/usuario/BienvenidaUsuario.vue'
import BuscarValoracionVue from './components/valoracion/BuscarValoracion.vue'
import PropiaValoracionVue from './components/valoracion/PropiaValoracion.vue'
import VerValoracionVue from './components/valoracion/VerValoracion.vue'
import HacerValoracionVue from './components/valoracion/HacerValoracion.vue'



const routes = [
    { path: '/', component: InicioVue },
    { path: '/login', component: InicioSesionVue },
    { path: '/registro', component: RegistroUsuarioVue },
    { path: '/usuario/editar', component: EditarUsuarioVue },
    { path: '/usuario/inicio', component: BienvenidaUsuarioVue },
    { path: '/valoracion/buscar', component: BuscarValoracionVue },
    { path: '/valoracion/usuario', component: PropiaValoracionVue },
    { path: '/valoracion/ver', component: VerValoracionVue },
    { path: '/valoracion/hacer', component: HacerValoracionVue }
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
