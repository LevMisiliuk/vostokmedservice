<template>
  <ProductTableHeader
    title="Блокуючий гвинт 3,9 мм"
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
  name: 'BlockedScrew3and9',

  setup() {
    const tableData = computed(() => [
      {
        first: '20',
        second: '12200-39020',
        third: '32200-39020 '
      },
      {
        first: '22',
        second: '12200-39022',
        third: '32200-39022'
      },
      {
        first: '24',
        second: '12200-39024',
        third: '32200-39024'
      },
      {
        first: '25',
        second: '12200-39025',
        third: '32200-39025'
      },
      {
        first: '26',
        second: '12200-39026',
        third: '32200-39026'
      },
      {
        first: '28',
        second: '12200-39028',
        third: '32200-39028'
      },
      {
        first: '30',
        second: '12200-39030',
        third: '32200-39030'
      },
      {
        first: '32',
        second: '12200-39032',
        third: '32200-39032'
      },
      {
        first: '34',
        second: '12200-39034',
        third: '32200-39034'
      },
      {
        first: '35',
        second: '12200-39035',
        third: '32200-39035'
      },
      {
        first: '36',
        second: '12200-39036',
        third: '32200-39036'
      },
      {
        first: '38',
        second: '12200-39038',
        third: '32200-39038'
      },
      {
        first: '40',
        second: '12200-39040',
        third: '32200-39040'
      },
      {
        first: '42',
        second: '12200-39042',
        third: '32200-39042'
      },
      {
        first: '44',
        second: '12200-39044',
        third: '32200-39044'
      },
      {
        first: '45',
        second: '12200-39045',
        third: '32200-39045'
      },
      {
        first: '46',
        second: '12200-39046',
        third: '32200-39046'
      },
      {
        first: '48',
        second: '12200-39048',
        third: '32200-39048'
      },
      {
        first: '50',
        second: '12200-39050',
        third: '32200-39050'
      },
      {
        first: '52',
        second: '12200-39052',
        third: '32200-39052'
      },
      {
        first: '54',
        second: '12200-39054',
        third: '32200-39054'
      },
      {
        first: '55',
        second: '12200-39055',
        third: '32200-39055'
      },
      {
        first: '56',
        second: '12200-39056',
        third: '32200-39056'
      },
      {
        first: '58',
        second: '12200-39058',
        third: '32200-39058'
      },
      {
        first: '60',
        second: '12200-39060',
        third: '32200-39060'
      },
      {
        first: '62',
        second: '',
        third: ''
      },
      {
        first: '64',
        second: '',
        third: ''
      },
      {
        first: '65',
        second: '12200-39065',
        third: '32200-39065'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/blocked-screw-3-and-9.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення',
            data: '3,9 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '3,2 мм'
          },
          {
            id: 3,
            name: 'Діаметр головки',
            data: '6,0 мм'
          },
          {
            id: 8,
            name: 'Міжрізьбова відстань',
            data: '1,75 мм'
          },
          {
            id: 4,
            name: 'Шестигранник',
            data: '2,5 мм'
          },
          {
            id: 5,
            name: 'Матеріал',
            data: 'нерж. сталь або сплав титану'
          },
          {
            id: 6,
            name: 'Спіральний дриль',
            data: '99010-32250 (3 стороння)'
          },
          {
            id: 6,
            data: '99020-32195 (легкопідключається)'
          },
          {
            id: 7,
            name: 'Викрутка',
            data: '99160-25120'
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
