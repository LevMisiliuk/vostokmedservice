<template>
  <ProductTableHeader
    title="Планка сполучна"
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
  name: 'ConnectingBar',

  setup() {
    const tableData = computed(() => [
      {
        first: '35',
        second: '4.1.35'
      },
      {
        first: '45',
        second: '4.1.45'
      },
      {
        first: '55',
        second: '4.1.55'
      },
      {
        first: '65',
        second: '4.1.65'
      },
      {
        first: '75',
        second: '4.1.75'
      },
      {
        first: '85',
        second: '4.1.85'
      },
      {
        first: '95',
        second: '4.1.95'
      },
      {
        first: '105',
        second: '4.1.105'
      },
      {
        first: '115',
        second: '4.1.115'
      },
      {
        first: '135',
        second: '4.1.135'
      },
      {
        first: '155',
        second: '4.1.155'
      },
      {
        first: '175',
        second: '4.1.175'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/connecting-bar.jpeg'),
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
