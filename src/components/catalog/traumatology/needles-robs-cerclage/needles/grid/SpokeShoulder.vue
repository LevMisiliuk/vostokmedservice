<template>
  <ProductTableHeader
    title="Спиця плечова з різьбленням – тип С"
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
    <el-table-column label=" L, 110 мм" prop="first" />
    <el-table-column label="L, 130 мм" prop="second" />
    <el-table-column label="L, 150 мм" prop="third" />
    <el-table-column label="L, 170 мм" prop="fourth" />
    <el-table-column label="L, 190 мм" prop="fifth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeShoulder',

  setup() {
    const tableData = computed(() => [
      {
        first: '15030-40110',
        second: '15030-40130',
        third: '15030-40150',
        fourth: '15030-40170',
        fifth: '15030-40190'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/shoulder-spoke.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Матеріал',
            data: 'нерж. сталь'
          },
          {
            id: 2,
            name: 'Діаметр різьблення',
            data: '4 мм спонгіозний'
          },
          {
            id: 3,
            name: 'Діаметр стержня',
            data: '1,75 мм '
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
