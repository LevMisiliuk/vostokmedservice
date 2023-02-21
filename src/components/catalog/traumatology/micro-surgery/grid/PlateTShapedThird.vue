<template>
  <ProductTableHeader
    title="Пластина Т-подібна"
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
    <el-table-column label="Кількість отворів" prop="first" />
    <el-table-column label="Кат № нерж. сталь" prop="second" />
    <el-table-column label="Кат № сплав титану" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PlateTShapedThird',

  setup() {
    const tableData = computed(() => [
      {
        first: '4',
        second: '13140-03223',
        third: '33140-03223',
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plate-t-shaped-third.jpeg'),
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
