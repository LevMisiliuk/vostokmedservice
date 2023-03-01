<template>
  <ProductTableHeader
    title="Спиця Кірхнера з упором"
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
  name: 'KirchenersSpokeSecond',

  setup() {
    const tableData = computed(() => [
      {
        first: 'Z17.1.5.150',
        second: '150',
        third: '1,5'
      },
      {
        first: 'Z17.1.5.200',
        second: '200',
        third: '1,5'
      },
      {
        first: 'Z17.1.5.250',
        second: '250',
        third: '1,5'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/kirchera-spoke-second.jpeg'),
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
