<template>
  <ProductTableHeader
    title="Шпилька"
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
  name: 'HairpinBlock',

  setup() {
    const tableData = computed(() => [
      {
        first: '60',
        second: '2.1.60'
      },
      {
        first: '80',
        second: '2.1.80'
      },
      {
        first: '100',
        second: '2.1.100'
      },
      {
        first: '120',
        second: '2.1.120'
      },
      {
        first: '150	',
        second: '2.1.150'
      },
      {
        first: '200',
        second: '2.1.200'
      },
      {
        first: '250',
        second: '2.1.250'
      },
      {
        first: '300',
        second: '2.1.300'
      },
      {
        first: '350',
        second: '2.1.350'
      },
      {
        first: '400',
        second: '2.1.400'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/hairpin.jpeg'),
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
