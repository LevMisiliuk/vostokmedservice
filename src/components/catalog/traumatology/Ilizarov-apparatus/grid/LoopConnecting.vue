<template>
  <ProductTableHeader
    title="Петля-сполучна"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'LoopConnecting',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/loop-connecting.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
