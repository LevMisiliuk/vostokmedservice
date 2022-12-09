<template>
  <MqResponsive :target="['xs', 'sm']">
    <CertificatesScreenMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
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
        preset: "bootstrap5"
      })
    })
  }
}
</script>