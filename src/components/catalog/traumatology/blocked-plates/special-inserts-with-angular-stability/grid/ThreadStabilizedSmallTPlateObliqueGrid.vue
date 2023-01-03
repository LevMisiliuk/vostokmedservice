<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.specialInsertsWithAngularStability.threadStabilizedSmallTPlateOblique'
      )
    "
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
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.first'
        )
      "
      prop="first"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.seventh'
        )
      "
      prop="second"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.eights'
        )
      "
      prop="third"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.sixth'
        )
      "
      prop="fourth"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.ninth'
        )
      "
      prop="fifth"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fourth'
        )
      "
      prop="sixth"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fifth'
        )
      "
      prop="seventh"
    />
  </el-table>
</template>

<script>
import i18n from '@/i18n'
import { computed } from 'vue'

export default {
  name: 'ThreadStabilizedSmallTPlateObliqueGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '53',
        second: '3',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13310-05333',
        seventh: '33310-05333'
      },
      {
        first: '60',
        second: '3',
        third: '4',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13310-06034',
        seventh: '33310-06034'
      },
      {
        first: ' 71',
        second: '3',
        third: '5',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13310-07135',
        seventh: '33310-07135'
      },
      {
        first: '82',
        second: '3',
        third: '6',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13310-08236',
        seventh: '33310-08236'
      },
      {
        first: '53',
        second: '3',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13311-05333',
        seventh: '33311-05333'
      },
      {
        first: '60',
        second: '3',
        third: '4',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13311-06034',
        seventh: '33311-06034'
      },
      {
        first: '71',
        second: '3',
        third: '5',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '1.2 mm',
        sixth: '13311-07135',
        seventh: '33311-07135'
      },
      {
        first: '82',
        second: '3',
        third: '6',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13311-08236',
        seventh: '33311-08236'
      },
      {
        first: '53',
        second: '4',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13310-05343',
        seventh: '33310-05343'
      },
      {
        first: '60',
        second: '4',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13310-06044',
        seventh: '33310-06044'
      },
      {
        first: '53',
        second: '4',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13311-05343',
        seventh: '33311-05343'
      },
      {
        first: ' 60',
        second: '4',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: ' 1.2 mm',
        sixth: '13311-06044',
        seventh: '33311-06044'
      },
      {
        first: '53',
        second: '3',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: ' 2.0 mm',
        sixth: '13320-05333',
        seventh: '33320-05333'
      },
      {
        first: '64',
        second: '3',
        third: '4',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: '2.0 mm',
        sixth: '13320-06434',
        seventh: '33320-06434 '
      },
      {
        first: '53',
        second: '3',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '2.0 mm',
        sixth: '13321-05333',
        seventh: '33321-05333'
      },
      // 
      {
        first: '64',
        second: '3',
        third: '4',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '2.0 mm',
        sixth: '13321-06434',
        seventh: '33321-06434'
      },
      {
        first: '53',
        second: '4',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: '2.0 mm',
        sixth: '13320-05343',
        seventh: '33320-05343'
      },
      {
        first: ' 64',
        second: '4',
        third: '4',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: '2.0 mm',
        sixth: '13320-06444',
        seventh: '33320-06444 '
      },
      {
        first: ' 53',
        second: '4',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '2.0 mm',
        sixth: '13321-05343',
        seventh: '33321-05343'
      },
      {
        first: '64',
        second: '4',
        third: '4',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '2.0 mm',
        sixth: '13321-06444',
        seventh: '33321-06444'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/thread-stabilized-small-t-plate-oblique.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thicknessData.1,2mm-2mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.widthData.10mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.3,5mm'
            )
          },
          {
            id: 5,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.materialData'
            )
          },
          {
            id: 6,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.threadStabilizedScrews'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.threadStabilizedScrewsData.3,5mm'
            ),
            data: '12101-35008 - 35070'
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
