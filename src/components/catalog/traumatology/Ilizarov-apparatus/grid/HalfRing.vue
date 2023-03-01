<template>
  <ProductTableHeader
    title="Півкільце"
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
      label="D mm"
      prop="first"
      min-width="140px"
    />
    <el-table-column
      label="Сталь"
      prop="second"
      min-width="140px"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'HalfRing',

  setup() {
    const tableData = computed(() => [
      {
        first: '80',
        second: '1.1.080'
      },
      {
        first: '100',
        second: '1.1.100'
      },
      {
        first: '110',
        second: '1.1.110'
      },
      {
        first: '120',
        second: '1.1.120'
      },
      {
        first: '130',
        second: '1.1.130'
      },
      {
        first: '140',
        second: '1.1.140'
      },
      {
        first: '150',
        second: '1.1.150'
      },
      {
        first: '160',
        second: '1.1.160'
      },
      {
        first: '180',
        second: '1.1.180'
      },
      {
        first: '200',
        second: '1.1.200'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/half-ring.jpeg'),
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
