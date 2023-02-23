<template>
  <ProductTableHeader
    title="Пластина стегнового гвинта 95 °"
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
    <el-table-column label="L, мм" prop="second" />
    <el-table-column label="Кат №" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CondylarScrewPlate95',

  setup() {
    const tableData = computed(() => [
      {
        first: '4',
        second: '78',
        third: '13900-09504'
      },
      {
        first: '5',
        second: '94',
        third: '13900-09505'
      },
      {
        first: '6',
        second: '110',
        third: '13900-09506'
      },
      {
        first: '7',
        second: '129',
        third: '13900-09507'
      },
      {
        first: '8',
        second: '142',
        third: '13900-09508'
      },
      {
        first: '10',
        second: '176',
        third: '13900-09510'
      },
      {
        first: '12',
        second: '206',
        third: '13900-09512'
      },
      {
        first: '14',
        second: '238',
        third: '13900-09514'
      },
      {
        first: '16',
        second: '270',
        third: ''
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/condylar-screw-plate-95.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Матеріал',
            data: 'Нерж. сталь або сплав титану'
          },
          {
            id: 2,
            name: '',
            data: 'У разі сплаву титану перша цифра буде 3'
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
