<template>
  <ProductTableHeader
    title="Направник"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'DirectorTool',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/director-tool.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
