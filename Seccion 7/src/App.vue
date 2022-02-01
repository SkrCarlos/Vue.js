<template>
  <div id="app" class="container">

    <div class="jumbotron">

      <button class="btn btn-primary"
              @click="componenteSeleccionado = 'iniciarSesion'">Iniciar Sesión</button>

      <button class="btn btn-primary"
              @click="componenteSeleccionado = 'cambiarClave'">Cambiar Contraseña</button>
      <keep-alive>
        <component :is="componenteSeleccionado"></component>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
import MostrarFormulario from './mostrarFormulario.vue';
import IniciarSesion from './IniciarSesion.vue';
import CambiarClave from './CambiarClave.vue';

export default {
  components: {
    mostrarFormulario: MostrarFormulario,
    iniciarSesion: IniciarSesion,
    cambiarClave: CambiarClave
  },
  data () {
    return {
      componenteSeleccionado: 'iniciarSesion'
    }
  }
}
</script>

<style scoped>
.jumbotron { 
  margin: 5rem;
  padding: 30px; /* fills out the jumbotron */
  background-color: #e1e1e1;
  border-radius: 5px;
}

</style>
