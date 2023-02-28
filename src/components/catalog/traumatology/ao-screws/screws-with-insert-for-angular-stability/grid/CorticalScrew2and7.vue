<template>
  <ProductTableHeader
    title="Гвинт кортикальний 2,7 мм, кутостабільний"
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
  name: 'CorticalScrew2and7',

  setup() {
    const tableData = computed(() => [
      { first: '6', second: '12000-27006', third: '32000-27006' },
      { first: '8', second: '12000-27008', third: '32000-27008' },
      { first: '10', second: '12000-27010', third: '32000-27010' },
      { first: '12', second: '12000-27012', third: '32000-27012' },
      { first: '14', second: '12000-27014', third: '32000-27014' },
      { first: '16', second: '12000-27016', third: '32000-27016' },
      { first: '18', second: '12000-27018', third: '32000-27018' },
      { first: '20', second: '12000-27020', third: '32000-27020' },
      { first: '22', second: '12000-27022', third: '32000-27022' },
      { first: '24', second: '12000-27024', third: '32000-27024' },
      { first: '26', second: '12000-27026', third: '32000-27026' },
      { first: '28', second: '12000-27028', third: '32000-27028' },
      { first: '30', second: '12000-27030', third: '32000-27030' },
      { first: '32', second: '12000-27032', third: '32000-27032' },
      { first: '34', second: '12000-27034', third: '32000-27034' },
      { first: '36', second: '12000-27036', third: '32000-27036' },
      { first: '38', second: '12000-27038', third: '32000-27038' },
      { first: '40', second: '12000-27040', third: '32000-27040' },
      { first: '42', second: '12000-27042', third: '32000-27042' },
      { first: '44', second: '12000-27044', third: '32000-27044' }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/screws-for-plates-with-angular-stability.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення:',
            data: '2,7 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '1,9 мм'
          },
          {
            id: 3,
            name: 'Діаметр головки',
            data: '5,0 мм'
          },
          {
            id: 8,
            name: 'Міжрізьбова відстань',
            data: '1,0 мм'
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
            data: '99010-20115 (3 стороння)'
          },
          {
            id: 6,
            data: '99020-20125 (легко підключається)'
          },
          {
            id: 7,
            name: 'Дриль для різьблення',
            data: '99100-01003 (легкопідключається)'
          },
          {
            id: 9,
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
