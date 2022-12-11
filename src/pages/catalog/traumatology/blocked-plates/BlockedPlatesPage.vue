<template>
  <MqResponsive :target="['xs', 'sm']">
    <BlockedPlatesMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <BlockedPlates />
  </MqResponsive>
</template>

<script>
import BlockedPlates from '@/components/catalog/traumatology/blocked-plates/BlockedPlates.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    BlockedPlates,
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