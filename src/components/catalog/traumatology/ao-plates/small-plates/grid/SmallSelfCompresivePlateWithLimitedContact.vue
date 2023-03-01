<template>
  <ProductTableHeader
    title="Само-компресійна пластина з обмеженим контактом 11,5х4 мм"
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
  name: 'SmallSelfCompresivePlateWithLimitedContact',

  setup() {
    const tableData = computed(() => [
      {
        first: '5',
        second: '88',
        third: '13801-08805',
        fourth: '33801-08805'
      },
      {
        first: '6',
        second: '106',
        third: '13801-10606',
        fourth: '33801-10606'
      },
      {
        first: '7',
        second: '124',
        third: '13801-12407',
        fourth: '33801-12407'
      },
      {
        first: '8',
        second: '142',
        third: '13801-14208',
        fourth: '33801-14208'
      },
      {
        first: '9',
        second: '160',
        third: '13801-16009',
        fourth: '33801-16009'
      },
      {
        first: '10',
        second: '178',
        third: '13801-17810',
        fourth: '33801-17810'
      },
      {
        first: '11',
        second: '196',
        third: '13801-19611',
        fourth: '33801-19611'
      },
      {
        first: '12',
        second: '214',
        third: '13801-21412',
        fourth: '33801-21412'
      },
      {
        first: '14',
        second: '250',
        third: '13801-25014',
        fourth: '33801-25014'
      },
      {
        first: '16',
        second: '286',
        third: '13801-28616',
        fourth: '33801-28616'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/small-selfcompresive-limited-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '4,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '11,5 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '4,5 мм'
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
