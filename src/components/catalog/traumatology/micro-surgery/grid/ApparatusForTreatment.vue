<template>
  <ProductTableHeader
    title="Стрижневий апарат для лікування переломів фаланг пальців"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>

import { computed } from 'vue'

export default {
  name: 'ApparatusForTreatment',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/apparatus-for-treatment.jpeg')
      }
    ])

    return {
      cardData
    }
  }
}
</script>
