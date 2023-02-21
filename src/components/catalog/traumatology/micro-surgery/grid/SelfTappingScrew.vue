<template>
  <ProductTableHeader
    title="Пластина Г-подібна"
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
    <el-table-column label="L, мм" prop="first" />
    <el-table-column label="Диаметр, мм" prop="second" />
    <el-table-column label="Сталь" prop="third" />
  </el-table>
</template>

<script>

import { computed } from 'vue'

export default {
  name: 'SelfTappingScrew',

  setup() {
    const tableData = computed(() => [
      {
        first: '5,5',
        second: '2,0',
        third: '540',
      },
      {
        first: '7',
        second: '2,0',
        third: '541',
      },
      {
        first: '9',
        second: '2,0',
        third: '542',
      },
      {
        first: '11',
        second: '2,0',
        third: '543',
      },
      {
        first: '13',
        second: '2,0',
        third: '544',
      },
      {
        first: '15',
        second: '2,0',
        third: '545',
      },
      {
        first: '17',
        second: '2,0',
        third: '546',
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/self-tapping-screw.jpeg')
      }
    ])

    return {
      tableData,
      cardData
    }
  }
}
</script>
