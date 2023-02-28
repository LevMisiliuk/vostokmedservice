<template>
  <ProductTableHeader
    :title="
      $t('main.carts.traumatology.insertsWithAngularStability.lockingTPlate')
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
        $t('main.carts.traumatology.insertsWithAngularStability.table.first')
      "
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t('main.carts.traumatology.insertsWithAngularStability.table.third')
      "
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t('main.carts.traumatology.insertsWithAngularStability.table.sixth')
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t('main.carts.traumatology.insertsWithAngularStability.table.fourth')
      "
      prop="fourth"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t('main.carts.traumatology.insertsWithAngularStability.table.fifth')
      "
      prop="fifth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'LockingLButtressPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: ' 85',
        second: '4',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13650-08504',
        fifth: '33650-08504'
      },
      {
        first: ' 117',
        second: '6',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13650-11706',
        fifth: '33650-11706'
      },
      {
        first: '149',
        second: '8',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13650-14908',
        fifth: '33650-14908'
      },
      {
        first: ' 85',
        second: '4',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13651-08504',
        fifth: '33651-08504'
      },
      {
        first: '117',
        second: '6',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13651-11706',
        fifth: '33651-11706'
      },
      {
        first: '149',
        second: '8',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13651-14908',
        fifth: '33651-14908'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-l-buttress-plate.jpeg'),
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

<style lang="scss" scoped></style>
