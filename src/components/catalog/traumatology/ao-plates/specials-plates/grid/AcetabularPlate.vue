<template>
  <ProductTableHeader
    title="Пластина для вертлужної западини"
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
  <el-table-column label="L, мм" prop="first" min-width="140px" />
    <el-table-column label="Кат. № нерж. сталь" prop="second" min-width="140px" />
    <el-table-column label="Кат. № сплав титану" prop="third" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'AcetabularPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '25',
        second: '13893-25005',
        third: '33893-25005'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/acetabular-plate.jpeg')
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
