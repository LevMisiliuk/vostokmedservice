<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.insertsWithAngularStability.lockingDistalTibiaPlate'
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
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'LockingDistalTibiaPlate',

  setup () {
    const tableData = computed(() => [
      {
        first: '117',
        second: '4',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13270-11704',
        fifth: '33270-11704'
      },
      {
        first: '144',
        second: '6',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13270-14406',
        fifth: '33270-14406'
      },
      {
        first: '171',
        second: '8',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13270-17108',
        fifth: '33270-17108'
      },
      {
        first: '198',
        second: '10',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13270-19810',
        fifth: '33270-19810'
      },

      {
        first: '225',
        second: '12',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: ' 13270-22512',
        fifth: '33270-22512 '
      },
      {
        first: '252',
        second: '14',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.leftSide'
        ),
        fourth: '13270-25214',
        fifth: '33270-25214'
      },
      {
        first: '117',
        second: '4',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13271-11704',
        fifth: '33271-11704 '
      },
      {
        first: ' 144',
        second: '6',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13271-14406',
        fifth: '33271-14406 '
      },
      {
        first: '171',
        second: '8',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13271-17108',
        fifth: '33271-17108 '
      },
      {
        first: ' 198',
        second: '10',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13271-19810',
        fifth: '33271-19810 '
      },
      {
        first: '225',
        second: '12',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13271-22512',
        fifth: '33271-22512'
      },
      {
        first: ' 252',
        second: '14',
        third: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.rightSide'
        ),
        fourth: '13271-25214',
        fifth: '33271-25214'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-distal-tibia-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thicknessData.4mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.widthData.11mm'
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
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.4mmLocking'
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
            data: '12041-40012 - 40060'
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