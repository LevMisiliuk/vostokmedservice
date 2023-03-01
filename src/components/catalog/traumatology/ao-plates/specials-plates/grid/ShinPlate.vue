
<template>
  <ProductTableHeader
    title="Пластина для гомілки"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
  <el-table
    border
    style="width: 100%; margin-bottom: 20px"
    :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
    :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
    :data="tableData"
    :scrollbar-always-on="true"
  >
    <el-table-column label="Кількість отворів" prop="first" min-width="140px" />
    <el-table-column label="Кат. № нерж. сталь" prop="second" min-width="140px" />
    <el-table-column label="Кат. № сплав титану" prop="third" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ShinPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '2',
        second: '13890-00001',
        third: '33890-00001'
      },
      {
        first: '1',
        second: '13890-00002',
        third: '33890-00002'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/shine-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '3,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '16 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '4,5 мм'
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
