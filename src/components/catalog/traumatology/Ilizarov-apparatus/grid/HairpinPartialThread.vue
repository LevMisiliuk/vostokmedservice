<template>
  <ProductTableHeader
    title="Шпилька з частковою нарізкою"
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
  name: 'HairpinPartialThread',

  setup() {
    const tableData = computed(() => [
      {
        first: '130',
        second: '2.3.130'
      },
      {
        first: '170',
        second: '2.3.170'
      },
      {
        first: '210',
        second: '2.3.210'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/hair-pin-thread.jpeg'),
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
