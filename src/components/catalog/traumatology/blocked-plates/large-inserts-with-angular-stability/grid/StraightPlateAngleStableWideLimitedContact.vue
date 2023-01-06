<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.largeInsertsWithAngularStability.straightPlatAngleStableWideLimitedContact'
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
  name: 'StraightPlateAngleStableWideLimitedContact',

  setup() {
    const tableData = ref([
      {
        first: ' 95',
        second: '5',
        third: '13610-09505',
        fourth: '33610-09505'
      },
      {
        first: '111',
        second: '6',
        third: '13610-11106',
        fourth: '33610-11106'
      },
      {
        first: '125',
        second: '7',
        third: '13610-12507',
        fourth: '33610-12507'
      },
      {
        first: '141',
        second: '8',
        third: '13610-14108',
        fourth: '33610-14108'
      },
      {
        first: ' 157',
        second: '9',
        third: '13610-15709',
        fourth: '33610-15709'
      },
      {
        first: ' 173',
        second: '10',
        third: '13610-17310',
        fourth: '33610-17310'
      },

      {
        first: '205',
        second: '12',
        third: '13610-20512',
        fourth: '33610-20512'
      },
      {
        first: '237',
        second: '14',
        third: '13610-23714',
        fourth: '33610-23714'
      },
      {
        first: ' 269',
        second: '16',
        third: '13610-26916',
        fourth: '33610-26916'
      },

      {
        first: ' 301',
        second: '18',
        third: '13610-30118',
        fourth: '33610-30118'
      },
      {
        first: '365',
        second: '22',
        third: '13610-36522',
        fourth: '33610-36522'
      },
      {
        first: '429',
        second: '26',
        third: '1361-42926',
        fourth: '33610-42926'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.largeInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/plate-straight-angularly-stable-wide-limited-contact.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.thicknessData.4,8mm'
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
