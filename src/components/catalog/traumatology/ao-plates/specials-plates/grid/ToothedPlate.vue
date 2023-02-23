<template>
  <ProductTableHeader
    title="Пластина зубчаста для ступні"
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
    <el-table-column label="Кількість отворів" prop="second" />
    <el-table-column label="Кат. № нерж. сталь" prop="third" />
    <el-table-column label="Кат. № сплав титану" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ToothedPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '53',
        second: '3',
        third: '13480-05303',
        fourth: '33480-05303'
      },
      {
        first: '68',
        second: '4',
        third: '13480-06804',
        fourth: '33480-06804'
      },
      {
        first: '83',
        second: '5',
        third: '13480-08305',
        fourth: '33480-08305'
      },
      {
        first: '98',
        second: '6',
        third: '13480-09806',
        fourth: '33480-09806'
      },
      {
        first: '113',
        second: '7',
        third: '13480-11307',
        fourth: '33480-11307'
      },
      {
        first: '128',
        second: '8',
        third: '13480-12808',
        fourth: '33480-12808'
      },
      {
        first: '143',
        second: '9',
        third: '13480-14309',
        fourth: '33480-14309'
      },
      {
        first: '158',
        second: '10',
        third: '13480-15810',
        fourth: '33480-15810'
      },
      {
        first: '188',
        second: '12',
        third: '13480-18812',
        fourth: '33480-18812'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/thoothed-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,2 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '11,5 мм'
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
