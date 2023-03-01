<template>
  <ProductTableHeader
    title="Мініпластина 4x1 мм"
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
    <el-table-column label="Кат № нерж. сталь" prop="third" min-width="140px" />
    <el-table-column label="Кат № сплав титану" prop="fourth" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'MiniPlate4x1',

  setup() {
    const tableData = computed(() => [
      {
        first: '3',
        second: '15',
        third: '13100-01503',
        fourth: '33100-01503'
      },
      {
        first: '4',
        second: '20',
        third: '13100-02004',
        fourth: '33100-02004'
      },
      {
        first: '5',
        second: '25',
        third: '13100-02505',
        fourth: '33100-02505'
      },
      {
        first: '6',
        second: '30',
        third: '13100-03006',
        fourth: '33100-03006'
      },
      {
        first: '7',
        second: '35',
        third: '13100-03507',
        fourth: '33100-03006'
      },
      {
        first: '8',
        second: '40',
        third: '13100-04008',
        fourth: '33100-04008'
      },
      {
        first: '20',
        second: '100',
        third: '13100-10020',
        fourth: '33100-10020'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plate-4x1.jpeg'),
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
            data: '1,5 мм'
          },
          {
            id: 4,
            name: 'Матеріал',
            data: 'нерж. сталь або сплав титану'
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
