<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.largeInsertsWithAngularStability.supportPlateTShapedAngleStable'
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
  >
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.first'
        )
      "
      prop="first"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.third'
        )
      "
      prop="second"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fourth"
    />
  </el-table>
</template>

<script>
import { ref, computed } from 'vue';
import i18n from '@/i18n'

export default {
  name: 'SupportPlateTShapedAngleStable',

  setup() {
    const tableData = ref([
      {
        first: '68',
        second: '3',
        third: '13640-08404',
        fourth: '33640-08404'
      },
      {
        first: '84',
        second: '4',
        third: '13640-10005',
        fourth: '33640-10005'
      },
      {
        first: '100',
        second: '5',
        third: '13640-06803',
        fourth: '33640-06803'
      },
      {
        first: '116',
        second: '6',
        third: '13640-11606',
        fourth: '33640-11606'
      },
      {
        first: '148',
        second: '8',
        third: '13640-14808',
        fourth: '33640-14808'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.largeInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/support-plate-t-shaped-angularly-stable.jpeg'),
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
