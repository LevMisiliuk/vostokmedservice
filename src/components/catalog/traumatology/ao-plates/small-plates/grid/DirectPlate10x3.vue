<template>
  <ProductTableHeader
    title="Пряма пластина 10х3 мм"
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
    <el-table-column label="Товщина" prop="third" />
    <el-table-column label="Кат. № нерж. сталь" prop="fourth" />
    <el-table-column label="Кат. № сплав титану" prop="fifth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'DirectPlate10x3',

  setup() {
    const tableData = computed(() => [
      {
        first: '2',
        second: '31',
        third: '2',
        fourth: '13200-03102',
        fifth: '33200-03102'
      },
      {
        first: '3',
        second: '43',
        third: '2',
        fourth: '13200-04303',
        fifth: '33200-04303'
      },
      {
        first: '4',
        second: '55',
        third: '2',
        fourth: '13200-05504',
        fifth: '33200-05504'
      },
      {
        first: '5',
        second: '67',
        third: '2',
        fourth: '13200-06705',
        fifth: '33200-06705'
      },
      {
        first: '6',
        second: '79',
        third: '2',
        fourth: '13200-07906',
        fifth: '33200-07906'
      },
      {
        first: '7',
        second: '91',
        third: '2.5',
        fourth: '13200-09107',
        fifth: '33200-09107'
      },
      {
        first: '8',
        second: '103',
        third: '2.5',
        fourth: '13200-10308',
        fifth: '33200-10308'
      },
      {
        first: '9',
        second: '115',
        third: '2.5',
        fourth: '13200-11509',
        fifth: '33200-11509'
      },
      {
        first: '10',
        second: '127',
        third: '2.5',
        fourth: '13200-12710',
        fifth: '33200-12710'
      },
      {
        first: '12',
        second: '151',
        third: '2.5',
        fourth: '13200-15112',
        fifth: '33200-15112'
      },
      {
        first: '14',
        second: '175',
        third: '2.5',
        fourth: '13200-17514',
        fifth: '33200-17514'
      },
      {
        first: '16',
        second: '199',
        third: '2.5',
        fourth: '13200-19916',
        fifth: '33200-19916'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/direct-plate-10x3.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '3,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '10,0 мм'
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
