<template>
  <ProductTableHeader
    title="Пластина денс"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
  <el-table
    border
    style="width: 100%; margin-bottom: 20px"
    :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
    :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
    :data="tableData"
  >
    <el-table-column label="Кат. № нерж. сталь" prop="first" />
    <el-table-column label="Кат. № сплав титану" prop="second" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'RadiusPlateThreadResistant',

  setup() {
    const tableData = computed(() => [
      {
        first: '13470-00000',
        second: '33470-00000',
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/dance-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1, мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '7 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '3,5 мм'
          },
          {
            id: 8,
            name: 'Матеріал',
            data: 'Нерж. сталь або сплав титану'
          }
        ]
      }
    ])

    return {
      tableData,
      cardData
    }
  }
}
</script>

<style lang="scss" scoped></style>
