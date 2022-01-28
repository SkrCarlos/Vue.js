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

export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data() {
    return {
      titulo: 'Lista de Tareas',
      tareas: [
        {
            texto: 'Aprender Vue.js',
            terminada: false
        },
        {
            texto: 'Aprender Angualar',
            terminada: false
        },
        {
            texto: 'Aprender Ionic',
            terminada: false
        }
      ]
    }
  },
  methods: {
    actualizarContador() {
      this.numTareas++;
    }
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
