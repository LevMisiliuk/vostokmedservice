<template>
  <ProductTableHeader
    title="Мініпластина Т-подібна"
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
    <el-table-column label="Кількість отворів" prop="first" min-width="140px" />
    <el-table-column label="Кат № нерж. сталь" prop="second" min-width="140px" />
    <el-table-column label="Кат № сплав титану" prop="third" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'MiniPlateTShapedSecond',

  setup() {
    const tableData = computed(() => [
      {
        first: '4',
        second: '13140-01822',
        third: '33140-01822',
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plate-t-shaped-second.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '5,0 мм'
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
