<template>
  <ProductTableHeader
    title="1/3 трубної пластини"
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
    <el-table-column label="Товщина" prop="third" min-width="140px" />
    <el-table-column label="Кат. № нерж. сталь" prop="fourth" min-width="140px" />
    <el-table-column label="Кат. № сплав титану" prop="fifth" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PipePlate',

  setup() {
    const tableData = computed(() => [
      { first: '2', second: '25', third: '13410-02502', fourth: '33410-02502' },
      { first: '3', second: '37', third: '13410-03703', fourth: '33410-03703' },
      { first: '4', second: '49', third: '13410-04904', fourth: '33410-04904' },
      { first: '5', second: '61', third: '13410-06105', fourth: '33410-06105' },
      { first: '6', second: '73', third: '13410-07306', fourth: '33410-07306' },
      { first: '7', second: '85', third: '13410-08507', fourth: '33410-08507' },
      { first: '8', second: '97', third: '13410-09708', fourth: '33410-09708' },
      {
        first: '9',
        second: '109',
        third: '13410-10909',
        fourth: '33410-10909'
      },
      {
        first: '10',
        second: '121',
        third: '13410-12110',
        fourth: '33410-12110'
      },
      {
        first: '11',
        second: '133',
        third: '13410-13311',
        fourth: '33410-13311'
      },
      {
        first: '12',
        second: '145',
        third: '13410-14512',
        fourth: '33410-14512'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/pipe-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '4,0 мм'
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
