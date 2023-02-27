<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.smallInsertsWithAngularStability.smallPlateTShaped'
      )
    "
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
  <!-- Third table -->
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
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.third'
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
import { computed } from 'vue';
import i18n from '@/i18n'

export default {
  name: 'SmallPlateTShapedGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '49',
        second: '3',
        third: '3',
        fourth: '13210-04933',
        fifth: '33210-04933'
      },
      {
        first: '60',
        second: '3',
        third: '4',
        fourth: '13210-06034',
        fifth: '33210-06034'
      },
      {
        first: '67',
        second: '3',
        third: '5',
        fourth: '13210-06735',
        fifth: '33210-06735'
      },
      {
        first: '56',
        second: '4',
        third: '4',
        fourth: '13210-05644',
        fifth: '33210-05644'
      },
      {
        first: '67',
        second: '4',
        third: '5',
        fourth: '13210-06745',
        fifth: '33210-06745'
      },
      {
        first: '45',
        second: '4',
        third: '3',
        fourth: '13210-04543',
        fifth: '33210-04543'
      },
      {
        first: ' 78',
        second: '4',
        third: '6',
        fourth: '13210-07846',
        fifth: '33210-07846'
      },
      {
        first: ' 53',
        second: '3',
        third: '3',
        fourth: '13220-05333',
        fifth: '33220-05333'
      },
      {
        first: '53',
        second: '3',
        third: '3',
        fourth: '13221-05333',
        fifth: '33221-05333'
      },
      {
        first: '60',
        second: '3',
        third: '4',
        fourth: '13220-06034',
        fifth: '33220-06034'
      },
      {
        first: '60',
        second: '3',
        third: '4',
        fourth: '13221-06034',
        fifth: '33221-06034'
      },
      {
        first: '71\t \t \t  \t ',
        second: '3',
        third: '5',
        fourth: '13220-07135',
        fifth: '33220-07135'
      },
      {
        first: '71',
        second: '3',
        third: '5',
        fourth: '13221-07135',
        fifth: '33221-07135'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/small-plate-t-shaped.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thicknessData.second'
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
