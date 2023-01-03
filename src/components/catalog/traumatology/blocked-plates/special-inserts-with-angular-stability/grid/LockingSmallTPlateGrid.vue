<template>
  <ProductTableHeader
    :title="
      $t('main.carts.traumatology.specialInsertsWithAngularStability.lockingSmallTPlate')
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
          'main.carts.traumatology.specialInsertsWithAngularStability.table.third'
        )
      "
      prop="second"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fifth'
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
  name: 'LockingSmallTPlateGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '49',
        second: '4   3',
        third: '13210-04943',
        fourth: '33210-04943'
      },
      {
        first: '49',
        second: '3   3',
        third: '13210-04933',
        fourth: '33210-04933'
      },
      {
        first: ' 60 ',
        second: '4   4',
        third: '13210-06044',
        fourth: '33210-05044'
      },
      {
        first: ' 60',
        second: '3   4',
        third: '13210-06034',
        fourth: '33210-06034'
      },
      {
        first: '67',
        second: '3   5',
        third: '13210-06735',
        fourth: '33210-06735'
      },
      {
        first: ' 67',
        second: '4   5',
        third: '13210-06745',
        fourth: '33210-06745'
      },
      {
        first: '78',
        second: '4   6',
        third: '13210-07846',
        fourth: '33210-07846'
      },
      {
        first: ' 78',
        second: '3   6',
        third: '13210-07836',
        fourth: '33210-07836'
      },
      {
        first: '95',
        second: '3   8',
        third: '13210-09538',
        fourth: '33210-09538'
      },
      {
        first: '95',
        second: '4   8',
        third: '13210-09548',
        fourth: '33210-09548'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-small-plate.jpeg'),
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
