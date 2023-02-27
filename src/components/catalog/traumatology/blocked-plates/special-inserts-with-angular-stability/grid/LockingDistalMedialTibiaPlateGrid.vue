<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.specialInsertsWithAngularStability.lockingDistalMedialTibiaPlate'
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
          'main.carts.traumatology.specialInsertsWithAngularStability.table.first'
        )
      "
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.third'
        )
      "
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.specialInsertsWithAngularStability.table.fifth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import i18n from '@/i18n'
import { computed } from 'vue'

export default {
  name: 'LockingDistalMedialTibiaPlateGrid',
  setup () {
    const tableData = computed(() => [
      {
        first: '118',
        second: '3/4',
        third: '13720-11807',
        fourth: '33720-11807',
      },
      {
        first: '136',
        second: '4/4',
        third: '13720-13608',
        fourth: '33720-13608',
      },
      {
        first: '154',
        second: '5/4',
        third: '13720-15409',
        fourth: '33720-15409 ',
      },
      {
        first: '172',
        second: '6/4',
        third: '13720-17210',
        fourth: '33720-17210',
      },
      {
        first: '208',
        second: '8/4',
        third: '13720-20812',
        fourth: '33720-20812',
      },
      {
        first: ' 226',
        second: '9/4',
        third: '13720-22613',
        fourth: '33720-22613',
      },
      {
        first: '262',
        second: '11/4',
        third: '13720-26215',
        fourth: '33720-26215',
      },
      {
        first: '298	 	  	  ',
        second: '13/4',
        third: '13720-29817',
        fourth: '33720-29817',
      },
      {
        first: '334',
        second: '15/4 ',
        third: '13720-33419',
        fourth: '33720-33419',
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-distal-medial-tibia-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.thicknessData.4mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.widthData.11,5mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.3,5mm-4,5mmAO'
            )
          },
          {
            id: 4,
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.screwDiameterData.4mm-5mmLocking'
            )
          },
          {
            id: 5,
            name: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.specialInsertsWithAngularStability.materialData'
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