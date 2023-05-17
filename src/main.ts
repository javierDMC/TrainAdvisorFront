import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import InicioVue from './components/Inicio.vue'
import InicioSesionVue from './components/usuario/InicioSesion.vue'
import {createRouter, createWebHistory} from 'vue-router'
import RegistroUsuarioVue from './components/usuario/RegistroUsuario.vue'
import EditarUsuarioVue from './components/usuario/EditarUsuario.vue'
import BienvenidaUsuarioVue from './components/usuario/BienvenidaUsuario.vue'
import PropiaValoracionVue from './components/valoracion/PropiaValoracion.vue'
import VerValoracionVue from './components/valoracion/VerValoracion.vue'
import HacerValoracionVue from './components/valoracion/HacerValoracion.vue'
import BuscarValoracionPropiasVue from './components/valoracion/BuscarValoracionPropias.vue'
import BuscarValoracionTodasVue from './components/valoracion/BuscarValoracionTodas.vue'
import EditarValoracionVue from './components/valoracion/EditarValoracion.vue'
import {createPinia} from 'pinia'



const routes = [
    { path: '/', component: InicioVue },
    { path: '/login', component: InicioSesionVue },
    { path: '/registro', component: RegistroUsuarioVue },
    { path: '/usuario/editar', component: EditarUsuarioVue },
    { path: '/usuario/inicio', component: BienvenidaUsuarioVue },
    { path: '/valoracion/buscar/todas', component: BuscarValoracionTodasVue },
    { path: '/valoracion/buscar/propias', component: BuscarValoracionPropiasVue },
    { path: '/valoracion/usuario', component: PropiaValoracionVue },
    { path: '/valoracion/editar', component: EditarValoracionVue },
    { path: '/valoracion/ver', component: VerValoracionVue },
    { path: '/valoracion/hacer', component: HacerValoracionVue }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

const app = createApp(App);

const pinia = createPinia()

app.use(router)
app.use(pinia)

router.isReady().then(() => {
  app.mount('#app');
});
