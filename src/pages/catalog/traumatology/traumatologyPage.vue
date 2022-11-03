<template>
    <MqResponsive target="phone">
      
    </MqResponsive>
    <MqResponsive target="tablet">
    </MqResponsive>
    <MqResponsive target="laptop+">
      <CatalogTraumatology />
    </MqResponsive>
</template>

<script>
import CatalogTraumatology from '@/components/CatalogTraumatology.vue';

export default {
  components: {
    CatalogTraumatology
  }
}
</script>