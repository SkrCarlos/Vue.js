import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar', {
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
})

new Vue({
  el: '#app',
  render: h => h(App)
})
