<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop+">
    <CalfPin />
  </MqResponsive>
</template>

<script>
import CalfPin from '@/components/traumatology/CalfPin.vue';

export default {
  components: {
    CalfPin
  }
}
</script>