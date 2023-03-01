<template>
  <ProductTableHeader
    title="Мініпластина Т-подібна для адаптації"
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
  name: 'MiniPlateTShaped',

  setup() {
    const tableData = computed(() => [
      {
        first: '3',
        second: '13120-04738',
        third: '33120-04738',
      },
      {
        first: '4',
        second: '13120-04748',
        third: '33120-04748',
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plate-t-shaped.jpeg'),
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
