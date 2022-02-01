<template>
    <div>
      <h2>{{ tituloMayusculas() }}</h2>
      <h3>Tareas por hacer: {{ numTareas }}</h3>
    </div>
</template>

<script>
import { bus } from '../main.js';

export default {
  props: ['titulo'],
  data(){
    return {
      numTareas: 0
    }
  },
  methods: {
    tituloMayusculas(){
      return this.titulo.toUpperCase();
    }
  },
  created(){
    bus.$on('actualizarContador', (numTareas) => {
      this.numTareas = numTareas;
    })
  }
}
</script>