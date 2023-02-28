<template>
  <ProductTableHeader
    :title="$t('main.carts.traumatology.spongeScrews.spongeScrew4mm')"
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
      :label="$t('main.carts.traumatology.spongeScrews.table.first')"
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.second')"
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.third')"
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.fourth')"
      prop="fourth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'SpongeScrew4mm',

  setup() {
    const tableData = computed(() => [
      {
        first: '10',
        second: '11040-40010',
        third: '11050-40010',
        fourth: '31040-40010'
      },
      {
        first: '12',
        second: '11040-40012',
        third: '11050-40012',
        fourth: '31040-40012'
      },
      {
        first: '14',
        second: '11040-40014',
        third: '11050-40014',
        fourth: '31040-40014'
      },
      {
        first: '16',
        second: '11040-40016',
        third: '11050-40016',
        fourth: '31040-40016'
      },
      {
        first: '18',
        second: '11040-40018',
        third: '11050-40018',
        fourth: '31040-40018'
      },
      {
        first: '20',
        second: '11040-40020',
        third: '11050-40020',
        fourth: '31040-40020'
      },
      {
        first: '22',
        second: '11040-40022',
        third: '11050-40022',
        fourth: '31040-40022'
      },
      {
        first: '24',
        second: '11040-40024',
        third: '11050-40024',
        fourth: '31040-40024'
      },
      {
        first: '26',
        second: '11040-40026',
        third: '11050-40026',
        fourth: '31040-40026'
      },
      {
        first: '28',
        second: '11040-40028',
        third: '11050-40028',
        fourth: '31040-40028'
      },
      {
        first: ' 30',
        second: '11040-40030',
        third: '11050-40030',
        fourth: '31040-40030'
      },
      {
        first: '32',
        second: '11040-40032',
        third: '11050-40032',
        fourth: '31040-40032'
      },
      {
        first: '35',
        second: '11040-40035',
        third: '11050-40034',
        fourth: '31040-40035'
      },
      {
        first: '36',
        second: '11040-40036',
        third: '11050-40036',
        fourth: '31040-40036'
      },
      {
        first: '40',
        second: '11040-40040',
        third: '11050-40040',
        fourth: '31040-40040'
      },
      {
        first: '45',
        second: '11040-40045',
        third: '11050-40045',
        fourth: '31040-40045'
      },
      {
        first: ' 50',
        second: '11040-40050',
        third: '11050-40050',
        fourth: '31040-40050'
      },
      {
        first: '55',
        second: '11040-40055',
        third: '11050-40055',
        fourth: '31040-40055'
      },
      {
        first: '60',
        second: '11040-40060',
        third: '11050-40060',
        fourth: '31040-40060'
      },
      {
        first: '65',
        second: '11040-40065',
        third: '11050-40065',
        fourth: '31040-40065'
      },
      {
        first: '70',
        second: '11040-40070',
        third: '11050-40070',
        fourth: '31040-40070'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spongy-screw-4mm.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadDiameterData.4mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.coreDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.coreDiameterData.1,9mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.headDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.headDiameterData.6mm'
            )
          },
          {
            id: 8,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadSpacing'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadSpacingData.1,75mm'
            )
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.spongeScrews.hexagon'),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.hexagonData.2,5mm'
            )
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.traumatology.spongeScrews.material'),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.materialData'
            )
          },
          {
            id: 6,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.spiralDrill'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.spiralDrillData.first'
            )
          },
          {
            id: 6,
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.spiralDrillData.second'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.drillForCarving'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.drillForCarvingData.first'
            )
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.screwdriver'
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
