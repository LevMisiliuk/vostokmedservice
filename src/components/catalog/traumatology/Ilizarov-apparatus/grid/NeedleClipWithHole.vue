<template>
  <ProductTableHeader
    title="Затискач для спиць з отвором"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'NeedleClipWithHole',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/needle-clip-with-hole.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
