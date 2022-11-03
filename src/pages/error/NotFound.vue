<template>
  <MqResponsive target="phone">

  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop+">
    <PageNotFound />
  </MqResponsive>
</template>

<script>
import PageNotFound from '@/components/PageNotFound.vue';

export default {
  components: {
    PageNotFound
  }
}
</script>