<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop+">
    <ThighPins />
  </MqResponsive>
</template>

<script>
import ThighPins from '@/components/catalog/traumatology/ThighPins.vue';

export default {
  components: {
    ThighPins
  }
}
</script>