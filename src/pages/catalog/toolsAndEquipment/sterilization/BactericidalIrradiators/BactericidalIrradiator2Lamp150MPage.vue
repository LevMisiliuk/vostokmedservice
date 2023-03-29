<template>
  <MqResponsive :target="['xs', 'sm']">
    <BactericidalIrradiator2Lamp150MMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <BactericidalIrradiator2Lamp150M />
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