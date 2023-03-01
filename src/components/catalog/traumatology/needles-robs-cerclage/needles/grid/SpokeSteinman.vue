<template>
  <ProductTableHeader
    title="Спиця Штеймана"
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
    <el-table-column label="3,5мм" prop="second" min-width="140px"/>
    <el-table-column label="4,0мм" prop="third" min-width="140px"/>
    <el-table-column label="4,5мм" prop="fourth" min-width="140px"/>
    <el-table-column label="5,0мм" prop="fifth" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeSteinman',

  setup() {
    const tableData = computed(() => [
      {
        first: '120',
        second: '15100-35120',
        third: '',
        fourth: '',
        fifth: ''
      },
      {
        first: '150',
        second: '15100-35150',
        third: '15100-40150',
        fourth: '15100-45150',
        fifth: '15100-50150'
      },
      {
        first: '180',
        second: '15100-35180',
        third: '15100-40180',
        fourth: '15100-45180',
        fifth: '15100-50180'
      },
      {
        first: '200',
        second: '',
        third: '15100-40200',
        fourth: '15100-45200',
        fifth: '15100-50200'
      },
      {
        first: '250',
        second: '',
        third: '',
        fourth: '15100-45250',
        fifth: '15100-50250'
      },
      {
        first: '275',
        second: '',
        third: '',
        fourth: '',
        fifth: '15100-50275'
      },
      {
        first: '300',
        second: '',
        third: '',
        fourth: '',
        fifth: '15100-50300'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/steinman-spoke.jpeg'),
        productsParams: [
          {
            id: 1,
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
