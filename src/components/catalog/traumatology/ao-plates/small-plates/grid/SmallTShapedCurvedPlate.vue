<template>
  <ProductTableHeader
    title="Т-подібна пластина, невелика, вигнута"
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
    <el-table-column label="L, мм" prop="second" />
    <el-table-column label="Кат. № нерж. сталь" prop="third" />
    <el-table-column label="Кат. № сплав титану" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SmallTShapedCurvedPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '3+3',
        second: '53',
        third: '13450-05333',
        fourth: '33450-05333'
      },
      {
        first: '3+4',
        second: '60',
        third: '13450-06034',
        fourth: '33450-06034'
      },
      {
        first: '3+5',
        second: '71',
        third: '13450-07135',
        fourth: '33450-07135'
      },
      {
        first: '3+3',
        second: '53',
        third: '13451-05333',
        fourth: '33451-05333'
      },
      {
        first: '3+5',
        second: '71',
        third: '13451-07135',
        fourth: '33451-07135'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/small-t-shaped-plate-curved.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,2-2,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '10 мм'
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
