<template>
  <ProductTableHeader
    title="Пластина зубчаста для плеча"
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
  name: 'ThoothedPlateSecond',

  setup() {
    const tableData = computed(() => [
      {
        first: '53',
        second: '3',
        third: '13481-05303',
        fourth: '33481-05303'
      },
      {
        first: '68',
        second: '4',
        third: '13481-06804',
        fourth: '33481-06804'
      },
      {
        first: '83',
        second: '5',
        third: '13481-08305',
        fourth: '33481-08305'
      },
      {
        first: '98',
        second: '6',
        third: '13481-09806',
        fourth: '33481-09806'
      },
      {
        first: '113',
        second: '7',
        third: '13481-11307',
        fourth: '33481-11307'
      },
      {
        first: '128',
        second: '8',
        third: '13481-12808',
        fourth: '33481-12808'
      },
      {
        first: '143',
        second: '9',
        third: '13481-14309',
        fourth: '33481-14309'
      },
      {
        first: '158',
        second: '10',
        third: '13481-15810',
        fourth: '33481-15810'
      },
      {
        first: '188',
        second: '12',
        third: '13481-18812',
        fourth: '33481-18812'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/thoothed-plate-second.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '2,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '16,0 мм'
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
