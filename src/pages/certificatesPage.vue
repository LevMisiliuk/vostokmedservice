<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop+">
    <CertificatesScreen />
  </MqResponsive>
</template>

<script>
import CertificatesScreen from '@/components/CertificatesScreen.vue';

export default {
  components: {
    CertificatesScreen
  }
}
</script>