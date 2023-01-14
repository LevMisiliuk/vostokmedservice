<template>
  <ProductTableHeader
    :title="$t('main.carts.traumatology.microScrews.corticalScrew2mm')"
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
  name: 'CorticalScrewSecondGrid',

  setup() {
    const tableData = computed(() => [
      {
        first: '6',
        second: '11000-20006',
        third: '31000-20006',
      },
      {
        first: '8',
        second: '11000-20008',
        third: '31000-20008',
      },
      {
        first: '10',
        second: '11000-20010',
        third: '31000-20010',
      },
      {
        first: '12',
        second: '11000-20012',
        third: '31000-20012',
      },
      {
        first: '14',
        second: '11000-20014',
        third: '31000-20014',
      },
      {
        first: '16',
        second: '11000-20016',
        third: '31000-20016',
      },
      {
        first: '18',
        second: '11000-20018',
        third: '31000-20018',
      },
      {
        first: '20',
        second: '11000-20020',
        third: '31000-20020',
      },
      {
        first: '22',
        second: '11000-20022',
        third: '31000-20022',
      },
      {
        first: '24',
        second: '11000-20024',
        third: '31000-20024',
      },
      {
        first: '26',
        second: '11000-20026',
        third: '31000-20026',
      },
      {
        first: '28',
        second: '11000-20028',
        third: '31000-20028',
      },
      {
        first: '30',
        second: '11000-20030',
        third: '31000-20030',
      },
      {
        first: '32',
        second: '11000-20032',
        third: '31000-20032',
      },
      {
        first: '34',
        second: '11000-20034',
        third: '31000-20034',
      },
      {
        first: '36',
        second: '11000-20036',
        third: '31000-20036',
      },
      {
        first: '38',
        second: '11000-20038',
        third: '31000-20038',
      },
      {
        first: '40',
        second: '11000-20040',
        third: '31000-20040',
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
              'main.carts.traumatology.microScrews.threadDiameterData.2mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.coreDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.coreDiameterData.1,3mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.headDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.headDiameterData.4mm'
            )
          },
          {
            id: 8,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.threadSpacing'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.threadSpacingData.0,5mm'
            )
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.microScrews.hexagon'),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.hexagonData.1,5mm'
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
              'main.carts.traumatology.microScrews.spiralDrillData.third'
            )
          },
          {
            id: 6,
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.spiralDrillData.fourth'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.drillForCarving'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.microScrews.drillForCarvingData.second'
            )
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.microScrews.screwdriver'
            ),
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
