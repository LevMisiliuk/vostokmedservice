<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.specialInsertsWithAngularStability.lockingDistalMedialHumeralPlate'
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
  name: 'LockingDistalMedialHumerusPlateGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '80',
        second: '7',
        third: '13251-08007',
        fourth: '33251-08007 '
      },
      {
        first: '106',
        second: '9',
        third: '13251-10609',
        fourth: '33251-10609'
      },
      {
        first: '132',
        second: '11',
        third: '13251-13211',
        fourth: '33251-13211'
      },
      {
        first: '158',
        second: '13',
        third: '13251-15813',
        fourth: '33251-15813'
      },
      {
        first: '184',
        second: '15',
        third: '13251-18415',
        fourth: '33251-18415'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-distal-medial-humeral-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thicknessData.3,5mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.widthData.11,5mm'
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
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.3,5mmCortical'
            )
          },
          {
            id: 5,
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.4,5mmCancellous'
            )
          },
          {
            id: 6,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.materialData'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrew'
            )
          },
          {
            id: 8,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrew3,5/1,5'
            ),
            data: '12001-35012 - 35060'
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrew4/1,5'
            ),
            data: '12001-40012 - 40060'
          },
          {
            id: 10,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.lockingScrew4'
            ),
            data: '12041-40012 - 40060 '
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
