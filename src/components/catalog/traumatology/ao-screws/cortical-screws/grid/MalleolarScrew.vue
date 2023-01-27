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
      :label="$t('main.carts.traumatology.corticalScrews.table.fourth')"
      prop="second"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.corticalScrews.table.second')"
      prop="third"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.corticalScrews.table.third')"
      prop="fourth"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'MalleolarScrew',

  setup() {
    const tableData = computed(() => [
      {
        first: '25',
        second: '12,5 мм',
        third: '11030-45025',
        fourth: '31030-45025'
      },
      {
        first: '30',
        second: '15,0 мм',
        third: '11030-45030',
        fourth: '31030-45030'
      },
      {
        first: '35',
        second: '17,5 мм',
        third: '11030-45035',
        fourth: '31030-45035'
      },
      {
        first: '40',
        second: '20,0 мм',
        third: '11030-45040',
        fourth: '31030-45040'
      },
      {
        first: '45',
        second: '22,5 мм',
        third: '11030-45045',
        fourth: '31030-45045'
      },
      {
        first: '50',
        second: '25,0 мм',
        third: '11030-45050',
        fourth: '31030-45050'
      },
      {
        first: '55',
        second: '27,5 мм',
        third: '11030-45055',
        fourth: '31030-45055'
      },
      {
        first: '60',
        second: '30,0 мм',
        third: '11030-45060',
        fourth: '31030-45060'
      },

      {
        first: '65',
        second: '32,5 мм',
        third: '11030-45065',
        fourth: '31030-45065'
      },
      {
        first: '70',
        second: '35,0 мм',
        third: '11030-45070',
        fourth: '31030-45070'
      },
      {
        first: '75',
        second: '37,5 мм',
        third: '11030-45075',
        fourth: '31030-45075'
      },
      {
        first: '80',
        second: '40,0 мм',
        third: '11030-45080',
        fourth: '31030-45080'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/malleolar-screw.jpeg'),
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
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.corticalScrews.headDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.corticalScrews.headDiameterData.8mm'
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
