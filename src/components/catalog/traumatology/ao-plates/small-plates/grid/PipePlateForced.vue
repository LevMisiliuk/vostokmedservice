<template>
  <ProductTableHeader
    title="1/3 трубної пластини посилена"
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
    <el-table-column label="Кількість отворів" prop="first" />
    <el-table-column label="L, мм" prop="second" />>
    <el-table-column label="Кат. № нерж. сталь" prop="third" />
    <el-table-column label="Кат. № сплав титану" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PipePlateForced',

  setup() {
    const tableData = computed(() => [
      {
        first: '2',
        second: '25',
        third: '13411-02502',
        fourth: '33411-02502'
      },
      {
        first: '3',
        second: '37',
        third: '13411-03703',
        fourth: '33411-03703'
      },
      {
        first: '4',
        second: '49',
        third: '13411-04904',
        fourth: '33411-04904'
      },
      {
        first: '5',
        second: '61',
        third: '13411-06105',
        fourth: '33411-06105'
      },
      {
        first: '6',
        second: '73',
        third: '13411-07306',
        fourth: '33411-07306'
      },
      {
        first: '7',
        second: '85',
        third: '13411-08507',
        fourth: '33411-08507'
      },
      {
        first: '8',
        second: '97',
        third: '13411-09708',
        fourth: '33411-09708'
      },
      {
        first: '9',
        second: '109',
        third: '13411-10909',
        fourth: '33411-10909'
      },
      {
        first: '10',
        second: '121',
        third: '13411-12110',
        fourth: '33411-12110'
      },
      {
        first: '11',
        second: '133',
        third: '13411-13311',
        fourth: '33411-13311'
      },
      {
        first: '12',
        second: '145',
        third: '13411-14512',
        fourth: '33411-14512'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/pipe-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '2,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '9,0 мм'
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
