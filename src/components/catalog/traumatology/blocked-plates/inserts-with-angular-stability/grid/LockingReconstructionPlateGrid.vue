<template>
  <ProductTableHeader
    :title="
      $t(
        'main.carts.traumatology.insertsWithAngularStability.lockingReconstructionPlate'
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
          'main.carts.traumatology.insertsWithAngularStability.table.first'
        )
      "
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.third'
        )
      "
      prop="second"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.fourth'
        )
      "
      prop="third"
      min-width="140px"
    />
    <el-table-column
      :label="
        $t(
          'main.carts.traumatology.insertsWithAngularStability.table.fifth'
        )
      "
      prop="fourth"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'LockingReconstructionPlateGrid',

  setup () {
    const tableData = computed(() => [
      {
        first: ' 34',
        second: '3',
        third: ' 13230-03403',
        fourth: '33230-03403'
      },
      {
        first: ' 46',
        second: '4',
        third: ' 13230-04604',
        fourth: '33230-04604'
      },
      {
        first: ' 58',
        second: '5',
        third: '13230-05805',
        fourth: '33230-05805 '
      },
      {
        first: ' 70',
        second: '6',
        third: '13230-07006',
        fourth: '33230-07006'
      },
      {
        first: ' 82',
        second: '7',
        third: '13230-08207',
        fourth: ' 33230-08207 '
      },
      {
        first: ' 94',
        second: '8',
        third: '13230-09408',
        fourth: '33230-09408'
      },
      {
        first: ' 106',
        second: '9',
        third: '13230-10609',
        fourth: '33230-10609'
      },
      {
        first: ' 118',
        second: '10',
        third: '13230-11810',
        fourth: '33230-11810'
      },
      {
        first: '142',
        second: '12',
        third: '13230-14212',
        fourth: '33230-14212 '
      },
      {
        first: '166',
        second: '14',
        third: '13230-16614',
        fourth: '33230-16614'
      },
      {
        first: ' 190',
        second: '16',
        third: '13230-19016',
        fourth: '33230-19016'
      },
      {
        first: '214',
        second: '18',
        third: '13230-21418 ',
        fourth: '33230-21418 '
      },
      {
        first: ' 238',
        second: '20',
        third: '13230-23820',
        fourth: '33230-23820'
      },
      {
        first: ' 262',
        second: '22',
        third: '13230-26222',
        fourth: '33230-26222'
      },
      {
        first: '286',
        second: '24',
        third: '13230-28624 ',
        fourth: ' 33230-28624 '
      },
      {
        first: '310',
        second: '26',
        third: '13230-31026 ',
        fourth: '33230-31026 '
      },
      {
        first: ' 334',
        second: '28',
        third: '13230-33428',
        fourth: '33230-33428 '
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/locking-reconstruction-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thickness'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.thicknessData.2mm'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.width'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.widthData.10mm'
            )
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameter'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.3,5mm-4mmAO'
            )
          },
          {
            id: 4,
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.screwDiameterData.3,5mm-4mmLocking'
            )
          },
          {
            id: 5,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.materialData'
            )
          },
          {
            id: 6,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.threadStabilizedScrews'
            )
          },
          {
            id: 7,
            name: i18n.global.t(
              'main.carts.traumatology.insertsWithAngularStability.lockingScrew3,5/1,5'
            ),
            data: '12001-40012 – 40060   3.5/1.5 mm   12001-35012 – 35060'
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