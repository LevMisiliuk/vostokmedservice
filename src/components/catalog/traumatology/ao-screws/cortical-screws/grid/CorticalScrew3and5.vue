
<template>
  <ProductTableHeader
    :title="$t('main.carts.traumatology.corticalScrews.corticalScrew3,5mm')"
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
      :label="$t('main.carts.traumatology.corticalScrews.table.first')"
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.corticalScrews.table.second')"
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.corticalScrews.table.third')"
      prop="third"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'CorticalScrew3and5',

  setup() {
    const tableData = computed(() => [
      {
        first: ' 8',
        second: '11000-35008',
        third: '31000-35008',
      },
      {
        first: '10',
        second: '11000-35010',
        third: '31000-35010',
      },
      {
        first: '12',
        second: '11000-35012',
        third: '31000-35012',
      },
      {
        first: '14',
        second: '11000-35014',
        third: '31000-35014',
      },
      {
        first: '16',
        second: '11000-35016',
        third: '31000-35016',
      },
      {
        first: '18',
        second: '11000-35018',
        third: '31000-35018',
      },
      {
        first: '20',
        second: '11000-35020',
        third: '31000-35020',
      },
      {
        first: '22',
        second: '11000-35022',
        third: '31000-35022',
      },
      {
        first: '24',
        second: '11000-35024',
        third: '31000-35024',
      },
      {
        first: '26',
        second: '11000-35026',
        third: '31000-35026',
      },
      {
        first: '28',
        second: '11000-35028',
        third: '31000-35028',
      },
      {
        first: '30',
        second: '11000-35030',
        third: '31000-35030',
      },
      {
        first: '32',
        second: '11000-35032',
        third: '31000-35032',
      },
      {
        first: '34',
        second: '11000-35034',
        third: '31000-35034',
      },
      {
        first: '36',
        second: '11000-35036',
        third: '31000-35036',
      },
      {
        first: '38',
        second: '11000-35038',
        third: '31000-35038',
      },
      {
        first: '40',
        second: '11000-35040',
        third: '31000-35040',
      },
      {
        first: '45',
        second: '11000-35045',
        third: '31000-35045',
      },
      {
        first: '50',
        second: '11000-35050',
        third: '31000-35050',
      },
      {
        first: '55',
        second: '11000-35055',
        third: '31000-35055',
      },
      {
        first: '60',
        second: '11000-35060',
        third: '31000-35060',
      },
      {
        first: '65',
        second: '11000-35065',
        third: '31000-35065',
      },
      {
        first: '70',
        second: '11000-35070',
        third: '31000-35070',
      },
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
              'main.carts.traumatology.corticalScrews.threadDiameterData.3,5mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.coreDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.coreDiameterData.2mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.headDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.headDiameterData.6mm'
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
            name: i18n.global.t('main.carts.traumatology.corticalScrews.hexagon'),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.hexagonData.2,5mm'
            )
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.traumatology.corticalScrews.material'),
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
