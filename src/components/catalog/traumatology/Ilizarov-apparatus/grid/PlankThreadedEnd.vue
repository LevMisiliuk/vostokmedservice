<template>
  <ProductTableHeader
    title="Планка з нарізним кінцем"
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
  name: 'PlankThreadedEnd',

  setup() {
    const tableData = computed(() => [
      {
        first: '135',
        second: '4.2.135'
      },
      {
        first: '175',
        second: '4.2.175'
      },
      {
        first: '215',
        second: '4.2.215'
      },
      {
        first: '255',
        second: '4.2.255'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/plank-threaded-end.jpeg'),
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
