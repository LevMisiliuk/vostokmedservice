<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.specialInsertsWithAngularStability.threadStabilizedSmallTPlate'
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
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fifth'
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
  name: 'ThreadStabilizedSmallTPlateGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '49',
        second: '3+3',
        third: '13300-04933',
        fourth: '33300-04933 '
      },
      {
        first: '60',
        second: '3+4',
        third: '13300-06034',
        fourth: '33300-06034'
      },
      {
        first: '67',
        second: '3+5',
        third: '13300-06735',
        fourth: '33300-06735'
      },
      {
        first: '104',
        second: '3+8',
        third: '13300-10438',
        fourth: '33300-10438'
      },
      {
        first: '49',
        second: '4+3 ',
        third: '13300-04943',
        fourth: '33300-04943'
      },
      {
        first: '60',
        second: '4+4',
        third: '13300-06044',
        fourth: '33300-06044'
      },
      {
        first: '67',
        second: '4+5',
        third: '13300-06745',
        fourth: '33300-06745'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/thread-stabilized-small-t-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thicknessData.1,2mm'
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
