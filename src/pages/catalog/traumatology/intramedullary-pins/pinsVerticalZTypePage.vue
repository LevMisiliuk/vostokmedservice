<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop+">
    <PinsVerticalZType />
  </MqResponsive>
</template>

<script>
import PinsVerticalZType from '@/components/traumatology/PinsVerticalZType.vue';

export default {
  components: {
    PinsVerticalZType
  }
}
</script>