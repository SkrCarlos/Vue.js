<script setup>

  import { computed } from 'vue'

  const props = defineProps({
    alerta: {
      type: Object,
      required: true
    }
  })

  const isError = computed(() => {
    return props.alerta.tipo === 'error'
      ? 'bg-red-500'
      : 'bg-green-500'
  })

</script>

<template>
  
  <div 
    :class="isError"  
    class="text-white text-center p-3 uppercase font-bold mt-3 rounded-md">
    {{ props.alerta.mensaje }}
  </div>

</template>

