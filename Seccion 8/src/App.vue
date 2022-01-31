<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">

        <span v-decorar:grande.negrilla="{familia: 'helvetica', color: 'red'}">Aprende Vue.js</span>
        <hr>
        <span v-decorar:grande.negrilla="{familia: 'helvetica', color: 'red'}">Aprende .js</span>

      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  directives: {
    'decorar-local': {
      bind(el, binding, vnode){
    el.style.fontFamily = binding.value.familia;
    el.style.color = binding.value.color;

    if(binding.modifiers['negrilla']){
      el.style.fontWeight = 'bold';
    }

    if (binding.arg == 'grande') {
      el.style.fontSize = '50px';
    }
    if (binding.arg == 'pequenio') {
      el.style.fontSize = '15px';
    }
  }
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

