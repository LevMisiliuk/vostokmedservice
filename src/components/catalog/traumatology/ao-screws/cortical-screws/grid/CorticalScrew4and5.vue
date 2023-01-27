<template>
  <ProductTableHeader
    :title="$t('main.carts.traumatology.corticalScrews.corticalScrew4,5mm')"
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
      :label="$t('main.carts.traumatology.corticalScrews.table.first')"
      prop="first"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.corticalScrews.table.second')"
      prop="second"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.corticalScrews.table.third')"
      prop="third"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'CorticalScrew4and5',

  setup() {
    const tableData = computed(() => [
      {
        first: '12',
        second: '11020-45012',
        third: '31020-45012'
      },
      {
        first: '14',
        second: '11020-45014',
        third: '31020-45014'
      },
      {
        first: '16',
        second: '11020-45016',
        third: '31020-45016'
      },
      {
        first: '18',
        second: '11020-45018',
        third: '31020-45018'
      },
      {
        first: '20',
        second: '11020-45020',
        third: '31020-45020'
      },
      {
        first: '22',
        second: '11020-45022',
        third: '31020-45022'
      },
      {
        first: '24',
        second: '11020-45024',
        third: '31020-45024'
      },
      {
        first: '26',
        second: '11020-45026',
        third: '31020-45026'
      },
      {
        first: '28',
        second: '11020-45028',
        third: '31020-45028'
      },
      {
        first: '30',
        second: '11020-45030',
        third: '31020-45030'
      },
      {
        first: '32',
        second: '11020-45032',
        third: '31020-45032'
      },
      {
        first: '34',
        second: '11020-45034',
        third: '31020-45034'
      },
      {
        first: '36',
        second: '11020-45036',
        third: '31020-45036'
      },
      {
        first: '38',
        second: '11020-45038',
        third: '31020-45038'
      },
      {
        first: '40',
        second: '11020-45040',
        third: '31020-45040'
      },
      {
        first: '42',
        second: '11020-45042',
        third: '31020-45042'
      },
      {
        first: '44',
        second: '11020-45044',
        third: '31020-45044'
      },
      {
        first: '46',
        second: '11020-45046',
        third: '31020-45046'
      },
      {
        first: '48',
        second: '11020-45048',
        third: '31020-45048'
      },
      {
        first: '50',
        second: '11020-45050',
        third: '31020-45050'
      },
      {
        first: '52',
        second: '11020-45052',
        third: '31020-45052'
      },
      {
        first: '54',
        second: '11020-45054',
        third: '31020-45054'
      },
      {
        first: '56',
        second: '11020-45056',
        third: '31020-45056'
      },
      {
        first: '58',
        second: '11020-45058',
        third: '31020-45058'
      },
      {
        first: '60',
        second: '11020-45060',
        third: '31020-45060'
      },
      {
        first: '65',
        second: '11020-45065',
        third: '31020-45065'
      },
      {
        first: '70',
        second: '11020-45070',
        third: '31020-45070'
      },
      {
        first: '75',
        second: '11020-45075',
        third: '31020-45075'
      },
      {
        first: '80',
        second: '11020-45080',
        third: '31020-45080'
      },
      {
        first: '85',
        second: '11020-45085',
        third: '31020-45085'
      },
      {
        first: '90',
        second: '11020-45090',
        third: '31020-45090'
      },
      {
        first: '95',
        second: '11020-45095',
        third: '31020-45095'
      },
      {
        first: '100',
        second: '11020-45100',
        third: '31020-45100'
      },
      {
        first: '105',
        second: '11020-45105',
        third: '31020-45105'
      },
      {
        first: '110',
        second: '11020-45110',
        third: '31020-45110'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/cortical-screw-3and5.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.threadDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.threadDiameterData.4,5mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.coreDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.coreDiameterData.3mm'
            )
          },
          {
            id: 8,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.threadSpacing'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.threadSpacingData.1,75mm'
            )
          },
          {
            id: 4,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.hexagon'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.hexagonData.3,5mm'
            )
          },
          {
            id: 5,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.materialData'
            )
          },
          {
            id: 6,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.spiralDrill'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.spiralDrillData.first'
            )
          },
          {
            id: 6,
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.spiralDrillData.second'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.drillForCarving'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.drillForCarvingData.first'
            )
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.screwdriver'
            ),
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
