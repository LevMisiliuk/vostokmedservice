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
  >
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.first')"
      prop="first"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.fifth')"
      prop="second"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.sixth')"
      prop="third"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.seventh')"
      prop="fourth"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.eights')"
      prop="fifth"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'SpongeScrew6and5mm',

  setup() {
    const tableData = computed(() => [
      {
        first: '14',
        second: '',
        third: '',
        fourth: '11060-65014',
        fifth: ''
      },
      {
        first: '16',
        second: '',
        third: '',
        fourth: '11060-65016',
        fifth: ''
      },
      {
        first: '18',
        second: '',
        third: '',
        fourth: '11060-65018',
        fifth: ''
      },
      {
        first: '20',
        second: '',
        third: '',
        fourth: '11060-65020',
        fifth: ''
      },
      {
        first: '22',
        second: '',
        third: '',
        fourth: '11060-65022',
        fifth: ''
      },
      {
        first: '24',
        second: '',
        third: '',
        fourth: '11060-65024',
        fifth: ''
      },
      {
        first: '25',
        second: '11080-65025',
        third: '',
        fourth: '11060-65025',
        fifth: '31080-65025'
      },
      {
        first: '30',
        second: ' 11080-65030',
        third: '',
        fourth: '11060-65030',
        fifth: '31080-65030'
      },
      {
        first: ' 35',
        second: '11080-65035',
        third: '',
        fourth: '11060-65035',
        fifth: '31080-65035'
      },
      {
        first: '40',
        second: '11080-65040',
        third: '11070-65040',
        fourth: '11060-65040',
        fifth: '31080-65040'
      },
      {
        first: ' 45',
        second: '11080-65045',
        third: '11070-65045',
        fourth: '11060-65045',
        fifth: '31080-65045'
      },
      {
        first: '50',
        second: '11080-65050',
        third: '11070-65050',
        fourth: '11060-65050',
        fifth: '31080-65050'
      },
      {
        first: '55',
        second: '11080-65055',
        third: '11070-65055',
        fourth: '11060-65055',
        fifth: '31080-65055'
      },
      {
        first: '60',
        second: '11080-65060',
        third: '11070-65060',
        fourth: '11060-65060',
        fifth: '31080-65060'
      },
      {
        first: '65',
        second: '11080-65065',
        third: '11070-65065',
        fourth: '11060-65065',
        fifth: '31080-65065'
      },
      {
        first: '70',
        second: '11080-65070',
        third: '11070-65070',
        fourth: '11060-65070',
        fifth: '31080-65070'
      },
      {
        first: ' 75',
        second: '11080-65075',
        third: '11070-65075',
        fourth: '11060-65075',
        fifth: '31080-65075'
      },
      {
        first: '80',
        second: '11080-65080',
        third: '11070-65080',
        fourth: '11060-65080',
        fifth: '31080-65080'
      },
      {
        first: ' 85',
        second: '11080-65085',
        third: '11070-65085',
        fourth: '11060-65085',
        fifth: '31080-65085'
      },
      {
        first: '90',
        second: '11080-65090',
        third: '11070-65090',
        fourth: '11060-65090',
        fifth: '31080-65090'
      },
      {
        first: ' 95',
        second: '11080-65095',
        third: '11070-65095',
        fourth: '11060-65095',
        fifth: '31080-65095'
      },
      {
        first: '100',
        second: '11080-65100',
        third: '11070-65100',
        fourth: '11060-65100',
        fifth: '31080-65100'
      },
      {
        first: '105',
        second: '11080-65105',
        third: '11070-65105',
        fourth: '11060-65105',
        fifth: '31080-65105'
      },
      {
        first: '110',
        second: '11080-65110',
        third: '11070-65110',
        fourth: '11060-65110',
        fifth: '31080-65110'
      },
      {
        first: '115',
        second: '11080-65115',
        third: '11070-65115',
        fourth: '11060-65115',
        fifth: '31080-65115'
      },
      {
        first: '120',
        second: '11080-65120',
        third: '11070-65120',
        fourth: '11060-65120',
        fifth: '31080-65120'
      },
      {
        first: '125',
        second: '11080-65125',
        third: '11070-65125',
        fourth: '11060-65125',
        fifth: '31080-65125'
      },
      {
        first: '130',
        second: '11080-65130',
        third: '11070-65130',
        fourth: '11070-65130',
        fifth: '31080-65130'
      },
      {
        first: '135',
        second: '',
        third: '11070-65135',
        fourth: '',
        fifth: ''
      },
      {
        first: '140',
        second: '',
        third: '',
        fourth: '',
        fifth: ''
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spongy-screw-6and5mm.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadDiameterData.16mm'
            )
          },
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadDiameterData.6,5mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.coreDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.coreDiameterData.3,4mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.headDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.headDiameterData.8mm'
            )
          },
          {
            id: 8,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadSpacing'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.threadSpacingData.2,75mm'
            )
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.spongeScrews.hexagon'),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.hexagonData.3,5mm'
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
              'main.carts.traumatology.spongeScrews.spiralDrillData.third'
            )
          },
          {
            id: 6,
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.spiralDrillData.fourth'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.drillForCarving'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.spongeScrews.drillForCarvingData.second'
            )
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.spongeScrews.screwdriver'
            ),
            data: '99170-35145'
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
