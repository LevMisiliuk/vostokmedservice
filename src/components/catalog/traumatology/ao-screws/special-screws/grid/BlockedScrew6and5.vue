<template>
  <ProductTableHeader
    title="Блокуючий гвинт 4,9 мм"
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
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.first')"
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.second')"
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.third')"
      prop="third"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BlockedScrew6and5',

  setup() {
    const tableData = computed(() => [
      {
        first: '55',
        second: '12200-65055',
        third: '32200-65055 '
      },
      {
        first: '60',
        second: '12200-65060',
        third: '32200-65060'
      },
      {
        first: '65',
        second: '12200-65065',
        third: '32200-65065'
      },
      {
        first: '70',
        second: '12200-65070',
        third: '32200-65070'
      },
      {
        first: '75',
        second: '12200-65075',
        third: '32200-6507'
      },
      {
        first: '80',
        second: '12200-65080',
        third: '32200-65080'
      },
      {
        first: '85',
        second: '12200-65085',
        third: '32200-65085'
      },
      {
        first: '90',
        second: '12200-65090',
        third: '32200-65090'
      },
      {
        first: '95',
        second: '12200-65095',
        third: '32200-65095'
      },
      {
        first: '100',
        second: '12200-65100',
        third: '32200-65100'
      },
      {
        first: '105',
        second: '12200-65105',
        third: '32200-65105'
      },
      {
        first: '110',
        second: '12200-65110',
        third: '32200-65110'
      },
      {
        first: '115',
        second: '12200-65115',
        third: '32200-65115'
      },
      {
        first: '120',
        second: '12200-65120',
        third: '32200-65120'
      },
      {
        first: '125',
        second: '12200-65125',
        third: '32200-65125'
      },
      {
        first: '130',
        second: '12200-65130',
        third: '32200-65130'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/blocked-screw-6-and-5.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення',
            data: '6,5 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '3,4 мм'
          },
          {
            id: 3,
            name: 'Діаметр головки',
            data: '8,0 мм'
          },
          {
            id: 8,
            name: 'Міжрізьбова відстань',
            data: '2,75 мм'
          },
          {
            id: 4,
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
