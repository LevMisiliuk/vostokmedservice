<template>
  <ProductTableHeader
    title="Анкерний гвинт 4,0 мм"
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
      :label="$t('main.carts.traumatology.microScrews.table.first')"
      prop="first"
      min-width="140px"
    />
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.third')"
      prop="second"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'AnchorScrew4',

  setup() {
    const tableData = computed(() => [
      {
        first: '8',
        second: '32230-40008'
      },
      {
        first: '10',
        second: '32230-40010'
      },
      {
        first: '12',
        second: '32230-40012'
      },
      {
        first: '14',
        second: '32230-40014'
      },
      {
        first: '16',
        second: '32230-40015'
      },
      {
        first: '18',
        second: '32230-40016'
      },

      {
        first: '20',
        second: '32230-40018'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/anchor-screw-4.jpeg'),
        productsParams: [
          {
            id: 5,
            name: 'Матеріал',
            data: 'сплав титану'
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
