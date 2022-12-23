<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.smallInsertsWithAngularStability.straightPlateThird'
      )
    "
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
  <!-- Second table -->
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
          'main.carts.traumatology.smallInsertsWithAngularStability.table.third'
        )
      "
      prop="second"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.smallInsertsWithAngularStability.table.fifth'
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
  name: 'StraightPlateThirdGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '45',
        second: '2',
        third: '13600-04502',
        fourth: '33600-04502'
      },
      {
        first: '61',
        second: '3',
        third: '13600-06103',
        fourth: '33600-06103'
      },
      {
        first: '77',
        second: '4',
        third: '13600-07704',
        fourth: '33600-07704'
      },
      {
        first: '93',
        second: '5',
        third: '13600-09305',
        fourth: '33600-09305'
      },
      {
        first: '109',
        second: '6',
        third: '13600-10906',
        fourth: '33600-10906'
      },
      {
        first: '125',
        second: '7',
        third: '13600-12507',
        fourth: '33600-12507'
      },
      {
        first: '141',
        second: '8',
        third: '13600-14108',
        fourth: '33600-14108'
      },
      {
        first: '157',
        second: '9',
        third: '13600-15709',
        fourth: '33600-15709'
      },
      {
        first: '173',
        second: '10',
        third: '13600-17310',
        fourth: '33600-17310'
      },
      {
        first: '189',
        second: '11',
        third: '13600-18911',
        fourth: '33600-18911'
      },
      {
        first: '205',
        second: '12',
        third: '13600-20512',
        fourth: '33600-20512'
      },
      {
        first: '221',
        second: '13',
        third: '13600-22113',
        fourth: '33600-22113'
      },
      {
        first: '237',
        second: '14',
        third: '13600-23714',
        fourth: '33600-23714'
      },
      {
        first: '253',
        second: '15',
        third: '13600-25315',
        fourth: '33600-25315'
      },
      {
        first: '269',
        second: '16',
        third: '13600-26916',
        fourth: '33600-26916'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/straight-plate-third.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.thicknessData.sixth'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.widthData.fourth'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.smallInsertsWithAngularStability.screwDiameterData.third'
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
