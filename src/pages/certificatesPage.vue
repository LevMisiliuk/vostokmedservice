<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop">
    <CertificatesScreen />
  </MqResponsive>
</template>

<script>
import CertificatesScreen from '@/components/mainScreens/CertificatesScreen.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    CertificatesScreen,
    MqResponsive
  },
  setup() {
    onMounted(() => {
      updateBreakpoints({
        preset: "devices"
      })
    })
  }
}
</script>