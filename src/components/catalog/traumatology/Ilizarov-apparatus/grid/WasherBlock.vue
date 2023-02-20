<template>
  <ProductTableHeader
    title="Шайба"
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
  name: 'ScrewBlock',

  setup() {
    const tableData = computed(() => [
      {
        first: '1.5',
        second: '5.3.1.5'
      },
      {
        first: '2',
        second: '5.3.2.0'
      },
      {
        first: '4',
        second: '5.3.4.0'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/washer.jpeg'),
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
