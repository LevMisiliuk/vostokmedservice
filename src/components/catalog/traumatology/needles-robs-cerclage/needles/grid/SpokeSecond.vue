<template>
  <ProductTableHeader
    title="Спиця Кіршнера з різьбленням"
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
    <el-table-column label="Діаметр, мм" prop="first" />
    <el-table-column label="L, мм" prop="second" />
    <el-table-column label="L різьблення, мм" prop="third" />
    <el-table-column label="Кат. №" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeFirst',

  setup() {
    const tableData = computed(() => [
      {
        first: '1,5',
        second: '150',
        third: '5',
        fourth: '15021-15150'
      },
      {
        first: '1,5',
        second: '150',
        third: '15',
        fourth: '15020-15150'
      },
      {
        first: '1,8',
        second: '100',
        third: '15',
        fourth: '15020-18100'
      },
      {
        first: '1,8',
        second: '150',
        third: '15',
        fourth: '15020-18150'
      },
      {
        first: '2,0',
        second: '100',
        third: '15',
        fourth: '15020-20100'
      },
      {
        first: '2,0',
        second: '150',
        third: '15',
        fourth: '15020-20150'
      },
      {
        first: '2,0',
        second: '230',
        third: '15',
        fourth: '15020-20230'
      },
      {
        first: '2,0',
        second: '250',
        third: '15',
        fourth: '15020-20250'
      },
      {
        first: '2,2',
        second: '250',
        third: '15',
        fourth: '15020-22250'
      },
      {
        first: '2,5',
        second: '100',
        third: '15',
        fourth: '15020-25100'
      },
      {
        first: '2,5',
        second: '150',
        third: '15',
        fourth: '15020-25150'
      },
      {
        first: '2,5',
        second: '200',
        third: '15',
        fourth: '15020-25200'
      },
      {
        first: '2,5',
        second: '230',
        third: '15',
        fourth: '15020-25230'
      },
      {
        first: '2,5',
        second: '250',
        third: '15',
        fourth: '15020-25250'
      },
      {
        first: '2,5',
        second: '350',
        third: '15',
        fourth: '15020-25350'
      },
      {
        first: '2,7',
        second: '280',
        third: '20',
        fourth: '15020-27280'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spoke-second.jpeg'),
        productsParams: [
          {
            id: 4,
            name: 'Матеріал',
            data: 'нерж. сталь'
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
