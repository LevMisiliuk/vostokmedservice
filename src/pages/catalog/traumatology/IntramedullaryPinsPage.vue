<template>
  <MqResponsive :target="['xs', 'sm']">
    <IntramedullaryPinsMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <IntramedullaryPins />
  </MqResponsive>
</template>

<script>
import IntramedullaryPins from '@/components/catalog/traumatology/intramedullary-pins/IntramedullaryPins.vue';
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
        preset: "bootstrap5"
      })
    })
  }
}
</script>