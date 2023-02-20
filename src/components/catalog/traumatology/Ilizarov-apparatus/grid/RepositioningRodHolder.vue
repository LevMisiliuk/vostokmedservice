<template>
  <ProductTableHeader
    title="Стрижнетримач репонуючий"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'RepositioningRodHolder',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/repositioning-rod-holder.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
