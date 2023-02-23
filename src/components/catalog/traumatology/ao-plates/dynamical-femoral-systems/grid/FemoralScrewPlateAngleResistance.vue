<template>
  <ProductTableHeader
    title="Пластина стегнового гвинта 135°, кутостабільна з обмеженим контактом"
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
    <el-table-column label="L" prop="second" />
    <el-table-column label="130" prop="third" />
    <el-table-column label="" prop="fourth" />
    <el-table-column label="" prop="fifth" />
    <el-table-column label="130" prop="sixth" />
    <el-table-column label="150" prop="seventh" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FemoralScrewPlateAngleResistance',

  setup() {
    const tableData = computed(() => [
      {
        first: '2',
        second: '47',
        third: '13902-13002',
        fourth: '13902-13502',
        fifth: '13902-14002',
        sixth: '13902-14502',
        seventh: '13902-15002'
      },
      {
        first: '3',
        second: '63',
        third: '13902-13003',
        fourth: '13902-13503',
        fifth: '',
        sixth: '',
        seventh: ''
      },
      {
        first: '4',
        second: '79',
        third: '13902-13004',
        fourth: '13902-13504',
        fifth: '13902-14004',
        sixth: '13902-14504',
        seventh: '13902-15004'
      },
      {
        first: '5',
        second: '95',
        third: '13902-13005',
        fourth: '13902-13505',
        fifth: '13902-14005',
        sixth: '13902-14505',
        seventh: '13902-15005'
      },
      {
        first: '6',
        second: '111',
        third: '13902-13006',
        fourth: '13902-13506',
        fifth: '13902-14006',
        sixth: '13902-14506',
        seventh: '13902-15006'
      },
      {
        first: '8',
        second: '143',
        third: '13902-13008',
        fourth: '13902-13508',
        fifth: '',
        sixth: '',
        seventh: '13902-15008'
      },
      {
        first: '10',
        second: '175',
        third: '13902-13010',
        fourth: '13902-13510',
        fifth: '',
        sixth: '',
        seventh: '13902-15010'
      },
      {
        first: '12',
        second: '207',
        third: '13902-13012',
        fourth: '13902-13512',
        fifth: '',
        sixth: '',
        seventh: '13902-15012'
      },
      {
        first: '14',
        second: '239',
        third: '13902-13014',
        fourth: '13902-13514',
        fifth: '',
        sixth: '',
        seventh: ''
      },
      {
        first: '16',
        second: '271',
        third: '',
        fourth: '13902-13516',
        fifth: '',
        sixth: '',
        seventh: ''
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/femoral-screw-plate-135.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Матеріал',
            data: 'Нерж. сталь або сплав титану'
          },
          {
            id: 2,
            name: '',
            data: 'У разі сплаву титану перша цифра буде 3'
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
