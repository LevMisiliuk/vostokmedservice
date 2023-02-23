<template>
  <ProductTableHeader
    title="Гвинт-Стержень конічний"
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
    <el-table-column label="I, мм" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ConicalScrew',

  setup() {
    const tableData = computed(() => [
      { first: '1.29.110', second: '110', third: '45' },
      { first: '1.29.120', second: '120', third: '45' },
      { first: '1.29.140', second: '140', third: '50' },
      { first: '1.29.160', second: '160', third: '60' },
      { first: '1.29.180', second: '180', third: '65' }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/connical-screw.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Матеріал',
            data: 'сплав титану'
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
