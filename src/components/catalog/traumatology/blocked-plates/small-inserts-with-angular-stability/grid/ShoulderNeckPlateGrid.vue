<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.smallInsertsWithAngularStability.shoulderNeckPlate'
      )
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
          'main.carts.traumatology.smallInsertsWithAngularStability.table.first'
        )
      "
      prop="first"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.third'
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
  name: 'ShoulderNeckPlateGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '90',
        second: '3',
        third: '13250-09003',
        fourth: '33250-09003'
      },
      {
        first: '116',
        second: '5',
        third: '13250-11605',
        fourth: '33250-11605'
      },
      {
        first: '104',
        second: '4',
        third: '1325-10404',
        fourth: '33250-10404'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/shoulder-neck-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thicknessData.fourth'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.widthData.third'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.screwDiameterData.first'
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
