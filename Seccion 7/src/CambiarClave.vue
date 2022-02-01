<template>
  <div id="app" class="container">

    <div class="jumbotron">

      <mostrar-formulario>
        <div slot="titulo">
          <h3>Cambiar Contraseña</h3>
        </div>

        <div slot="elementos">
          <div class="form-group">
              <label for="correo">Correo Electrónico</label>
              <input type="emial" class="form-control" id="correo" placeholder="Escribe tu correo electrónico">
          </div>
        </div>

        <div slot="boton">
          <button class="btn btn-primary mt-3">Cambiar Contraseña</button>
        </div>

      </mostrar-formulario>

    </div>
    
  </div>
</template>

<script>
import MostrarFormulario from './mostrarFormulario.vue';

export default {
  components: {
    mostrarFormulario: MostrarFormulario
  },
  data () {
    return {

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