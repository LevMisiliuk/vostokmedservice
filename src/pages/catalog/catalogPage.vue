<template>
  <MqResponsive :target="['xs', 'sm']">
    <CatalogPageMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <CatalogSreen />
  </MqResponsive>
</template>

<script>
import CatalogSreen from '@/components/catalog/CatalogScreen.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    CatalogSreen,
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