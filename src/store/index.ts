import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import axios from 'axios'

export type Valoracion = {
    id: string,
    origen: string,
    destino: string,
    compania: string,
    servicio: string,
    fecha: Date,
    horaSalida: string,
    horaLlegada: string,
    puntuacion: number,
    comentario: string,
    usuario?: string,
}

export type loginInfo = {
    email: string, 
    password: string,
}

export const trainAdvisorStore = defineStore('train', () => {
    //state
    const valoraciones: Ref<Valoracion[]> = ref([]);
    const isLogged: Ref<Boolean> = ref(false);
    //getters

    //actions
    function getValoraciones() {
      axios.get('http://localhost:8080/valoraciones')
      .then((response)=>{
        valoraciones.value = response.data;
      })
      .catch(()=>alert("Error: valoraciones not found"));
    }
    async function login(logInfo: loginInfo) {
        axios.post('http://localhost:8080/login', logInfo)
        .then((response)=>{
            console.log('response', response)
            isLogged.value = response.data;
        })
    }
  
    return { getValoraciones, valoraciones, login, isLogged }
  });