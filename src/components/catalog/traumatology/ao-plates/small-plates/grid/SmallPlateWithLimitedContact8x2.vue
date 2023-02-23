<template>
  <ProductTableHeader
    title="Невелика пластина з обмеженим контактом 8х2 мм"
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
  name: 'SmallPlateWithLimitedContact8x2',

  setup() {
    const tableData = computed(() => [
      { first: '2', second: '20', third: '13181-02002', fourth: '33181-02002' },
      { first: '3', second: '28', third: '13181-02803', fourth: '33181-02803' },
      { first: '4', second: '36', third: '13181-03604', fourth: '33181-03604' },
      { first: '5', second: '44', third: '13181-04405', fourth: '33181-04405' },
      { first: '6', second: '52', third: '13181-05206', fourth: '33181-05206' },
      { first: '7', second: '60', third: '13181-06007', fourth: '33181-06007' },
      { first: '8', second: '68', third: '13181-06808', fourth: '33181-06808' },
      { first: '9', second: '76', third: '13181-07609', fourth: '33181-07609' },
      {
        first: '10',
        second: '84',
        third: '13181-08410',
        fourth: '33181-08410'
      },
      {
        first: '11',
        second: '92',
        third: '13181-09211',
        fourth: '33181-09211'
      },
      {
        first: '12',
        second: '100',
        third: '13181-10012',
        fourth: '33181-10012'
      },
      {
        first: '14',
        second: '116',
        third: '13181-11614',
        fourth: '33181-11614'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/small-plate-with-limited-contact.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '2,5 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '8,0 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '2,7 мм'
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
