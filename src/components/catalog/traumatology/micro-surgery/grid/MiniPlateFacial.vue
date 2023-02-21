<template>
  <ProductTableHeader
    title="Мініпластина для пластики обличчя"
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
    <el-table-column label="Кат № нерж. сталь" prop="third" />
    <el-table-column label="Кат № сплав титану" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'MiniPlateFacial',

  setup() {
    const tableData = computed(() => [
      {
        first: '3',
        second: '17',
        third: '13110-01703',
        fourth: '33100-01503'
      },
      {
        first: '4',
        second: '23',
        third: '13110-02304',
        fourth: '33100-01504'
      },
      {
        first: '5',
        second: '29',
        third: '13110-02905',
        fourth: '33100-01505'
      },
      {
        first: '6',
        second: '35',
        third: '13110-03506',
        fourth: '33100-01506'
      },
      {
        first: '7',
        second: '41',
        third: '13110-04107',
        fourth: '33100-01507'
      },
      {
        first: '8',
        second: '47',
        third: '13110-04708',
        fourth: '33100-01508'
      },
      {
        first: '9',
        second: '53',
        third: '13110-05309',
        fourth: '33100-01520'
      },
      {
        first: '10',
        second: '59',
        third: '13110-05910',
        fourth: '33100-01520'
      },
      {
        first: '12',
        second: '71',
        third: '13110-07112',
        fourth: '33100-01520'
      },
      {
        first: '14',
        second: '83',
        third: '13110-08314',
        fourth: '33100-01520'
      },
      {
        first: '16',
        second: '95',
        third: '13110-09516',
        fourth: '33100-01520'
      },
      {
        first: '18',
        second: '107',
        third: '13110-10718',
        fourth: '33100-01520'
      },
      {
        first: '20',
        second: '119',
        third: '13110-11920',
        fourth: '33100-01520'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/mini-plate-facial.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '1,2 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '5,0 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '1,5 мм'
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
