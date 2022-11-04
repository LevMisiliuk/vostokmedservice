<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive :target="['laptop', 'desktop']">
    <IntramedullaryPins />
  </MqResponsive>
</template>

<script>
import IntramedullaryPins from '@/components/catalog/traumatology/IntramedullaryPins.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    IntramedullaryPins,
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