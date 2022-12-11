<template>
  <MqResponsive :target="['xs', 'sm']">
    <CalfPinMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <CalfPin />
  </MqResponsive>
</template>

<script>
import CalfPin from '@/components/catalog/traumatology/intramedullary-pins/CalfPin.vue';
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
        preset: "bootstrap5"
      })
    })
  }
}
</script>