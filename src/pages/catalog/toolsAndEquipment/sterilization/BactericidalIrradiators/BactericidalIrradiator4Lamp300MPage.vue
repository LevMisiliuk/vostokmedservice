<template>
  <MqResponsive :target="['xs', 'sm']">
    <BactericidalIrradiator4Lamp300MMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <BactericidalIrradiator4Lamp300M />
  </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
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