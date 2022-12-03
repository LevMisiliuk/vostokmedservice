<template>
  <MqResponsive :target="['xs', 'sm', 'md', 'lg', 'xl', 'xxl']">
    <PageNotFound />
  </MqResponsive>
</template>

<script>
import PageNotFound from '@/components/PageNotFound.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    PageNotFound,
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