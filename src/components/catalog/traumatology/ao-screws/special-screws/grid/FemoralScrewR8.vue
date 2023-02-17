<template>
  <ProductTableHeader
    title="Стегновий - R, 8 мм"
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
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.first')"
      prop="first"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.second')"
      prop="second"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.third')"
      prop="third"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FemoralScrewR8',

  setup() {
    const tableData = computed(() => [
      {
        first: '75',
        second: '12610-80075',
        third: '32610-80075'
      },
      {
        first: '80',
        second: '12610-80080',
        third: '32610-80080'
      },
      {
        first: '85',
        second: '12610-80085',
        third: '32610-80085'
      },
      {
        first: '90',
        second: '12610-80090',
        third: '32610-80090'
      },
      {
        first: '95',
        second: '12610-80095',
        third: '32610-80095'
      },
      {
        first: '100',
        second: '12610-80100',
        third: '32610-80100'
      },
      {
        first: '110',
        second: '12610-80110',
        third: '32610-80110'
      },
      {
        first: '115',
        second: '12610-80115',
        third: '32610-80115'
      },
      {
        first: '120',
        second: '12610-80120',
        third: '32610-80120'
      },
      {
        first: '125',
        second: '12610-80125',
        third: '32610-80125'
      },
      {
        first: '130',
        second: '12610-80130',
        third: '32610-80130'
      },
      {
        first: '135',
        second: '12610-80135',
        third: '32610-80135'
      },
      {
        first: '140',
        second: '12610-80140',
        third: '32610-80140'
      },
      {
        first: '145',
        second: '12610-80145',
        third: '32610-80145'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/femoral-r-8.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення',
            data: '8,0 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '5,0 мм'
          },
          {
            id: 8,
            name: 'Міжрізьбова відстань',
            data: '2,75 мм'
          },
          {
            id: 4,
            name: 'Діаметр отвору',
            data: '2,2 мм'
          },
          {
            id: 6,
            name: 'Шестигранник',
            data: '3,5 мм'
          },
          {
            id: 5,
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
