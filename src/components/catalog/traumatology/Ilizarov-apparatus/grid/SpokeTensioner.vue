<template>
  <ProductTableHeader
    title="Натягувач спиць"
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
        imageAddition: require('@/assets/traumatology/spoke-tensioner.jpeg'),
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
