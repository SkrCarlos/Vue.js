<template>

  <div id="app" class="container">
    <div class="col-md-6">
      <h1>Formulario</h1>

      <form>

        <div class="form-group">
          <label for="correo" class="col-md-2">Nombre</label>
          <input type="text" class="form-control" placeholder="Nombre" v-model.trim="usuario.nombre">
        </div>
        <div class="form-group">
          <label for="correo" class="col-md-2">Correo Electrónico</label>
          <input type="email" class="form-control" placeholder="Correo Electrónico" v-model.trim.lazy="usuario.correo">
        </div>

        <div class="form-group">
          <label for="clave">Contraseña</label>
          <input type="password" class="form-control" placeholder="Contraseña" v-model.trim="usuario.clave">
        </div>

        <div class="form-group">
          <label for="correo">Edad</label>
          <input type="number" class="form-control" placeholder="Edad" min="0" v-model.trim.number="usuario.edad">
        </div>

        <div class="form-group">
          <label for="correo">País</label>
          <select class="form-control" v-model.lazy="usuario.pais">
            <!-- <option v-for="pais in paises ">{{ pais }}</option> -->
          </select>
        </div>

        <div class="form-group">
          <label for="correo">Mensaje</label>
          <textarea class="form-control" rows="3" v-model.trim.lazy="usuario.mensaje"></textarea>
        </div>

        <fieldset class="form-group" >
          <legend>Genero</legend>
          <div class="formcheck">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="optionsRadios" value="hombre"
                      checked v-model="usuario.genero"> 
              Hombre
            </label>
          </div>

          <div class="formcheck">
            <label class="form-check-label">
              <input type="radio" class="form-check-input"  value="mujer"
                      v-model="usuario.genero"> 
              Mujer
            </label>
          </div>
        </fieldset>

        <fieldset class="form-group">
          <div class="formcheck">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" 
                      v-model="usuario.condiciones"> 
              Acepto las condiciones
            </label>
          </div>

        </fieldset>

        <button type="submit" class="btn btn-primary"
                @click.prevent="enviarFormulario">Enviar</button>

      </form>
    </div>

    <div class="resultado col-md-6" v-if="mostrar">
      <br>
      <h1>Resultados</h1>
      <p><strong>Nombre: </strong>{{ usuario.nombre }}</p>
      <p><strong>Correo Electrónico: </strong>{{ usuario.correo }}</p>
      <p><strong>Contraseña: </strong>{{ usuario.clave }}</p>
      <p><strong>Edad: </strong>{{ usuario.edad }}</p>
      <p><strong>País: </strong>{{ usuario.pais }}</p>
      <p class="mensaje"><strong>Mensaje: </strong>{{ usuario.mensaje }}</p>
      <p><strong>Genero: </strong>{{ usuario.genero }}</p>
      <p><strong>Condiciones: </strong>{{ usuario.condiciones }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usuario: {
        nombre: '',
        correo: '',
        clave: '',
        edad: '',
        pais: '',
        mensaje: '',
        genero: '',
        condiciones: ''
      },
      mostrar: false,
      paises: ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'España', 'México', 'Paraguay', 'Uruguay', 'Venezuela']
    }
  },
  methods: {
    enviarFormulario() {
        this.mostrar = true
    }
  }
}
</script>

<style>
.mensaje{
  white-space: pre;
}
</style>
