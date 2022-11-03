<template>
    <MqResponsive target="phone">
      
    </MqResponsive>
    <MqResponsive target="tablet">
    </MqResponsive>
    <MqResponsive target="laptop+">
      <CataologSreen />
    </MqResponsive>
</template>

<script>
import CataologSreen from '@/components/CatalogScreen.vue';

export default {
  components: {
    CataologSreen
  }
}
</script>