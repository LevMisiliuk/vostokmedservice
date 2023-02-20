<template>
  <ProductTableHeader
    title="Стійка-гайка"
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
      label="O"
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
  name: 'RacNut',

  setup() {
    const tableData = computed(() => [
      {
        first: '2',
        second: '3.1.2'
      },
      {
        first: '3',
        second: '3.1.3'
      },
      {
        first: '4',
        second: '3.1.4'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/rack-nut.jpeg'),
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
