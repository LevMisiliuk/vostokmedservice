<template>
  <ProductTableHeader
    title="Гвинт кортикальний 3,5 мм, кутостабільний"
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
  name: 'CorticalScrew3and5',

  setup() {
    const tableData = computed(() => [
      { first: '20', second: '12000-35020', third: '32000-35020' },
      { first: '22', second: '12000-35022', third: '32000-35022' },
      { first: '24', second: '12000-35024', third: '32000-35024' },
      { first: '26', second: '12000-35026', third: '32000-35026' },
      { first: '28', second: '12000-35028', third: '32000-35028' },
      { first: '30', second: '12000-35030', third: '32000-35030' },
      { first: '32', second: '12000-35032', third: '32000-35032' },
      { first: '34', second: '12000-35034', third: '32000-35034' },
      { first: '36', second: '12000-35036', third: '32000-35036' },
      { first: '38', second: '12000-35038', third: '32000-35038' },
      { first: '40', second: '12000-35040', third: '32000-35040' },
      { first: '42', second: '12000-35042', third: '32000-35042' },
      { first: '44', second: '12000-35044', third: '32000-35044' },
      { first: '45', second: '12000-35045', third: '32000-35045' },
      { first: '46', second: '12000-35046', third: '32000-35046' },
      { first: '48', second: '12000-35048', third: '32000-35048' },
      { first: '50', second: '12000-35050', third: '32000-35050' },
      { first: '52', second: '12000-35052', third: '32000-35052' },
      { first: '54', second: '12000-35054', third: '32000-35054' },
      { first: '55', second: '12000-35055', third: '32000-35055' },
      { first: '56', second: '12000-35056', third: '32000-35056' },
      { first: '58', second: '12000-35058', third: '32000-35058' },
      { first: '60', second: '12000-35060', third: '32000-35060' },
      { first: '65', second: '12000-35065', third: '32000-35065' },
      { first: '70', second: '12000-35070', third: '32000-35070' }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/cortical-screw-3-and-5.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення:',
            data: '3,5 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '2,0 мм'
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
            data: '99010-15070 1,75 мм (3 стороння)'
          },
          {
            id: 6,
            data: '99020-15085 1,75 мм(легкопідключається)'
          },
          {
            id: 7,
            name: 'Дриль для різьблення',
            data: '99100-01006 1,75 (легкопідключається)'
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
