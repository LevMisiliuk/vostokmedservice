<template>
  <ProductTableHeader
    title="Стержні Шанца"
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
    <el-table-column label="I, мм" prop="second" min-width="140px"/>
    <el-table-column label="Кат №" prop="third" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ShancRobs',

  setup() {
    const tableData = computed(() => [
      { first: 110, second: 30, third: '5.009.110' },
      { first: 120, second: 30, third: '5.009.120' },
      { first: 140, second: 30, third: '5.009.140' },
      { first: 160, second: 30, third: '5.009.160' },
      { first: 180, second: 30, third: '5.009.180' },
      { first: 200, second: 30, third: '5.009.200' }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/shanc-robs.jpeg'),
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
