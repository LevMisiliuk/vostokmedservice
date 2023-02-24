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
  name: 'CorticalScrew3and5',

  setup() {
    const tableData = computed(() => [
      {
        first: '7',
        second: '12010-35007',
        third: '32010-35007'
      },
      {
        first: '8',
        second: '12010-35008',
        third: '32010-35008'
      },
      {
        first: '10',
        second: '12010-35010',
        third: '32010-35010'
      },
      {
        first: '12',
        second: '12010-35012',
        third: '32010-35012'
      },
      {
        first: '14',
        second: '12010-35014',
        third: '32010-35014'
      },
      {
        first: '16',
        second: '12010-35016',
        third: '32010-35016'
      },
      {
        first: '18',
        second: '12010-35018',
        third: '32010-35018'
      },
      {
        first: '20',
        second: '12010-35020',
        third: '32010-35020'
      },
      {
        first: '22',
        second: '12010-35022',
        third: '32010-35022'
      },
      {
        first: '24',
        second: '12010-35024',
        third: '32010-35024'
      },
      {
        first: '26',
        second: '12010-35026',
        third: '32010-35026'
      },
      {
        first: '28',
        second: '12010-35028',
        third: '32010-35028'
      },
      {
        first: '30',
        second: '12010-35030',
        third: '32010-35030'
      },
      {
        first: '32',
        second: '12010-35032',
        third: '32010-35032'
      },
      {
        first: '34',
        second: '12010-35034',
        third: '32010-35034'
      },
      {
        first: '36',
        second: '12010-35036',
        third: '32010-35036'
      },
      {
        first: '38',
        second: '12010-35038',
        third: '32010-35038'
      },
      {
        first: '40',
        second: '12010-35040',
        third: '32010-35040'
      },
      {
        first: '42',
        second: '12010-35042',
        third: '32010-35042'
      },
      {
        first: '44',
        second: '12010-35044',
        third: '32010-35044'
      },
      {
        first: '45',
        second: '12010-35045',
        third: '32010-35045'
      },
      {
        first: '46',
        second: '12010-35046',
        third: '32010-35046'
      },
      {
        first: '48',
        second: '12010-35048',
        third: '32010-35048'
      },
      {
        first: '50',
        second: '12010-35050',
        third: '32010-35050'
      },
      {
        first: '52',
        second: '12010-35052',
        third: '32010-35052'
      },
      {
        first: '54',
        second: '12010-35054',
        third: '32010-35054'
      },
      {
        first: '56',
        second: '12010-35056',
        third: '32010-35056'
      },
      {
        first: '58',
        second: '12010-35058',
        third: '32010-35058'
      },
      {
        first: '60',
        second: '12010-35060',
        third: '32010-35060'
      },
      {
        first: '65',
        second: '12010-35065',
        third: '32010-35065'
      },
      {
        first: '65',
        second: '12010-35070',
        third: '32010-35070'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/cortical-3-and-5-second.jpeg'),
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
            data: '1,25 мм'
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
            data: '99010-25195 1,25 мм (3 стороння)'
          },
          {
            id: 6,
            data: '99020-25180 1,25 мм (легкопідключається)'
          },
          {
            id: 7,
            name: 'Дриль для різьблення',
            data: '99100-01005 1,25 (легкопідключається)'
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
