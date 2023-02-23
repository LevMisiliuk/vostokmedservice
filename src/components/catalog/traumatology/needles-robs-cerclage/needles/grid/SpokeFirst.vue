<template>
  <ProductTableHeader
    title="Спиця Кіршнера, двокінцева"
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
    <el-table-column label="L, мм 80" prop="second" />
    <el-table-column label="L, мм 120" prop="third" />
    <el-table-column label="L, мм 150" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeFirst',

  setup() {
    const tableData = computed(() => [
      {
        first: ' 0,8',
        second: '15010-08080',
        third: '15010-08120',
        fourth: '15010-08150'
      },
      {
        first: '1,0',
        second: '15010-10080',
        third: '15010-10120',
        fourth: '15010-10150'
      },
      {
        first: '1,2',
        second: '',
        third: '15010-12120',
        fourth: '15010-12150'
      },
      {
        first: '1,4',
        second: '',
        third: '15010-14120',
        fourth: '15010-14150'
      },
      {
        first: '1,5',
        second: '',
        third: '15010-15120',
        fourth: '15010-15150'
      },
      {
        first: '1,6',
        second: '',
        third: '',
        fourth: '15010-16150'
      },
      {
        first: '1,8',
        second: '',
        third: '',
        fourth: '15010-18150'
      },
      {
        first: ' 2,0',
        second: '',
        third: '',
        fourth: '15010-20150'
      },
      {
        first: '2,2',
        second: '',
        third: '',
        fourth: '15010-22150'
      },
      {
        first: '2,5',
        second: '',
        third: '',
        fourth: '15010-25150'
      },
      {
        first: '3,0',
        second: '',
        third: '',
        fourth: '15010-30150'
      },
      {
        first: '3,5',
        second: '',
        third: '',
        fourth: ''
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spoke-first.jpeg'),
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
