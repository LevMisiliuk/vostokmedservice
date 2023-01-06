<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.largeInsertsWithAngularStability.reconstructivePlateAngleStable'
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
  name: 'ReconstructivePlateAngleStable',

  setup() {
    const tableData = ref([
      {
        first: '',
        second: '3',
        third: '13620-04503',
        fourth: '33620-04503'
      },
      {
        first: '61',
        second: '4',
        third: '13620-06104',
        fourth: '33620-06104'
      },
      {
        first: ' 77',
        second: '5',
        third: '13620-07705',
        fourth: '33620-07705'
      },
      {
        first: '93',
        second: '6',
        third: '13620-09306 ',
        fourth: '33620-09306'
      },
      {
        first: ' 103',
        second: '7',
        third: '13620-10307',
        fourth: '33620-10307'
      },
      {
        first: ' 125',
        second: '8',
        third: '13620-12508',
        fourth: '33620-12508'
      },

      {
        first: '141',
        second: '9',
        third: '13620-14109',
        fourth: '33620-14109'
      },
      {
        first: ' 157',
        second: '10',
        third: '13620-15710',
        fourth: '33620-15710'
      },
      {
        first: ' 173',
        second: '11',
        third: '13620-17311',
        fourth: '33620-17311'
      },

      {
        first: ' 189',
        second: '12',
        third: '13620-18912',
        fourth: '33620-18912'
      },
      {
        first: '205',
        second: '13',
        third: '13620-20513',
        fourth: '33620-20513'
      },
      {
        first: '221',
        second: '14',
        third: '13620-22114',
        fourth: '33620-22114'
      },
      {
        first: '237',
        second: '15',
        third: '13620-23715',
        fourth: '33620-23715'
      },
      {
        first: '221',
        second: '16',
        third: '13620-25316',
        fourth: '33620-25316'
      },
      {
        first: '237',
        second: '18',
        third: '13620-28518',
        fourth: '33620-28518'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.largeInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/reconstructive-plate-angle-stable.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.thicknessData.3mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.largeInsertsWithAngularStability.widthData.12mm'
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
