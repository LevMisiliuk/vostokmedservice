
<template>
  <ProductTableHeader
    :title="$t('main.carts.traumatology.threadResistantScrews.threadResistantScrew3,5mm')"
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
      :label="$t('main.carts.traumatology.threadResistantScrews.table.first')"
      prop="first"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.threadResistantScrews.table.second')"
      prop="second"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.threadResistantScrews.table.third')"
      prop="third"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'ThreadResistantScrew3and5',

  setup() {
    const tableData = computed(() => [
      {
        first: ' 8',
        second: '12100-35008',
        third: '32100-35008',
      },
      {
        first: '10',
        second: '12100-35010',
        third: '32100-35010',
      },
      {
        first: '12',
        second: '12100-35012',
        third: '32100-35012',
      },
      {
        first: '14',
        second: '12100-35014',
        third: '32100-35014',
      },
      {
        first: '16',
        second: '12100-35016',
        third: '32100-35016',
      },
      {
        first: '18',
        second: '12100-35018',
        third: '32100-35018',
      },
      {
        first: '20',
        second: '12100-35020',
        third: '32100-35020',
      },
      {
        first: '22',
        second: '12100-35022',
        third: '32100-35022',
      },
      {
        first: '24',
        second: '12100-35024',
        third: '32100-35024',
      },
      {
        first: '26',
        second: '12100-35026',
        third: '32100-35026',
      },
      {
        first: '28',
        second: '12100-35028',
        third: '32100-35028',
      },
      {
        first: '30',
        second: '12100-35030',
        third: '32100-35030',
      },
      {
        first: '32',
        second: '12100-35032',
        third: '32100-35032',
      },
      {
        first: '34',
        second: '12100-35034',
        third: '32100-35034',
      },
      {
        first: '36',
        second: '12100-35036',
        third: '32100-35036',
      },
      {
        first: '38',
        second: '12100-35038',
        third: '32100-35038',
      },
      {
        first: '40',
        second: '12100-35040',
        third: '32100-35040',
      },
      {
        first: '45' ,
        second: '12100-35045',
        third: '32100-35045',
      },
      {
        first: '50',
        second: '12100-35050',
        third: '32100-35050',
      },
      {
        first: '55',
        second: '12100-35055',
        third: '32100-35055',
      },
      {
        first: '60',
        second: '12100-35060',
        third: '32100-35060',
      },
      {
        first: '65',
        second: '12100-35065',
        third: '32100-35065',
      },
      {
        first: '70',
        second: '12100-35070',
        third: '32100-35070',
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/screws-thread-stable.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.threadDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.threadDiameterData.3,5mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.coreDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.coreDiameterData.2mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.headDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.headDiameterData.6mm'
            )
          },
          {
            id: 8,
            name: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.threadSpacing'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.threadSpacingData.1,75mm'
            )
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.threadResistantScrews.hexagon'),
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.hexagonData.2,5mm'
            )
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.traumatology.threadResistantScrews.material'),
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.materialData'
            )
          },
          {
            id: 6,
            name: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.spiralDrill'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.spiralDrillData.first'
            )
          },
          {
            id: 6,
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.spiralDrillData.second'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.drillForCarving'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.drillForCarvingData.first'
            )
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.threadResistantScrews.screwdriver'
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
