<template>
  <ProductTableHeader
    title="Реконструктивна пластина 8х2,7 мм"
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
    <el-table-column label="Кат. № сплав титану" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ReconstructivePlate8x2and7',

  setup() {
    const tableData = computed(() => [
      { first: '4', second: '32', third: '13190-03204', fourth: '33190-03204' },
      { first: '6', second: '48', third: '13190-04806', fourth: '33190-04806' },
      { first: '8', second: '64', third: '13190-06408', fourth: '33190-06408' },
      {
        first: '10',
        second: '80',
        third: '13190-08010',
        fourth: '33190-08010'
      },
      {
        first: '12',
        second: '96',
        third: '13190-09612',
        fourth: '33190-09612'
      },
      {
        first: '14',
        second: '112',
        third: '13190-11214',
        fourth: '33190-11214'
      },
      {
        first: '16',
        second: '128',
        third: '13190-12816',
        fourth: '33190-12816'
      },
      {
        first: '18',
        second: '144',
        third: '13190-14418',
        fourth: '33190-14418'
      },
      {
        first: '20',
        second: '160',
        third: '13190-16020',
        fourth: '33190-16020'
      },
      {
        first: '22',
        second: '176',
        third: '13190-17622',
        fourth: '33190-17622'
      },
      {
        first: '24',
        second: '192',
        third: '13190-19224',
        fourth: '33190-19224'
      },
      {
        first: '26',
        second: '208',
        third: '13190-20826',
        fourth: '33190-20826'
      },
      {
        first: '28',
        second: '224',
        third: '13190-22428',
        fourth: '33190-22428'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/reconstructive-plate-8x2and7.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '2,7 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '8,0 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '2,7 мм'
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
