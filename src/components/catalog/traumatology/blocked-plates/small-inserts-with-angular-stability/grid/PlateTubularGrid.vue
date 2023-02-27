<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.smallInsertsWithAngularStability.plateTubular'
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
    :scrollbar-always-on="true"
  >
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.first'
        )
      "
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.third'
        )
      "
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import i18n from '@/i18n'
import { computed } from 'vue'

export default {
  name: 'PlateTubularGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '25',
        second: '2',
        third: '13240-02502',
        fourth: '33240-02502'
      },
      {
        first: '37',
        second: '3',
        third: '13240-03703',
        fourth: '33240-03703'
      },
      {
        first: '49',
        second: '4',
        third: '13240-04904',
        fourth: '33240-04904'
      },
      {
        first: '61',
        second: '5',
        third: '13240-06105 ',
        fourth: '33240-06105'
      },
      {
        first: '73',
        second: '6',
        third: '13240-07306',
        fourth: '33240-07306'
      },
      {
        first: '85',
        second: '7',
        third: '13240-08507',
        fourth: '33240-08507'
      },
      {
        first: ' 97',
        second: '8',
        third: '13240-09708',
        fourth: '33240-09708'
      },
      {
        first: '109',
        second: '9',
        third: '13240-10909',
        fourth: '33240-10909'
      },
      {
        first: '121',
        second: '10',
        third: '13240-12110',
        fourth: '33240-12110'
      },
      {
        first: '133',
        second: '11',
        third: '13240-13311',
        fourth: '33240-13311'
      },
      {
        first: '145',
        second: '12',
        third: '13240-14512',
        fourth: '33240-14512'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/plate-tubular.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thicknessData.third'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.widthData.second'
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
