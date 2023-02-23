<template>
  <ProductTableHeader
    title="Пластина Т-подібна, різьбостабільна"
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
    <el-table-column label="Сторона" prop="third" />
    <el-table-column label="Кат. № нерж. сталь" prop="fourth" />
    <el-table-column label="Кат. № сплав титану" prop="fifth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TShapedPlateCurvedThreadResistance',

  setup() {
    const tableData = computed(() => [
      {
        first: '53',
        second: '3  3',
        third: 'Ліва',
        fourth: '13310-05333',
        fifth: '33310-05333'
      },
      {
        first: '60',
        second: '3  4',
        third: 'Ліва',
        fourth: '13310-06034',
        fifth: '33310-06034'
      },
      {
        first: '71',
        second: '3  5',
        third: 'Ліва',
        fourth: '13310-07135',
        fifth: '33310-07135'
      },
      {
        first: '82',
        second: '3  6',
        third: 'Ліва',
        fourth: '13310-08236',
        fifth: '33310-08236'
      },
      {
        first: '53',
        second: '3  3',
        third: 'Права',
        fourth: '13311-05333',
        fifth: '33311-05333'
      },
      {
        first: '60',
        second: '3  4',
        third: 'Права',
        fourth: '13311-06034',
        fifth: '33311-06034'
      },
      {
        first: '71',
        second: '3  5',
        third: 'Права',
        fourth: '13311-07135',
        fifth: '33311-07135'
      },
      {
        first: '82',
        second: '3  6',
        third: 'Права',
        fourth: '13311-08236',
        fifth: '33311-08236'
      },
      {
        first: '53',
        second: '4  3',
        third: 'Ліва',
        fourth: '13320-05343',
        fifth: '33320-05343'
      },
      {
        first: '64',
        second: '4  4',
        third: 'Ліва',
        fourth: '13320-06444',
        fifth: '33320-06444'
      },
      {
        first: '53',
        second: '4  3',
        third: 'Права',
        fourth: '13321-05343',
        fifth: '33321-05343'
      },
      {
        first: '64',
        second: '4  4',
        third: 'Права',
        fourth: '13321-06444',
        fifth: '33321-06444'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/t-shaped-plate-curved.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,2 мм'
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
