<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.largeInsertsWithAngularStability.tShapedPlateAngleStable'
      )
    "
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].image"
  />
  <!-- First table -->
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
          'main.carts.traumatology.largeInsertsWithAngularStability.table.first'
        )
      "
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.third'
        )
      "
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { ref, computed } from 'vue';
import i18n from '@/i18n'

export default {
  name: 'TShapedPlateAngleStable',

  setup() {
    const tableData = ref([
      {
        first: ' 68',
        second: '3',
        third: '13630-06803',
        fourth: '33630-06803'
      },
      {
        first: '84',
        second: '4',
        third: '13630-08404',
        fourth: '33630-08404'
      },
      {
        first: ' 100',
        second: '5',
        third: '13630-10005',
        fourth: '33630-10005'
      },
      {
        first: '116',
        second: '6',
        third: '13630-11606',
        fourth: '33630-11606'
      },
      {
        first: '148',
        second: '8',
        third: '13630-14808',
        fourth: '33630-14808'
      },
      {
        first: '164',
        second: '9',
        third: '13630-16409',
        fourth: '33630-16409'
      },

      {
        first: '180',
        second: '10',
        third: '13630-18010',
        fourth: '33630-18010'
      },
      {
        first: ' 212',
        second: '12',
        third: '13630-21212',
        fourth: '33630-21212'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.largeInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/plate-t-shaped-angularly-stable.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.thicknessData.2mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.widthData.16mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.screwDiameterData.4,5mm'
            )
          },
          {
            id: 4,
            name: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.materialData'
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
