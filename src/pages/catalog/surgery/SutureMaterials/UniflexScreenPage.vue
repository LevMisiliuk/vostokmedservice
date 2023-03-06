<template>
  <MqResponsive :target="['xs', 'sm']">
    <UniflexScreenMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <Uniflex />
  </MqResponsive>
</template>

<script>
import Uniflex from '@/components/catalog/surgery/suture-materials/UniflexScreen.vue'
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    MqResponsive,
    Uniflex
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