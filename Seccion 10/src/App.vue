<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">

        <span>
          {{ mensaje | suspensivos | mayusculas}}
        </span>
        <hr>
        <span>
          {{ temperatura | aFahrenheit }}
        </span>

      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: 'Hola Mundooooooooo',
      temperatura: 30
    }
  },
  filters: {
    mayusculas( mensaje ) {
      return mensaje.toUpperCase();
    },
    aFahrenheit( temp ){
      return ( 9/5 * temp ) + 32 + ' F'; 
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

</style>

