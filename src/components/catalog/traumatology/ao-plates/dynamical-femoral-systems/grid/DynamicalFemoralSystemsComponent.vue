<template>
  <ProductTableHeader
    title="Динамічні стегнові та виросткові системи"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'DynamicalFemoralSystemsComponent',

  setup() {
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/dynamic-femoral-and-condylar-systems.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Пластина',
            data: 'для стегнового гвинта'
          },
          {
            id: 2,
            name: 'Пластина',
            data: 'для виростків.'
          },
          {
            id: 3,
            name: 'Гвинт',
            data: 'динамічний'
          },
          {
            id: 8,
            name: 'Гвинт',
            data: 'компресуючий'
          },
          {
            id: 9,
            name: 'Матеріал',
            data: 'Нерж. сталь або сплав титану'
          }
        ]
      }
    ])

    return {
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
