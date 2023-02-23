<template>
  <ProductTableHeader
    title="Пластина Т-подібна з вушком, різьбостабільна"
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
    <el-table-column label="L, мм" prop="first" />
    <el-table-column label="Кількість отворів" prop="second" />
    <el-table-column label="Сторона" prop="third" />
    <el-table-column label="Кат. № нерж. сталь" prop="fourth" />
    <el-table-column label="Кат. № сплав титану" prop="fifth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TShapedPlateEyeletThreadResistant',

  setup() {
    const tableData = computed(() => [
      {
        first: '49',
        second: '3  3',
        third: 'Ліва',
        fourth: '13330-04933',
        fifth: '33330-04933'
      },
      {
        first: '60',
        second: '3  4',
        third: 'Ліва',
        fourth: '13330-06034',
        fifth: '33330-06034'
      },
      {
        first: '71',
        second: '3  5',
        third: 'Ліва',
        fourth: '13330-07135',
        fifth: '33330-07135'
      },
      {
        first: '82',
        second: '3  6',
        third: 'Ліва',
        fourth: '13330-08236',
        fifth: '33330-08236'
      },
      {
        first: '104',
        second: '3  8',
        third: 'Ліва',
        fourth: '13330-10438',
        fifth: '33330-10438'
      },
      {
        first: '49',
        second: '3  3',
        third: 'Права',
        fourth: '13331-04933',
        fifth: '33331-04933'
      },
      {
        first: '60',
        second: '3  4',
        third: 'Права',
        fourth: '13331-06034',
        fifth: '33331-06034'
      },
      {
        first: '71',
        second: '3  5',
        third: 'Права',
        fourth: '13331-07135',
        fifth: '33331-07135'
      },
      {
        first: '82',
        second: '3  6',
        third: 'Права',
        fourth: '13331-08236',
        fifth: '33331-08236'
      },
      {
        first: '104',
        second: '3  8',
        third: 'Права',
        fourth: '13331-10438',
        fifth: '33331-10438'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/shaped-plate-eyelet-thread-resistant.jpeg'),
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
