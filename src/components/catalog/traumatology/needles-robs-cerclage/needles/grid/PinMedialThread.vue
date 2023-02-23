<template>
  <ProductTableHeader
    title="Спиця-фіксатор з медіальним різьбленням"
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
    <el-table-column label="L різьблення 20 мм" prop="second" />
    <el-table-column label="L різьблення 35 мм" prop="third" />
    <el-table-column label="L різьблення 40 мм" prop="fourth" />
    <el-table-column label="L різьблення 50 мм" prop="fifth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PinMedialThread',

  setup() {
    const tableData = computed(() => [
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '160',
        second: '',
        third: '',
        fourth: '15400-16040',
        fifth: ''
      },
      {
        first: '175',
        second: '',
        third: ' 15400-17535',
        fourth: '15400-17540',
        fifth: '15400-17550'
      },
      {
        first: '200',
        second: '',
        third: '15400-20035',
        fourth: '15400-20040',
        fifth: '15400-20050'
      },
      {
        first: '220',
        second: '',
        third: '',
        fourth: '',
        fifth: '15400-22050'
      },
      {
        first: '240',
        second: '',
        third: '',
        fourth: '',
        fifth: '15400-24050'
      },
      {
        first: '250',
        second: '',
        third: '15400-25035',
        fourth: '15400-25040',
        fifth: '15400-25050'
      },
      {
        first: '300',
        second: '',
        third: '15400-30035',
        fourth: '15400-30040',
        fifth: '15400-30050'
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
      {
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },{
        first: '150',
        second: '15400-15020',
        third: '',
        fourth: '15400-15040',
        fifth: ''
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/pin-medial-thread.jpeg'),
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
