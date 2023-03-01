<template>
  <ProductTableHeader
    title="Само-компресійна пластина з обмеженим контактом 10x3 мм"
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
  name: 'SelfCompresivePlateLimitedContact',

  setup() {
    const tableData = computed(() => [
      { first: '4', second: '51', third: '13401-05104', fourth: '33401-05104' },
      { first: '5', second: '64', third: '13401-06405', fourth: '33401-06405' },
      { first: '6', second: '77', third: '13401-07706', fourth: '33401-07706' },
      { first: '7', second: '90', third: '13401-09007', fourth: '33401-09007' },
      {
        first: '8',
        second: '103',
        third: '13401-10308',
        fourth: '33401-10308'
      },
      {
        first: '9',
        second: '116',
        third: '13401-11609',
        fourth: '33401-11609'
      },
      {
        first: '10',
        second: '129',
        third: '13401-02910',
        fourth: '33401-02910'
      },
      {
        first: '11',
        second: '142',
        third: '13401-14211',
        fourth: '33401-14211'
      },
      {
        first: '12',
        second: '155',
        third: '13401-15512',
        fourth: '33401-15512'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/self-compressive-plate-limited-contact.jpeg'),
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
