<template>
  <ProductTableHeader
    title="Затискач для спиць з прорізом"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ClipForNeedlesWithSlot',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/clip-for-knitting-needles-with-slot.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
