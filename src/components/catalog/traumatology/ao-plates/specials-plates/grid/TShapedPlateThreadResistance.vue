<template>
  <ProductTableHeader
    title="Пластина Т-подібна, різьбостабільна"
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
    <el-table-column label="L, мм" prop="second" />
    <el-table-column label="Кат. № нерж. сталь" prop="third" />
    <el-table-column label="Кат. № сплав титану" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TShapedPlateThreadResistance',

  setup() {
    const tableData = computed(() => [
      {
        first: '3+3',
        second: '49',
        third: '13300-04933',
        fourth: '33300-04933'
      },
      {
        first: '3+4',
        second: '60',
        third: '13300-06034',
        fourth: '33300-06034'
      },
      {
        first: '3+5',
        second: '67',
        third: '13300-06735',
        fourth: '33300-06735'
      },
      {
        first: '3+8',
        second: '104',
        third: '13300-10438',
        fourth: '33300-10438'
      },
      {
        first: '4+3',
        second: '49',
        third: '13300-04943',
        fourth: '33300-04943'
      },
      {
        first: '4+4',
        second: '60',
        third: '13300-06044',
        fourth: '33300-06044'
      },
      {
        first: '4+5',
        second: '67',
        third: '13300-06745',
        fourth: '33300-06745'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/t-shaped-plate-thread-resistance.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,2 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '10 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '3,5 мм'
          },
          {
            id: 8,
            name: 'Матеріал',
            data: 'Нерж. сталь або сплав титану'
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
