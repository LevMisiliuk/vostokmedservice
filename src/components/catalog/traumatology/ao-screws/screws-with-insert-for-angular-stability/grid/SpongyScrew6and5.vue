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
  name: 'SpongyScrew6and5',

  setup() {
    const tableData = computed(() => [
      {
        first: '30',
        second: '11350-65030',
        third: '31350-65030'
      },
      {
        first: '35',
        second: '11350-65035',
        third: '31350-65035'
      },
      {
        first: '40',
        second: '11350-65040',
        third: '31350-65040'
      },
      {
        first: '45',
        second: '11350-65045',
        third: '31350-65045'
      },
      {
        first: '50',
        second: '11350-65050',
        third: '31350-65050'
      },
      {
        first: '55',
        second: '11350-65055',
        third: '31350-65055'
      },
      {
        first: '60',
        second: '11350-65060',
        third: '31350-65060'
      },
      {
        first: '65',
        second: '11350-65065',
        third: '31350-65065'
      },
      {
        first: '70',
        second: '11350-65070',
        third: '31350-65070'
      },
      {
        first: '75',
        second: '11350-65075',
        third: '31350-65075'
      },
      {
        first: '80',
        second: '11350-65080',
        third: '31350-65080'
      },
      {
        first: '85',
        second: '11350-65085',
        third: '31350-65085'
      },
      {
        first: '90',
        second: '11350-65090',
        third: '31350-65085'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spongy-screw-6-and-5.jpeg'),
        productsParams: [
          {
            id: 0,
            name: 'Довжина різьблення:',
            data: 'Суцільна'
          },
          {
            id: 1,
            name: 'Діаметр різьблення:',
            data: '6,5 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '3,0 мм'
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
