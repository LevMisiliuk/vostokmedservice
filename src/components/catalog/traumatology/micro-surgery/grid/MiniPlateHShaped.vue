<template>
  <ProductTableHeader
    title="Мініпластина Н-подібна"
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
    <el-table-column label="Діаметр гвинта, мм" prop="first" />
    <el-table-column label="Кат № нерж. сталь" prop="second" />
    <el-table-column label="Кат № сплав титану" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'MiniPlateHShaped',

  setup() {
    const tableData = computed(() => [
      {
        first: '1,5',
        second: '13170-01104',
        third: '33170-01104',
      },
      {
        first: '2,0',
        second: '13171-01104',
        third: '33171-01104',
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plate-h-shaped.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,0 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '2,0 мм'
          },
          {
            id: 4,
            name: 'Матеріал',
            data: 'нерж. сталь або сплав титану'
          }
        ]
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
