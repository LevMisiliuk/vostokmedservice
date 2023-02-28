<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.insertsWithAngularStability.lockingTPlate'
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
  name: 'LockingTButtressPlate',

  setup () {
    const tableData = computed(() => [
      {
        first: '68',
        second: '3',
        third: '13640-06803',
        fourth: '33640-06803 '
      },
      {
        first: ' 83',
        second: '4',
        third: '13640-08304',
        fourth: '33640-08304'
      },

      {
        first: '98',
        second: '5',
        third: '13640-09805',
        fourth: '33640-09805 '
      },
      {
        first: ' 114',
        second: '6',
        third: ' 13640-11406',
        fourth: '33640-11406'
      },
      {
        first: '146',
        second: '8',
        third: '13640-14608',
        fourth: '33640-14608'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-t-buttress-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thicknessData.2,5mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.widthData.16mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.4,5mmCortical'
            )
          },
          {
            id: 8,
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.5mmLocking'
            )
          },
          {
            id: 4,
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.6,5mmLocking'
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
              'main.carts.traumatology.insertsWithAngularStability.lockingScrew5,0/2,0mm'
            ),
            data: '12001-50012 - 50090'
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.lockingScrew6,5/2,6mm'
            ),
            data: '12061-65020 - 65090'
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