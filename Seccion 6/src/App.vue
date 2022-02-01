<template>
  <div id="app" class="container">

    <div class="jumbotron">

      <!-- <titulo  v-bind:titulo="titulo"></titulo> -->
      <titulo :titulo="titulo"></titulo>

      <nueva-tarea :tareas="tareas"
                   :actualizarContador="actualizarContador"></nueva-tarea>

      <lista-tareas :tareas="tareas"
                    @disminuirContador="numTareas -= $event"></lista-tareas>



    </div>

  </div>
</template>

<script>
import Titulo from './assets/TituloComponent.vue';
import NuevaTarea from './assets/NuevaTareaCoponent.vue';
import ListaTareas from './assets/ListaTareasComponent.vue'

import { bus } from './main';

export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data() {
    return {
      titulo: 'Lista de Tareas',
      tareas: []
    }
  },
  methods: {
    actualizarContador() {
      this.numTareas++;
    }
  },
  created() {

    this.$http.get('tareas.json')
      .then( respuesta => {
        return respuesta.json();
      })
      .then( respuestaJson => {
        for(let id in respuestaJson) {
          let tarea = {
            id, 
            texto: respuestaJson[id].texto,
            terminada: respuestaJson[id].terminada
          }
          this.tareas.push(tarea);
        }
        bus.actualizarContador(this.tareas.length);
      } )
  }
}
  
</script>

<style>
.jumbotron { 
  margin: 5rem;
  padding: 30px; /* fills out the jumbotron */
  background-color: #e1e1e1;
  border-radius: 5px;
}

.lista{
  margin-top: 1rem;
}

</style>
