<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive :target="['laptop', 'desktop']">
    <CalfPin />
  </MqResponsive>
</template>

<script>
import CalfPin from '@/components/catalog/traumatology/CalfPin.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    CalfPin,
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