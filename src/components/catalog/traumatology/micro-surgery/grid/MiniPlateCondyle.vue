<template>
  <ProductTableHeader
    title="Мініпластина виростка"
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
    <el-table-column label="Сторона" prop="second" min-width="140px" />
    <el-table-column label="Кат № нерж. сталь" prop="third" min-width="140px" />
    <el-table-column label="Кат № сплав титану" prop="fourth" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'MiniPlateCondyle',

  setup() {
    const tableData = computed(() => [
      {
        first: '1,5',
        second: 'Ліва',
        third: '13130-02104',
        fourth: '33130-02104'
      },
      {
        first: '1,5',
        second: 'Права',
        third: '13131-02104',
        fourth: '33131-02104'
      },
      {
        first: '2,0',
        second: 'Ліва',
        third: '13130-02604',
        fourth: '33130-02604'
      },
      {
        first: '2,0',
        second: 'Права',
        third: '13131-02604',
        fourth: '33131-02604'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plate-condyle.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '4,5 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '1,5-2,0 мм'
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
