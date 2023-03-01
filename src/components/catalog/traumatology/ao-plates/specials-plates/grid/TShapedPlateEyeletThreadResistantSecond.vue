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
    :scrollbar-always-on="true"
  >
    <el-table-column label="L, мм" prop="first" min-width="140px"/>
    <el-table-column label="Кількість отворів" prop="second" min-width="140px"/>
    <el-table-column label="Сторона" prop="third" min-width="140px"/>
    <el-table-column label="Кат. № нерж. сталь" prop="fourth" min-width="140px"/>
    <el-table-column label="Кат. № сплав титану" prop="fifth" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TShapedPlateEyeletThreadResistant',

  setup() {
    const tableData = computed(() => [
      {
        first: 45,
        second: '4-3',
        third: 'Ліва',
        fourth: '13330-04543',
        fifth: '33330-04543'
      },
      {
        first: 56,
        second: '4-4',
        third: 'Ліва',
        fourth: '13330-05644',
        fifth: '33330-05644'
      },
      {
        first: 67,
        second: '4-5',
        third: 'Ліва',
        fourth: '13330-06745',
        fifth: '33330-06745'
      },
      {
        first: 78,
        second: '4-6',
        third: 'Ліва',
        fourth: '13330-07846',
        fifth: '33330-07846'
      },
      {
        first: 100,
        second: '4-8',
        third: 'Ліва',
        fourth: '13330-10048',
        fifth: '33330-10048'
      },
      {
        first: 45,
        second: '4-3',
        third: 'Права',
        fourth: '13331-04543',
        fifth: '33331-04543'
      },
      {
        first: 56,
        second: '4-4',
        third: 'Права',
        fourth: '13331-05644',
        fifth: '33331-05644'
      },
      {
        first: 67,
        second: '4-5',
        third: 'Права',
        fourth: '13331-06745',
        fifth: '33331-06745'
      },
      {
        first: 78,
        second: '4-6',
        third: 'Права',
        fourth: '13331-07846',
        fifth: '33331-07846'
      },
      {
        first: 100,
        second: '4-8',
        third: 'Права',
        fourth: '13331-10048',
        fifth: '33331-10048'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/shaped-plate-eyelet-thread-resistant-second.jpeg'),
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
