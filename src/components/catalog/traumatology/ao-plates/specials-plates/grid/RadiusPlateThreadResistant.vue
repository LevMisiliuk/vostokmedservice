<template>
  <ProductTableHeader
    title="Пластина для променевої кістки, різьбостабільна"
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
    <el-table-column label="L, мм" prop="second" min-width="140px" />
    <el-table-column label="Кат. № нерж. сталь" prop="third" min-width="140px" />
    <el-table-column label="Кат. № сплав титану" prop="fourth" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'RadiusPlateThreadResistant',

  setup() {
    const tableData = computed(() => [
      {
        first: '4',
        second: 'Права',
        third: '13361-08304',
        fourth: '33361-08304'
      },
      {
        first: '4',
        second: 'Ліва',
        third: '13360-08304',
        fourth: '33360-08304'
      },
      {
        first: '3',
        second: 'Права',
        third: '13361-06003',
        fourth: '33361-06003'
      },
      {
        first: '3',
        second: 'Ліва',
        third: '13360-06003',
        fourth: '33360-06003'
      },
      {
        first: '6',
        second: 'Права',
        third: '13361-10506',
        fourth: '33361-10506'
      },
      {
        first: '6',
        second: 'Ліва',
        third: '13360-10506',
        fourth: '33360-10506'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/radius-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1, мм'
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
