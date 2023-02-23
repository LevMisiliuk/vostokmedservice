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
    <el-table-column label="L, мм" prop="first" />
    <el-table-column label="L різьблення, мм" prop="second" />
    <el-table-column label="Кат № 6 мм" prop="third" />
    <el-table-column label="Кат № 6 мм" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ChancetanScrew',

  setup() {
    const tableData = computed(() => [
      {
        first: '70',
        second: '20',
        third: '15300-40070',
        fourth: ''
      },
      {
        first: '70',
        second: '25',
        third: '15301-40070',
        fourth: ''
      },
      {
        first: '80',
        second: '35',
        third: '15302-40070',
        fourth: ''
      },
      {
        first: '100',
        second: '40',
        third: '15300-40080',
        fourth: ''
      },
      {
        first: '150',
        second: '40',
        third: '15300-40150',
        fourth: '15300-60150'
      },
      {
        first: '160',
        second: '70',
        third: '',
        fourth: '15300-60175'
      },
      {
        first: '175',
        second: '40',
        third: '',
        fourth: '15300-60250'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/chancetan-screw.jpeg'),
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
