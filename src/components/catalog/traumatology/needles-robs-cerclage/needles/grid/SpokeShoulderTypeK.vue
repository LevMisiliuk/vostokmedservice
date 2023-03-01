<template>
  <ProductTableHeader
    title="Спиця плечова з різьбленням – тип К"
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
    <el-table-column label="Категорія №" prop="first" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeShoulderTypeK',

  setup() {
    const tableData = computed(() => [
      {
        first: '15030-27300'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spoke-shoulder-type-k.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Матеріал',
            data: 'нерж. сталь'
          },
          {
            id: 2,
            name: 'Діаметр різьблення',
            data: '2,7 мм кортикальний'
          },
          {
            id: 3,
            name: 'Діаметр стержня',
            data: '3 мм '
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
