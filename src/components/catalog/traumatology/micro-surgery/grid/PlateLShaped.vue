<template>
  <ProductTableHeader
    title="Пластина Г-подібна"
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
    <el-table-column label="Сторона" prop="first" min-width="140px" />
    <el-table-column label="Кат № нерж. сталь" prop="second" min-width="140px" />
    <el-table-column label="Кат № сплав титану" prop="third" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PlateLShaped',

  setup() {
    const tableData = computed(() => [
      {
        first: 'Ліва',
        second: '13150-03223',
        third: '33140-03223',
      },
      {
        first: 'Права',
        second: '13151-03223',
        third: '33141-03223',
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/plate-l-shaped.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,2 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '7,0 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '2,7 мм'
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
