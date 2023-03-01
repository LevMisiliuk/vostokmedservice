<template>
  <ProductTableHeader
    title="Спиця Ілізарова з упором"
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
    <el-table-column label="Кат №" prop="first" min-width="140px"/>
    <el-table-column label="L, мм" prop="second" min-width="140px"/>
    <el-table-column label="D, мм" prop="third" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'KirchenersSpoke',

  setup() {
    const tableData = computed(() => [
      {
        first: 'Z17.2,0.300',
        second: '300',
        third: '2,0'
      },
      {
        first: 'Z17.2.0.400',
        second: '400',
        third: '2,0'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/ilizarovs-spoke-second.jpeg'),
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
