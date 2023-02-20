<template>
  <ProductTableHeader
    title="Затискач для спиць накидний"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ClipKnittingNeedles',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/clip-for-knitting-needles.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
