<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.insertsWithAngularStability.lockingProximalHumeralPlate'
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
  >
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.first'
        )
      "
      prop="first"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.third'
        )
      "
      prop="second"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.fifth'
        )
      "
      prop="fourth"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'LockingProximalHumeralPlateGrid',

  setup () {
    const tableData = computed(() => [
      {
        first: '90',
        second: '3',
        third: ' 13250-09003',
        fourth: '33250-09003'
      },
      {
        first: '104',
        second: '4',
        third: ' 13250-10404',
        fourth: '33250-10404'
      },
      {
        first: '116',
        second: '5',
        third: '13250-11605',
        fourth: '33250-11605  '
      },
      {
        first: '128',
        second: '6',
        third: ' 13250-12806',
        fourth: '33250-12806'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-proximal-humeral-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thicknessData.3mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.widthData.12mm'
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
            id: 8,
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.3,5mmCortical'
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
            data: '12001-35012 - 35060'
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.lockingScrew4/1,5'
            ),
            data: '12001-40012 - 40060'
          },
          {
            id: 9,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.lockingScrew4,5/1,5'
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

<style lang="scss" scoped>

</style>