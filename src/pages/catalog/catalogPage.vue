<template>
    <MqResponsive target="phone">
      
    </MqResponsive>
    <MqResponsive target="tablet">
    </MqResponsive>
    <MqResponsive :target="['laptop', 'desktop']">
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
        preset: "devices"
      })
    })

  }
}
</script>