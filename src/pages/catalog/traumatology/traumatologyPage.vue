<template>
    <MqResponsive :target="['xs', 'sm']">
      <CatalogTraumatologyMobile />
    </MqResponsive>
    <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
      <CatalogTraumatology />
    </MqResponsive>
</template>

<script>
import CatalogTraumatology from '@/components/catalog/CatalogTraumatology.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    CatalogTraumatology,
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