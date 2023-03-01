<template>
  <ProductTableHeader
    title="Пластина для плеча"
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
    <el-table-column label="L, мм" prop="first" min-width="140px"/>
    <el-table-column label="Кількість отворів" prop="second" min-width="140px"/>
    <el-table-column label="Кат. № нерж. сталь" prop="third" min-width="140px"/>
    <el-table-column label="Кат. № сплав титану" prop="fourth" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ShoulderPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '90',
        second: '3',
        third: '13710-09003',
        fourth: '33710-09003'
      },
      {
        first: '136',
        second: '6',
        third: '13710-13606',
        fourth: '33710-13606'
      },
      {
        first: '153',
        second: '7',
        third: '13710 -15307',
        fourth: '33710-15307'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/shoulder-plate-default.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '2,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '28 мм'
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
