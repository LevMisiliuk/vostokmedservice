<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.specialInsertsWithAngularStability.lockingProximalTibiaPlate'
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
    :scrollbar-always-on="true"
  >
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.first'
        )
      "
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.third'
        )
      "
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.sixth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fourth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fifth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import i18n from '@/i18n'
import { computed } from 'vue'

export default {
  name: 'LockingProximalTibiaPlateGrid',
  setup () {
    const tableData = computed(() => [
      {
        first: '140',
        second: '5',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fourth: '13691-14005',
        fifth: '33691-14005'
      },
      {
        first: '180',
        second: '7',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fourth: ' 13691-18007',
        fifth: '33691-18007'
      },
      {
        first: ' 220',
        second: '9',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fourth: '13691-22009 ',
        fifth: '33691-22009'
      },
      {
        first: '260',
        second: '11',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fourth: '13691-26011',
        fifth: '33691-26011'
      },
      {
        first: '300',
        second: '13',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fourth: '13691-30013',
        fifth: '33691-30013 '
      },
      {
        first: '140',
        second: '5',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fourth: '13690-14005',
        fifth: '33690-14005'
      },
      {
        first: '180',
        second: '7',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fourth: '13690-18007',
        fifth: '33690-18007'
      },
      {
        first: '220',
        second: '9',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fourth: '13690-22009',
        fifth: '33690-22009'
      },
      {
        first: '260',
        second: '11',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fourth: '13690-26011',
        fifth: '33690-26011'
      },
      {
        first: '300',
        second: '13',
        third: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fourth: '13690-30013',
        fifth: '33690-30013'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-proximal-tibia-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thicknessData.4mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.widthData.12,8mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.4,5mmCortical'
            )
          },
          {
            id: 4,
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.5,0mm-6,5mmLocking'
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
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrew5,0/2,0mm'
            ),
            data: '12001-50012 – 50090'
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrew6,5/26mm'
            ),
            data: '12061-65020 - 65090 '
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

<style lang="scss" scoped>

</style>