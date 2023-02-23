<template>
  <ProductTableHeader
    title="Реконструктивна пластина 10 х 3 мм"
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
    <el-table-column label="Кат. № нерж. сталь" prop="third" />
    <el-table-column label="Кат. № сплав титану" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ReconstructivePlate10x3',

  setup() {
    const tableData = computed(() => [
      {
        first: '3',
        second: '34',
        third: '13420-03403',
        fourth: '33420-03403'
      },
      {
        first: '4',
        second: '46',
        third: '13420-04604',
        fourth: '33420-04604'
      },
      {
        first: '5',
        second: '58',
        third: '13420-05805',
        fourth: '33420-05805'
      },
      {
        first: '6',
        second: '70',
        third: '13420-07006',
        fourth: '33420-07006'
      },
      {
        first: '7',
        second: '82',
        third: '13420-08207',
        fourth: '33420-08207'
      },
      {
        first: '8',
        second: '94',
        third: '13420-09408',
        fourth: '33420-09408'
      },
      {
        first: '9',
        second: '106',
        third: '13420-10609',
        fourth: '33420-10609'
      },
      {
        first: '10',
        second: '118',
        third: '13420-11810',
        fourth: '33420-11810'
      },
      {
        first: '12',
        second: '142',
        third: '13420-14212',
        fourth: '33420-14212'
      },
      {
        first: '14',
        second: '166',
        third: '13420-16614',
        fourth: '33420-16614'
      },
      {
        first: '16',
        second: '190',
        third: '13420-19016',
        fourth: '33420-19016'
      },
      {
        first: '18',
        second: '214',
        third: '13420-21418',
        fourth: '33420-21418'
      },
      {
        first: '20',
        second: '238',
        third: '13420-23820',
        fourth: '33420-23820'
      },
      {
        first: '22',
        second: '262',
        third: '13420-26222',
        fourth: '33420-26222'
      },
      {
        first: '24',
        second: '286',
        third: '13420-28624',
        fourth: '33420-28624'
      },
      {
        first: '26',
        second: '310',
        third: '13420-31026',
        fourth: '33420-31026'
      },
      {
        first: '28',
        second: '334',
        third: '13420-33428',
        fourth: '33420-33428'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/reconstructive-plate-10x3.jpeg'),
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
            data: '3,5-4,0 мм'
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
