<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.smallInsertsWithAngularStability.straightPlate'
      )
    "
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
  <!-- First table -->
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
          'main.carts.traumatology.smallInsertsWithAngularStability.table.second'
        )
      "
      prop="second"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.third'
        )
      "
      prop="third"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fourth'
        )
      "
      prop="fourth"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fifth"
    />
  </el-table>
</template>

<script>
import { ref, computed } from 'vue';
import i18n from '@/i18n'

export default {
  name: 'StraightPlateGrid',
  setup() {
    const tableData = ref([
      {
        first: '31',
        second: '2',
        third: '2',
        fourth: '13200-03102',
        fifth: '33200-03102'
      },
      {
        first: '43',
        second: '2',
        third: '3',
        fourth: '13200-04303',
        fifth: '33200-04303'
      },
      {
        first: '55',
        second: '2',
        third: '3',
        fourth: '13200-05504',
        fifth: '33200-05504'
      },
      {
        first: '67',
        second: '2',
        third: '5',
        fourth: '13200-06705',
        fifth: '33200-06705'
      },
      {
        first: '79',
        second: '2',
        third: '6',
        fourth: '13200-07906',
        fifth: '33200-07906'
      },
      {
        first: '91',
        second: '2,5',
        third: '7',
        fourth: '13200-09107',
        fifth: '33200-09107'
      },
      {
        first: '103',
        second: '2,5',
        third: '8',
        fourth: '13200-10308',
        fifth: ' 33200-10308'
      },
      {
        first: '115',
        second: '2,5',
        third: '9',
        fourth: '13200-11509',
        fifth: '33200-11509'
      },
      {
        first: '127',
        second: '2,5',
        third: '10',
        fourth: '13200-12710',
        fifth: '33200-12710'
      },
      {
        first: '151',
        second: '2,5',
        third: '11',
        fourth: '13200-15112',
        fifth: '33200-15112'
      },
      {
        first: '175',
        second: '2,5',
        third: '12',
        fourth: '13200-17514',
        fifth: '33200-17514'
      },
      {
        first: '199',
        second: '2,5',
        third: '13',
        fourth: '13200-19916',
        fifth: '33200-19916'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/small-inserts-with-angular-stability.jpeg'),
        imageAddition: require('@/assets/traumatology/straight-plate.jpeg'),
        imageAdditionSecond: require('@/assets/traumatology/straight-plate-second.jpeg'),
        imageAdditionThird: require('@/assets/traumatology/small-plate-t-shaped.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thicknessData.first'
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
