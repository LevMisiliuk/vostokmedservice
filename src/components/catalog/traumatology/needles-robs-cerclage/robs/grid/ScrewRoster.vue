<template>
  <ProductTableHeader
    title="Гвинт-Стержень"
    :productsParams="cardData[0].productsParams"
    :image="cardData[0].imageAddition"
  />
  <h2>Корковий гвинт</h2>
  <el-table
    border
    style="width: 100%; margin-bottom: 20px"
    :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
    :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
    :data="tableData"
    :scrollbar-always-on="true"
  >
    <el-table-column label="Сталь" prop="first" min-width="140px"/>
    <el-table-column label="L, мм" prop="second" min-width="140px"/>
    <el-table-column label="D, мм" prop="third" min-width="140px"/>
    <el-table-column label="I1, мм" prop="fourth" min-width="140px"/>
    <el-table-column label="I, мм" prop="fifth" min-width="140px"/>
  </el-table>
  <h2>Гвинт спінгиозний</h2>
  <el-table
    border
    style="width: 100%; margin-bottom: 20px"
    :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
    :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
    :data="tableDataSecond"
  >
    <el-table-column label="Сталь" prop="first" />
    <el-table-column label="L, мм" prop="second" />
    <el-table-column label="D, мм" prop="third" />
    <el-table-column label="I1, мм" prop="fourth" />
    <el-table-column label="I, мм" prop="fifth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ScrewRoster',

  setup() {
    const tableData = computed(() => [
      {
        first: '5.158.008.75',
        second: '75',
        third: '5,0',
        fourth: '30',
        fifth: '25'
      },
      {
        first: '5.158.008.105',
        second: '105',
        third: '5,0',
        fourth: '40',
        fifth: ''
      },
      {
        first: '5.158.008.115',
        second: '115',
        third: '5,0',
        fourth: '45',
        fifth: '40'
      }
    ])
    const tableDataSecond = computed(() => [
      {
        first: '1.28.110',
        second: '110',
        third: '6,5',
        fourth: '45',
        fifth: '40'
      },
      {
        first: '1.28.120',
        second: '120',
        third: '6,5',
        fourth: '45',
        fifth: ''
      },
      {
        first: '1.28.140',
        second: '140',
        third: '6,5',
        fourth: '50',
        fifth: '50'
      },
      {
        first: '1.28.160',
        second: '160',
        third: '6,5',
        fourth: '60',
        fifth: ''
      },
      {
        first: '1.28.180',
        second: '180',
        third: '6,5',
        fourth: '65',
        fifth: '55'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/screw-roster.jpeg'),
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
      cardData,
      tableDataSecond
    }
  }
}
</script>

<style lang="scss" scoped></style>
