<template>
  <ProductTableHeader
    title="Мініпластина 5x1 мм"
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
    <el-table-column label="Кат № нерж. сталь" prop="third" />
    <el-table-column label="Кат № сплав титану" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'MiniPlate5x1',

  setup() {
    const tableData = computed(() => [
      {
        first: '3',
        second: '17',
        third: '13100-01703',
        fourth: '33100-01703'
      },
      {
        first: '4',
        second: '23',
        third: '13100-02304',
        fourth: '33100-02304'
      },
      {
        first: '5',
        second: '29',
        third: '13100-02905',
        fourth: '33100-02905'
      },
      {
        first: '6',
        second: '35',
        third: '13100-03506',
        fourth: '33100-03506'
      },
      {
        first: '20',
        second: '119',
        third: '13100-11920',
        fourth: '33100-11920'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plate-5x1.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '5,0 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '2,0 мм'
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
