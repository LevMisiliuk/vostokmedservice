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
      :label="$t('main.carts.traumatology.spongeScrews.table.second')"
      prop="second"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.spongeScrews.table.third')"
      prop="third"
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
        first: '6',
        second: '11000-15006',
        third: '31010-15006',
      },
      {
        first: '7',
        second: '11000-15007',
        third: '31010-15007',
      },
      {
        first: '8',
        second: '11000-15008',
        third: '31010-15008',
      },
      {
        first: '9',
        second: '11000-15009',
        third: '31010-15009',
      },
      {
        first: '10',
        second: '11000-15010',
        third: '31010-15010',
      },
      {
        first: '11',
        second: '11000-15011',
        third: '31010-15011',
      },
      {
        first: '12',
        second: '11000-15012',
        third: '31010-15012',
      },
      {
        first: '14',
        second: '11000-15014',
        third: '31010-15014',
      },
      {
        first: '16',
        second: '11000-15016',
        third: '31010-15016',
      },
      {
        first: '18',
        second: '11000-15018',
        third: '31010-15018',
      },
      {
        first: '20',
        second: '11000-15020',
        third: '31010-15020',
      },
      {
        first: '22',
        second: '11000-15022',
        third: '31010-15022',
      }
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
              'main.carts.traumatology.spongeScrews.hexagonData.1,5mm'
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
