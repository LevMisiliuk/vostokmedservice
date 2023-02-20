<template>
  <ProductTableHeader
    title="5/8 кільця"
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
      label="Сталь"
      prop="second"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FiveandEightRing',

  setup() {
    const tableData = computed(() => [
      {
        first: '100',
        second: '1.3.100'
      },
      {
        first: '110',
        second: '1.3.110'
      },
      {
        first: '120',
        second: '1.3.120'
      },
      {
        first: '130',
        second: '1.3.130'
      },
      {
        first: '140',
        second: '1.3.140'
      },
      {
        first: '150',
        second: '1.3.150'
      },
      {
        first: '160',
        second: '1.3.160'
      },
      {
        first: '180',
        second: '1.3.180'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/five-and-eight-ring.jpeg'),
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
