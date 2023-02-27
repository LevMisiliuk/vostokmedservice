<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.smallInsertsWithAngularStability.straightPlateSecond'
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
          'main.carts.traumatology.smallInsertsWithAngularStability.table.second'
        )
      "
      prop="second"
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
  name: 'StraightPlateSecondGrid',
  setup() {
    const tableData = computed(() => [
      {
        first: '51',
        second: '2',
        third: '4',
        fourth: '13201-05104',
        fifth: '33201-05104'
      },
      {
        first: '64',
        second: '2',
        third: '5',
        fourth: '13201-06405',
        fifth: '33201-06405'
      },
      {
        first: '77',
        second: '2',
        third: '6',
        fourth: '13201-07706',
        fifth: '33201-07706'
      },
      {
        first: '90',
        second: '2,5',
        third: '7',
        fourth: '13201-09007',
        fifth: '33201-09007'
      },
      {
        first: '103',
        second: '2,5',
        third: '8',
        fourth: '13201-10308',
        fifth: '33201-10308'
      },
      {
        first: '116',
        second: '2,5',
        third: '9',
        fourth: '13201-11609',
        fifth: '33201-11609'
      },
      {
        first: '129',
        second: '2,5',
        third: '10',
        fourth: '13201-02910',
        fifth: '33201-0291'
      },
      {
        first: '142',
        second: '2,5',
        third: '11',
        fourth: '13201-14211',
        fifth: '33201-14211'
      },
      {
        first: '155',
        second: '2,5',
        third: '12',
        fourth: '13201-15512',
        fifth: '33201-15512'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/small-inserts-with-angular-stability.jpeg'),
        imageAddition: require('@/assets/traumatology/straight-plate-second.jpeg'),
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
