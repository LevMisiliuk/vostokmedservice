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
  >
    <el-table-column label="Сторона" prop="first" />
    <el-table-column label="Кат № нерж. сталь" prop="second" />
    <el-table-column label="Кат № сплав титану" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PlateLShapedSecond',

  setup() {
    const tableData = computed(() => [
      {
        first: 'Ліва',
        second: '13160-03423',
        third: '33150-03423',
      },
      {
        first: 'Права',
        second: '13161-03423',
        third: '33151-03423',
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/plate-l-shaped-second.jpeg'),
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
