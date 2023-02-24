<template>
  <ProductTableHeader
    title="Гвинт кортикальний 4,5 мм, кутостабільний"
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
  name: 'CorticalScrew4and5',

  setup() {
    const tableData = computed(() => [
      {
        first: '20',
        second: '12100-45020',
        third: '32100-45020'
      },
      {
        first: '22',
        second: '12100-45022',
        third: '32100-45022'
      },
      {
        first: '24',
        second: '12100-45024',
        third: '32100-45024'
      },
      {
        first: '26',
        second: '12100-45026',
        third: '32100-45026'
      },
      {
        first: '28',
        second: '12100-45028',
        third: '32100-45028'
      },
      {
        first: '30',
        second: '12100-45030',
        third: '32100-45030'
      },
      {
        first: '32',
        second: '12100-45032',
        third: '32100-45032'
      },
      {
        first: '34',
        second: '12100-45034',
        third: '32100-45034'
      },
      {
        first: '36',
        second: '12100-45036',
        third: '32100-45036'
      },
      {
        first: '38',
        second: '12100-45038',
        third: '32100-45038'
      },
      {
        first: '40',
        second: '12100-45040',
        third: '32100-45040'
      },
      {
        first: '42',
        second: '12100-45042',
        third: '32100-45042'
      },
      {
        first: '44',
        second: '12100-45044',
        third: '32100-45044'
      },
      {
        first: '46',
        second: '12100-45046',
        third: '32100-45046'
      },
      {
        first: '48',
        second: '12100-45048',
        third: '32100-45048'
      },
      {
        first: '50',
        second: '12100-45050',
        third: '32100-45050'
      },
      {
        first: '52',
        second: '12100-45052',
        third: '32100-45052'
      },
      {
        first: '54',
        second: '12100-45054',
        third: '32100-45054'
      },
      {
        first: '56',
        second: '12100-45056',
        third: '32100-45056'
      },
      {
        first: '58',
        second: '12100-45058',
        third: '32100-45058'
      },
      {
        first: '60',
        second: '12100-45060',
        third: '32100-45060'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/cortical-3-and-5-second.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення:',
            data: '4,5 мм'
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
            data: '1,75 мм'
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
            data: '99010-32250 (3 стороння)'
          },
          {
            id: 6,
            data: '99020-32195 (легкопідключається)'
          },
          {
            id: 7,
            name: 'Дриль для різьблення',
            data: '99100-01009  (легкопідключається)'
          },
          {
            id: 9,
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
