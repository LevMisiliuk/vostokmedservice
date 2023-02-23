<template>
  <ProductTableHeader
    title="Пластина само-компресійна, вузька"
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
  name: 'SelfCompresiveNarrowPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '39',
        second: '2',
        third: '13800-03902',
        fourth: '33800-03902'
      },
      {
        first: '55',
        second: '3',
        third: '13800-05503',
        fourth: '33800-05503'
      },
      {
        first: '71',
        second: '4',
        third: '13800-07104',
        fourth: '33800-07104'
      },
      {
        first: '87',
        second: '5',
        third: '13800-08705',
        fourth: '33800-08705'
      },
      {
        first: '103',
        second: '6',
        third: '13800-10306',
        fourth: '33800-10306'
      },
      {
        first: '119',
        second: '7',
        third: '13800-11907',
        fourth: '33800-11907'
      },
      {
        first: '135',
        second: '8',
        third: '13800-13508',
        fourth: '33800-13508'
      },
      {
        first: '151',
        second: '9',
        third: '13800-15109',
        fourth: '33800-15109'
      },
      {
        first: '167',
        second: '10',
        third: '13800-16710',
        fourth: '33800-16710'
      },
      {
        first: '183',
        second: '11',
        third: '13800-18311',
        fourth: '33800-18311'
      },
      {
        first: '199',
        second: '12',
        third: '13800-19912',
        fourth: '33800-19912'
      },
      {
        first: '215',
        second: '13',
        third: '13800-21513',
        fourth: '33800-21513'
      },
      {
        first: '231',
        second: '14',
        third: '13800-23114',
        fourth: '33800-23114'
      },
      {
        first: '247',
        second: '15',
        third: '13800-24715',
        fourth: '33800-24715'
      },
      {
        first: '263',
        second: '16',
        third: '13800-26316',
        fourth: '33800-26316'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/small-narrow-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '4,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '11,5 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '4,5 мм'
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
