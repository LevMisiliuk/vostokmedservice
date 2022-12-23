<template>
  <ProductTableHeader
    :title="
      $t('main.carts.traumatology.smallInsertsWithAngularStability.hookPlate')
    "
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
  <!-- Fourth table -->
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
          'main.carts.traumatology.smallInsertsWithAngularStability.table.third'
        )
      "
      prop="first"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.sixth'
        )
      "
      prop="second"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fourth"
    />
  </el-table>
</template>

<script>
import i18n from '@/i18n'
import { computed } from 'vue'

export default {
  name: 'HookPlateGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '6',
        second: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        third: '13500-01506',
        fourth: '33500-01506'
      },
      {
        first: '6',
        second: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        third: '13500-01806',
        fourth: '33500-01806'
      },
      {
        first: '8',
        second: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        third: '13500-01508',
        fourth: '33500-01508'
      },
      {
        first: '8',
        second: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        third: '13500-01808',
        fourth: '33500-01808'
      },
      {
        first: '6',
        second: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        third: '13501-01506',
        fourth: '33501-01506'
      },
      {
        first: '6',
        second: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        third: '13501-01806',
        fourth: '33501-01806'
      },
      {
        first: '8',
        second: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        third: '13501-01508',
        fourth: '33501-01508'
      },
      {
        first: '8',
        second: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        third: '13501-01808',
        fourth: '3350-01808'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/hook-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thicknessData.fifth'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.widthData.first'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.screwDiameterData.second'
            )
          },
          {
            id: 4,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.materialData'
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
