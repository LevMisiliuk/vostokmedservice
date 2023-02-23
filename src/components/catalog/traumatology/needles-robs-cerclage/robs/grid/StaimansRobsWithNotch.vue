<template>
  <ProductTableHeader
    title="Стержні Стеймана з виїмкою"
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
    <el-table-column label="L, мм" prop="first" />
    <el-table-column label="I, мм" prop="second" />
    <el-table-column label="Кат №" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'StaimansRobsWithNotch',

  setup() {
    const tableData = computed(() => [
      { first: '100', second: '30', third: '5.020.100' },
      { first: '110', second: '35', third: '5.020.110' },
      { first: '120', second: '40', third: '5.020.120' },
      { first: '140', second: '45', third: '5.020.140' },
      { first: '160', second: '50', third: '5.020.160' },
      { first: '180', second: '55', third: '5.020.180' },
      { first: '200', second: '65', third: '5.020.200' }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/stainman-robs-with-notch.jpeg'),
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
