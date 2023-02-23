<template>
  <ProductTableHeader
    title="Реконструктивна пластина для таза 10х3 мм"
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
  name: 'PelvisReconstructivePlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '6',
        second: '100',
        third: '13421-10006',
        fourth: '33421-10006'
      },
      {
        first: '8',
        second: '132',
        third: '13421-13208',
        fourth: '33421-13208'
      },
      {
        first: '10',
        second: '160',
        third: '13421-16010',
        fourth: '33421-16010'
      },
      {
        first: '12',
        second: '184',
        third: '13421-18412',
        fourth: '33421-18412'
      },
      {
        first: '14',
        second: '208',
        third: '13421-20814',
        fourth: '33421-20814'
      },
      {
        first: '16',
        second: '232',
        third: '13421-23216',
        fourth: '33421-23216'
      },
      {
        first: '18',
        second: '256',
        third: '13421-25618',
        fourth: '33421-25618'
      },
      {
        first: '20',
        second: '280',
        third: '13421-28020',
        fourth: '33421-28020'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/pelvis-reconstructive-plate.jpeg'),
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
