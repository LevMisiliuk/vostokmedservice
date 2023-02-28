<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.largeInsertsWithAngularStability.calfPlateAngleStable'
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
          'main.carts.traumatology.largeInsertsWithAngularStability.table.sixth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.fourth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fifth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { ref, computed } from 'vue';
import i18n from '@/i18n'

export default {
  name: 'CalfPlateAngleStable',

  setup() {
    const tableData = ref([
      {
        first: '168',
        second: '11',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13661-17538',
        fifth: '33661-17538'
      },
      {
        first: '168',
        second: '11',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13660-17538',
        fifth: '33660-17538'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.largeInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/calf-plate-angle-stable.jpeg'),
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
              'main.carts.traumatology.largeInsertsWithAngularStability.widthData.10mm'
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
