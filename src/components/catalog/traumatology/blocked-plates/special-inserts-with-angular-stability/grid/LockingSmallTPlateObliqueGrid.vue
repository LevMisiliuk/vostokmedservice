<template>
  <ProductTableHeader
    :title="
      $t('main.carts.traumatology.specialInsertsWithAngularStability.lockingSmallPlateOblique')
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
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fourth'
        )
      "
      prop="fifth"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fifth'
        )
      "
      prop="sixth"
    />
  </el-table>
</template>

<script>
import i18n from '@/i18n'
import { computed } from 'vue'

export default {
  name: 'LockingSmallTPlateObliqueGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '52',
        second: '3',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: '13220-05233',
        sixth: '33220-05233'
      },
      {
        first: '63',
        second: '3',
        third: '4',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: '13220-06334',
        sixth: '33220-06334'
      },
      {
        first: '74',
        second: '3',
        third: '5',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: '13220-07435',
        sixth: '33220-07435'
      },
      {
        first: '85',
        second: '3',
        third: '6',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: '13220-08536',
        sixth: '33220-08536'
      },
      {
        first: '107',
        second: '3',
        third: '8',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.leftSide'
        ),
        fifth: '13220-10738',
        sixth: '33220-10738'
      },
      {
        first: ' 52',
        second: '3',
        third: '3',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '13221-05233',
        sixth: '33221-05233'
      },
      {
        first: ' 63',
        second: '3',
        third: '4',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '13221-06334',
        sixth: '33221-06334'
      },
      {
        first: ' 74',
        second: '3',
        third: '5',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '13221-07435',
        sixth: '33221-07435'
      },
      {
        first: '85',
        second: '3',
        third: '6',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '13221-08536',
        sixth: '33221-08536'
      },
      {
        first: '107',
        second: '3',
        third: '8',
        fourth: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.rightSide'
        ),
        fifth: '13221-10738',
        sixth: '33221-10738'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-small-t-plate-oblique.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thicknessData.2mm'
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
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.3,5mm-4mmAO'
            )
          },
          {
            id: 4,
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.3,5mm-4mmLocking'
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
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrew'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrew4,5/1,5'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrewData.first'
            )
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
