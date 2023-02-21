<template>
  <ProductTableHeader
    title="Гвинти самонарізні"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'MiniPlates',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plates.jpeg')
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
