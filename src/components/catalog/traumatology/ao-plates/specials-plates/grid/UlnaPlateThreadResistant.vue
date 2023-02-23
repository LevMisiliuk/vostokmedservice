<template>
  <ProductTableHeader
    title="Пластина для ліктьової кістки, різьбостабільна"
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
    <el-table-column label="Сторона" prop="second" />
    <el-table-column label="Кат. № нерж. сталь" prop="third" />
    <el-table-column label="Кат. № сплав титану" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'UlnaPlateThreadResistant',

  setup() {
    const tableData = computed(() => [
      {
        first: '5',
        second: 'Права',
        third: '13351-11405',
        fourth: '33351-11405'
      },
      {
        first: '5',
        second: 'Ліва',
        third: '13351-11405',
        fourth: '33351-11405'
      },
      {
        first: '4',
        second: 'Права',
        third: '13351-08004',
        fourth: '33351-08004'
      },
      {
        first: '4',
        second: 'Ліва',
        third: '13350-08004',
        fourth: '33350-08004'
      },
      {
        first: '6',
        second: 'Права',
        third: '13351-14106',
        fourth: '33351-14106'
      },
      {
        first: '6',
        second: 'Ліва',
        third: '13350-14106',
        fourth: '33350-14106'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/ulna-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,2 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '18 мм'
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
