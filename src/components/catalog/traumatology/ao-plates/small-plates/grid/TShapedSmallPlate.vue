<template>
  <ProductTableHeader
    title="Т-подібна пластина, невелика"
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
  name: 'TShapedSmallPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '3+3',
        second: '49',
        third: '13440-04933',
        fourth: '33440-04933'
      },
      {
        first: '3+4',
        second: '60',
        third: '13440-06034',
        fourth: '33440-06034'
      },
      {
        first: '3+5',
        second: '67',
        third: '13440-06735',
        fourth: '33440-06735'
      },
      {
        first: '4+4',
        second: '56',
        third: '13440-05644',
        fourth: '33440-05644'
      },
      {
        first: '4+5',
        second: '67',
        third: '13440-06745',
        fourth: '33440-06745'
      },
      {
        first: '4+3',
        second: '45',
        third: '13440-04543',
        fourth: '33440-04543'
      },
      {
        first: '4+6',
        second: '78',
        third: '13440-07846',
        fourth: '33440-07846'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/t-shaped-small-plate.jpeg'),
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
