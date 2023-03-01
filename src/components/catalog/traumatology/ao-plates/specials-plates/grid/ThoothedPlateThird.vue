<template>
  <ProductTableHeader
    title="Пластина зубчаста"
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
    <el-table-column label="Кат. №нерж. сталь, Ліва" prop="first" min-width="140px"/>
    <el-table-column label="Кат. № сплав титану, Ліва" prop="second" min-width="140px"/>
    <el-table-column label="Кількість отворів" prop="third" min-width="140px"/>
    <el-table-column label="L, мм" prop="fourth" min-width="140px"/>
    <el-table-column label="Кат. №нерж. сталь, Права" prop="fifth" min-width="140px"/>
    <el-table-column label="Кат. № сплав титану, Права" prop="sixth" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ThoothedPlateThird',

  setup() {
    const tableData = computed(() => [
      {
        first: '13490-06804',
        second: '33490-06804',
        third: '4',
        fourth: '68',
        fifth: '13491-06804',
        sixth: '33491-06804'
      },
      {
        first: '13490-08305',
        second: '33490-08305',
        third: '5',
        fourth: '83',
        fifth: '13491-08305',
        sixth: '33491-08305'
      },
      {
        first: '13490-09806',
        second: '33490-09806',
        third: '6',
        fourth: '89',
        fifth: '13491-09806',
        sixth: '33491-09806'
      },
      {
        first: '13490-11307',
        second: '33490-11307',
        third: '7',
        fourth: '113',
        fifth: '13491-11307',
        sixth: '33491-11307'
      },
      {
        first: '13490-12808',
        second: '33490-12808',
        third: '8',
        fourth: '128',
        fifth: '13491-12808',
        sixth: '33491-12808'
      },
      {
        first: '13490-14309',
        second: '33490-14309',
        third: '9',
        fourth: '143',
        fifth: '13491-14309',
        sixth: '33491-14309'
      },
      {
        first: '13490-15810',
        second: '33490-15810',
        third: '10',
        fourth: '158',
        fifth: '13491-15810',
        sixth: '33491-15810'
      },
      {
        first: '13490-17312',
        second: '33490-17312',
        third: '12',
        fourth: '173',
        fifth: '13491-17312',
        sixth: '33491-17312'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/thoothed-plate-third.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,5 мм'
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
