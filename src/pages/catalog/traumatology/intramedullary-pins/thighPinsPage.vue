<template>
  <MqResponsive :target="['xs', 'sm', 'md', 'lg', 'xl', 'xxl']">
    <ThighPins />
  </MqResponsive>
</template>

<script>
import ThighPins from '@/components/catalog/traumatology/intramedullary-pins/ThighPins.vue'
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    ThighPins,
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