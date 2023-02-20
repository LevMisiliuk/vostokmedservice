<template>
  <ProductTableHeader
    title="Змімний стрижнетримач"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'RemovableRodHolder',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/removable-rod-holder.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
