<template>
  <ProductTableHeader
    title="Компресуючий пристрій"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CompressionDevice',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/compression-device.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
