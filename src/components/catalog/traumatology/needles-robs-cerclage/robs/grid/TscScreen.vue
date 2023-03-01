<template>
  <ProductTableHeader
    title="ТЕС"
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
    <el-table-column label="" prop="first" min-width="140px"/>
    <el-table-column label="L, мм" prop="second" min-width="140px"/>
    <el-table-column label="Кат №" prop="third" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TscScreen',

  setup() {
    const tableData = computed(() => [
      {
        first: '2,0',
        second: '440',
        third: '35900-20440'
      },
      {
        first: '2,5',
        second: '440',
        third: '35900-25440'
      },
      {
        first: '3,0',
        second: '440',
        third: '35900-30440'
      },
      {
        first: '3,5',
        second: '440',
        third: '35900-35440'
      },
      {
        first: '4,0',
        second: '440',
        third: '35900-40440'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/tsc.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Матеріал',
            data: 'сплав титану'
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
