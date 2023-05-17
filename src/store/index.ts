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

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const trainAdvisorStore = defineStore('train', () => {
    //state
    const valoraciones: Ref<Valoracion[]> = ref([]);
    //getters

    //actions
    function getValoraciones() {
      axios.get('http://localhost:8080/valoraciones')
      .then((response)=>{
        valoraciones.value = response.data;
      })
      .catch(()=>alert("Error: valoraciones not found"));
    }
  
    return { getValoraciones, valoraciones }
  });