<template>
  <ProductTableHeader
    title="Само -компресійна пластина, невелика 10х3 мм"
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
    <el-table-column label="Кількість отворів" prop="first" min-width="140px" />
    <el-table-column label="L, мм" prop="second" min-width="140px" />
    <el-table-column label="Кат. № нерж. сталь" prop="third" min-width="140px" />
    <el-table-column label="Кат. № сплав титану" prop="fourth" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SmallSelfCompresivePlate',

  setup() {
    const tableData = computed(() => [
      { first: '2', second: '25', third: '13400-02502', fourth: '33400-02502' },
      { first: '3', second: '37', third: '13400-03703', fourth: '33400-0370' },
      { first: '4', second: '49', third: '13400-04904', fourth: '33400-04904' },
      { first: '5', second: '61', third: '13400-06105', fourth: '33400-06105' },
      { first: '6', second: '73', third: '13400-07306', fourth: '33400-07306' },
      { first: '7', second: '85', third: '13400-08507', fourth: '33400-08507' },
      { first: '8', second: '97', third: '13400-09708', fourth: '33400-09708' },
      {
        first: '9',
        second: '109',
        third: '13400-10909',
        fourth: '33400-10909'
      },
      {
        first: '10',
        second: '121',
        third: '13400-12110',
        fourth: '33400-12110'
      },
      {
        first: '11',
        second: '133',
        third: '13400-13311',
        fourth: '33400-13311'
      },
      {
        first: '12',
        second: '145',
        third: '13400-14512',
        fourth: '33400-14512'
      },
      {
        first: '13',
        second: '157',
        third: '13400-16914',
        fourth: '33400-16914'
      },
      {
        first: '14',
        second: '169',
        third: '13400-19316',
        fourth: '33400-19316'
      },
      {
        first: '16',
        second: '193',
        third: '13400-02502',
        fourth: '33400-02502'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/small-self-compressive-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '3,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '10 мм'
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
