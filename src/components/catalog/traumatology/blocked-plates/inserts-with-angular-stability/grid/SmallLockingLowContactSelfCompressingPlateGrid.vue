<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.insertsWithAngularStability.smallLockingLowContactSelfCompressingPlate'
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
          'main.carts.traumatology.insertsWithAngularStability.table.first'
        )
      "
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.third'
        )
      "
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.fifth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'SmallLockingLowContactSelfCompressingPlateGrid',

  setup () {
    const tableData = computed(() => [
      {
        first: '59',
        second: '4',
        third: ' 13201-05904',
        fourth: '33201-05904'
      },
      {
        first: '72',
        second: '5',
        third: '13201-07205',
        fourth: '33201-07205 '
      },
      {
        first: ' 85',
        second: '6',
        third: '13201-08506',
        fourth: '33201-08506 '
      },
      {
        first: ' 98	 	   	 ',
        second: '7',
        third: '13201-09807 ',
        fourth: '33200-09807'
      },
      {
        first: '111',
        second: '8',
        third: '13200-11108',
        fourth: ' 33200-11108'
      },
      {
        first: '124',
        second: '9',
        third: '13200-12409',
        fourth: '33200-12409'
      },
      {
        first: '137',
        second: '10',
        third: '13200-13710',
        fourth: '33200-13710'
      },
      {
        first: '150',
        second: '11',
        third: '13200-15011',
        fourth: '33200-15011'
      },
      {
        first: '163',
        second: '12',
        third: '13200-16312',
        fourth: '33200-16312'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/small-locking-low-contact-self-compressing-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thicknessData.3,3mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.widthData.11mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.3,5mm-4mmAO'
            )
          },
          {
            id: 4,
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.3,5mm-4mmLocking'
            )
          },
          {
            id: 5,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.materialData'
            )
          },
          {
            id: 6,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.threadStabilizedScrews'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.lockingScrew3,5/1,5'
            ),
            data: '12001-35012 – 35060   4.0/1.5 mm   12001-40012 - 40060'
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.lockingScrew4'
            ),
            data: '12041-40012 - 40060'
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