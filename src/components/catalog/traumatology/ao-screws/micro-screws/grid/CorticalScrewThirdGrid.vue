<template>
  <ProductTableHeader
    :title="$t('main.carts.traumatology.microScrews.corticalScrew2,7mm')"
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
import i18n from '@/i18n'

export default {
  name: 'CorticalScrewThirdGrid',

  setup() {
    const tableData = computed(() => [
      {
        first: '6',
        second: '11000-27006',
        third: '31000-27006'
      },
      {
        first: '8',
        second: '11000-27008',
        third: '31000-27008'
      },
      {
        first: '10',
        second: '11000-27010',
        third: '31000-27010'
      },
      {
        first: '12',
        second: '11000-27012',
        third: '31000-27012'
      },
      {
        first: '14',
        second: '11000-27014',
        third: '31000-27014'
      },
      {
        first: '16',
        second: '11000-27016',
        third: '31000-27016'
      },
      {
        first: '18',
        second: '11000-27018',
        third: '31000-27018'
      },
      {
        first: '20',
        second: '11000-27020',
        third: '31000-27020'
      },
      {
        first: '22',
        second: '11000-27022',
        third: '31000-27022'
      },
      {
        first: '24',
        second: '11000-27024',
        third: '31000-27024'
      },
      {
        first: '26',
        second: '11000-27026',
        third: '31000-27026'
      },
      {
        first: '28',
        second: '11000-27028',
        third: '31000-27028'
      },
      {
        first: '30',
        second: '11000-27030',
        third: '31000-27030'
      },
      {
        first: '32',
        second: '11000-27032',
        third: '31000-27032'
      },
      {
        first: '34',
        second: '11000-27034',
        third: '31000-27034'
      },
      {
        first: '36',
        second: '11000-27036',
        third: '31000-27036'
      },
      {
        first: '38',
        second: '11000-27038',
        third: '31000-27038'
      },
      {
        first: '40',
        second: '11000-27040',
        third: '31000-27040'
      },
      {
        first: '42',
        second: '11000-27042',
        third: '31000-27042'
      },
      {
        first: '44',
        second: '11000-27044',
        third: '31000-27044'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/cortical-screw2.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.threadDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.threadDiameterData.2,7mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.coreDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.coreDiameterData.1,9mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.headDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.headDiameterData.5mm'
            )
          },
          {
            id: 8,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.threadSpacing'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.threadSpacingData.1mm'
            )
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.microScrews.hexagon'),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.hexagonData.2,5mm'
            )
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.traumatology.microScrews.material'),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.materialData'
            )
          },
          {
            id: 6,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.spiralDrill'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.spiralDrillData.fifth'
            )
          },
          {
            id: 6,
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.spiralDrillData.sixth'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.drillForCarving'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.drillForCarvingData.third'
            )
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.screwdriver'
            ),
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
