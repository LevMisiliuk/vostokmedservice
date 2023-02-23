<template>
  <ProductTableHeader
    title="Пластина Y-подібна"
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
    <el-table-column label="Кількість отворів" prop="first" />
    <el-table-column label="Кат. № нерж. сталь" prop="second" />
    <el-table-column label="Кат. № сплав титану" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PlateYShaped',

  setup() {
    const tableData = computed(() => [
      {
        first: '4+4+4',
        second: '13430-00444',
        third: '33430-00444'
      },
      {
        first: '4+2+2',
        second: '13430-00422',
        third: '33430-00422'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/y-shaped-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '2,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '4,0 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '3,5-4,0 мм'
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
