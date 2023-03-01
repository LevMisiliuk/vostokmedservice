<template>
  <ProductTableHeader
    title="Пластина латьевидної кістки"
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
    <el-table-column label="L, мм" prop="first" min-width="140px" />
    <el-table-column label="Кат. № нерж. сталь" prop="second" min-width="140px" />
    <el-table-column label="Кат. № сплав титану" prop="third" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ScatterBonePlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '16',
        second: '13460-00016',
        third: '33460-00016'
      },
      {
        first: '18',
        second: '13460-00018',
        third: '33460-00018'
      },
      {
        first: '20',
        second: '13460-00020',
        third: '33460-00020'
      },
      {
        first: '22',
        second: '13460-00022',
        third: '33460-00022'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/scatter-bone-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '8,0 мм'
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
