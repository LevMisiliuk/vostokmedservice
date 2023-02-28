<template>
  <ProductTableHeader
    title="Гвинт спонгіозний 4,0 мм, кутостабільний"
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
  name: 'SpongyScrew4and0',

  setup() {
    const tableData = computed(() => [
      {
        first: '14',
        second: '12040-40014',
        third: '32040-40014'
      },
      {
        first: '16',
        second: '12040-40016',
        third: '32040-40016'
      },
      {
        first: '18',
        second: '12040-40018',
        third: '32040-40018'
      },
      {
        first: '20',
        second: '12040-40020',
        third: '32040-40020'
      },
      {
        first: '22',
        second: '12040-40022',
        third: '32040-40022'
      },
      {
        first: '24',
        second: '12040-40024',
        third: '32040-40024'
      },
      {
        first: '26',
        second: '12040-40026',
        third: '32040-40026'
      },
      {
        first: '28',
        second: '12040-40028',
        third: '32040-40028'
      },
      {
        first: '30',
        second: '12040-40030',
        third: '32040-40030'
      },
      {
        first: '35',
        second: '12040-40035',
        third: '32040-40035'
      },
      {
        first: '40',
        second: '12040-40040',
        third: '32040-40040'
      },
      {
        first: '45',
        second: '12040-40045',
        third: '32040-40045'
      },
      {
        first: '50',
        second: '12040-40050',
        third: '32040-40050'
      },
      {
        first: '55',
        second: '12040-40055',
        third: '32040-40055'
      },
      {
        first: '60',
        second: '12040-40060',
        third: '32040-40060'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spongy-screw-4-and-0.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення:',
            data: '4,0 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '1,9 мм'
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
            data: 'нерж. сталь абл сплав титану'
          },
          {
            id: 6,
            name: 'Спіральний дриль',
            data: '99010-15070 (3 стороння)'
          },
          {
            id: 6,
            data: '99020-15085 (легкопідключається)'
          },
          {
            id: 7,
            name: 'Дриль для різьблення',
            data: '99100-01007 (легкопідключається)'
          },
          {
            id: 9,
            name: 'Викрутка',
            data: '99160-15115'
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
