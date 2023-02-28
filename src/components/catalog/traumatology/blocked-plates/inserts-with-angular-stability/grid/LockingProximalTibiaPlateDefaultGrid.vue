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
          'main.carts.traumatology.insertsWithAngularStability.table.sixth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.fourth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.fifth'
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
  name: 'LockingProximalTibiaPlateDefaultGrid',
  setup () {
    const tableData = computed(() => [
      {
        first: '156',
        second: '5',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13681-15605',
        fifth: '33681-15605'
      },
      {
        first: '196',
        second: '7',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13681-19607',
        fifth: '33681-19607'
      },
      {
        first: '236',
        second: '9',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13681-23609',
        fifth: '33681-23609'
      },
      {
        first: '276',
        second: '11',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13681-27611',
        fifth: '33681-27611'
      },
      {
        first: ' 316',
        second: '13',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: ' 13681-31613',
        fifth: '33681-31613 '
      },
      {
        first: '156',
        second: '5',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13680-15605',
        fifth: '33680-15605'
      },
      {
        first: '196',
        second: '7',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13680-19607',
        fifth: '33680-19607'
      },
      {
        first: '236',
        second: '9',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13680-23609',
        fifth: '33680-23609'
      },
      {
        first: ' 276',
        second: '11',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13680-27611',
        fifth: '33680-27611'
      },
      {
        first: '316',
        second: '13',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13680-31613',
        fifth: '33680-31613'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-proximal-tibia-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thicknessData.6mm'
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
            id: 4,
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.5,0mm-6,5mmLocking'
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
            data: '12001-50012 – 50090'
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.lockingScrew6,5/26mm'
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