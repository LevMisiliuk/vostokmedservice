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
  name: 'BlockedScrew4and9',

  setup() {
    const tableData = computed(() => [
      {
        first: '20',
        second: '12200-49020',
        third: '32200-49020 '
      },
      {
        first: '22',
        second: '12200-49022',
        third: '32200-49022'
      },
      {
        first: '24',
        second: '12200-49024',
        third: '32200-49024'
      },
      {
        first: '25',
        second: '12200-49025',
        third: '32200-49025'
      },
      {
        first: '26',
        second: '12200-49026',
        third: '32200-49026'
      },
      {
        first: '28',
        second: '12200-49028',
        third: '32200-49028'
      },
      {
        first: '30',
        second: '12200-49030',
        third: '32200-49030'
      },
      {
        first: '32',
        second: '12200-49032',
        third: '32200-49032'
      },
      {
        first: '34',
        second: '12200-49034',
        third: '32200-49034'
      },
      {
        first: '35',
        second: '12200-49035',
        third: '32200-49035'
      },
      {
        first: '36',
        second: '12200-49036',
        third: '32200-49036'
      },
      {
        first: '38',
        second: '12200-49038',
        third: '32200-49038'
      },
      {
        first: '40',
        second: '12200-49040',
        third: '32200-49040'
      },
      {
        first: '42',
        second: '12200-49042',
        third: '32200-49042'
      },
      {
        first: '44',
        second: '12200-49044',
        third: '32200-49044'
      },
      {
        first: '45',
        second: '12200-49045',
        third: '32200-49045'
      },
      {
        first: '46',
        second: '12200-49046',
        third: '32200-49046'
      },
      {
        first: '48',
        second: '12200-49048',
        third: '32200-49048'
      },
      {
        first: '50',
        second: '12200-49050',
        third: '32200-49050'
      },
      {
        first: '52',
        second: '12200-49052',
        third: '32200-49052'
      },
      {
        first: '54',
        second: '12200-49054',
        third: '32200-49054'
      },
      {
        first: '55',
        second: '12200-49055',
        third: '32200-49055'
      },
      {
        first: '56',
        second: '12200-49056',
        third: '32200-49056'
      },
      {
        first: '58',
        second: '12200-49058',
        third: '32200-49058'
      },
      {
        first: '60',
        second: '12200-49060',
        third: '32200-49060'
      },
      {
        first: '62',
        second: '12200-49062',
        third: '32200-49062'
      },
      {
        first: '64',
        second: '12200-49064',
        third: '32200-49064'
      },
      {
        first: '65',
        second: '12200-49065',
        third: '32200-49065'
      },
      {
        first: '66',
        second: '12200-49066',
        third: '32200-49066'
      },
      {
        first: '68',
        second: '12200-49068',
        third: '32200-49068'
      },
      {
        first: '70',
        second: '12200-49070',
        third: '32200-49070'
      },
      {
        first: '72',
        second: '12200-49070',
        third: '32200-49072'
      },
      {
        first: '75',
        second: '12200-49075',
        third: '32200-49075'
      },
      {
        first: '76',
        second: '12200-49076',
        third: '32200-49076'
      },
      {
        first: '78',
        second: '12200-49078',
        third: '32200-49078'
      },
      {
        first: '80',
        second: '12200-49080',
        third: '32200-49080'
      },
      {
        first: '85',
        second: '12200-49085',
        third: '32200-49085'
      },
      {
        first: '90',
        second: '12200-49090',
        third: '32200-49090'
      },
      {
        first: '100',
        second: '12200-49100',
        third: '32200-49065'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/blocked-screw-3-and-9.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення',
            data: '4,9 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '4,2 мм'
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
          },
          {
            id: 6,
            name: 'Спіральний дриль',
            data: '99010-40220 (3 сторонная) '
          },
          {
            id: 7,
            name: 'Викрутка',
            data: '99160-35145'
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
