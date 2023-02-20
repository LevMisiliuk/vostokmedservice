<template>
  <ProductTableHeader
    title="Штанга несуча"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
  <el-table
    border
    style="width: 100%; margin-bottom: 20px"
    :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
    :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
    :data="tableData"
  >
    <el-table-column
      label="D mm"
      prop="first"
    />
    <el-table-column
      label="Ø mm"
      prop="second"
    />
    <el-table-column
      label="Сталь"
      prop="third"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CarrierBar',

  setup() {
    const tableData = computed(() => [
      {
        first: '150',
        second: '12',
        third: '5.158.6.150'
      },
      {
        first: '200',
        second: '12',
        third: '5.158.6.200'
      },
      {
        first: ' 250',
        second: '12',
        third: '5.158.6.250'
      },
      {
        first: '300',
        second: '12',
        third: '5.158.6.300'
      },
      {
        first: ' 350',
        second: '12',
        third: '5.158.6.350'
      },
      {
        first: '400',
        second: '12',
        third: '5.158.6.400'
      },
      {
        first: '450',
        second: '12',
        third: '5.158.6.450'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/carrier-bar.jpeg'),
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
