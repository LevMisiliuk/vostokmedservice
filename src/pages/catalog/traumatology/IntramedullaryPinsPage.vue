<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop+">
    <IntramedullaryPins />
  </MqResponsive>
</template>

<script>
import IntramedullaryPins from '@/components/catalog/traumatology/IntramedullaryPins.vue';

export default {
  components: {
    IntramedullaryPins
  }
}
</script>