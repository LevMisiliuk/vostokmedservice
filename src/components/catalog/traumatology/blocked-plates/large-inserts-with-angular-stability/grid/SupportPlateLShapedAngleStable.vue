<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.largeInsertsWithAngularStability.supportPlateLShapedAngleStable'
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
          'main.carts.traumatology.largeInsertsWithAngularStability.table.sixth'
        )
      "
      prop="third"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.fourth'
        )
      "
      prop="fourth"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.largeInsertsWithAngularStability.table.fifth'
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
  name: 'SupportPlateLShapedAngleStable',

  setup() {
    const tableData = ref([
      {
        first: '90',
        second: '4',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13650-09004',
        fifth: '33650-09004'
      },
      {
        first: '122',
        second: '6',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13650-12206',
        fifth: '33650-12206'
      },
      {
        first: '154',
        second: '8',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.leftSide'
        ),
        fourth: '13650-15408',
        fifth: '33650-15408'
      },
      {
        first: ' 90',
        second: '4',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13651-09004',
        fifth: '33651-09004'
      },
      {
        first: '122',
        second: '6',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13651-12206',
        fifth: '33651-12206'
      },
      {
        first: '154',
        second: '8',
        third: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.rightSide'
        ),
        fourth: '13651-15408',
        fifth: '33651-15408'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.largeInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/support-plate-is-l-shaped-angularly-stable.jpeg'),
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
