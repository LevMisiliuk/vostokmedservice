<template>
  <ProductTableHeader
    title="Спиця Кірхнера"
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
    <el-table-column label="Кат №" prop="first" />
    <el-table-column label="L, мм" prop="second" />
    <el-table-column label="D, мм" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'KirchenersSpoke',

  setup() {
    const tableData = computed(() => [
      {
        first: 'Z6.1.0.150',
        second: '150',
        third: '1,0'
      },
      {
        first: 'Z6.1.0.200',
        second: '200',
        third: '1,0'
      },
      {
        first: 'Z6.1.5.250',
        second: '250',
        third: '1,5'
      },
      {
        first: 'Z6.1.5.300',
        second: '300',
        third: '1,5'
      },
      {
        first: 'Z6.1.8.250',
        second: '250',
        third: '1,8'
      },
      {
        first: 'Z6.1.8.300',
        second: '300',
        third: '1,8'
      },
      {
        first: 'Z6.1.8.400',
        second: '400',
        third: '1,8'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/kirchner-spoke.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Матеріал',
            data: 'нерж. сталь'
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
