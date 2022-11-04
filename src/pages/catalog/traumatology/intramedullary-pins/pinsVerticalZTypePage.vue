<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop">
    <PinsVerticalZType />
  </MqResponsive>
</template>

<script>
import PinsVerticalZType from '@/components/catalog/traumatology/PinsVerticalZType.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    PinsVerticalZType,
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