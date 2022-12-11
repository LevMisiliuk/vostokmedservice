<template>
  <MqResponsive :target="['xs', 'sm']">
    <PinsVerticalZTypeMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <PinsVerticalZType />
  </MqResponsive>
</template>

<script>
import PinsVerticalZType from '@/components/catalog/traumatology/intramedullary-pins/PinsVerticalZType.vue'
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
        preset: "bootstrap5"
      })
    })
  }
}
</script>