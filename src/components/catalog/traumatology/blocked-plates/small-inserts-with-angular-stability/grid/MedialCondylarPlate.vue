<template>
<ProductTableHeader
    :title="
      $t('main.carts.traumatology.smallInsertsWithAngularStability.medialCondylarPlate')
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
          'main.carts.traumatology.smallInsertsWithAngularStability.table.third'
        )
      "
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.first'
        )
      "
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.sixth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fourth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fifth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import i18n from '@/i18n'
import { computed } from 'vue'

export default {
  name: 'MedialCondylarPlate',
  setup () {
    const tableData = computed(() => [
      {
        first: '4',
        second: '117',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13270-11704',
        fifth: '33270-11704'
      },
      {
        first: '6',
        second: '144',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13270-14406',
        fifth: '33270-14406'
      },
      {
        first: '8',
        second: '171',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13270-17108',
        fifth: '33270-17108'
      },
      {
        first: '10',
        second: '198',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13270-19810',
        fifth: '33270-19810'
      },
      {
        first: ' 12',
        second: '225',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13270-22512',
        fifth: '33270-22512'
      },
      {
        first: '14',
        second: '252',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13270-25214',
        fifth: '33270-25214'
      },
      {
        first: '4',
        second: '117',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13271-11704',
        fifth: '33271-11704'
      },
      {
        first: ' 6',
        second: '144',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13271-14406',
        fifth: '33271-14406'
      },
      {
        first: '8',
        second: '171',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13271-17108',
        fifth: '33271-17108'
      },
      {
        first: '10',
        second: '198',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13271-19810',
        fifth: '33271-19810'
      },
      {
        first: '12',
        second: '225',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13271-22512',
        fifth: '33271-22512'
      },
      {
        first: '14',
        second: '252',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13271-25214',
        fifth: '33271-25214'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/medial-condylar-plate.jpeg'),
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

<style lang="scss" scoped>

</style>