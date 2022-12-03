<template>
  <MqResponsive :target="['xs', 'sm', 'md', 'lg', 'xl', 'xxl']">
    <CataologSreen />
  </MqResponsive>
</template>

<script>
import CataologSreen from '@/components/catalog/CatalogScreen.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    CataologSreen,
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