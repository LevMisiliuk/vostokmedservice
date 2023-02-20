<template>
  <ProductTableHeader
    title="Стрижнетримач стандартний"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeTensioner',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/standard-rod-holder.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
