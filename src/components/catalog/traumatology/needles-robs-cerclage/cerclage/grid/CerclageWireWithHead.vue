<template>
  <ProductTableHeader
    title="Проволока серкляжная з головкою"
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
  name: 'CerclageWireWithHead',

  setup() {
    const tableData = computed(() => [
      {
        first: '0,8',
        second: '280',
        third: '15851-08280'
      },
      {
        first: '1,0',
        second: '280',
        third: '15851-08280'
      },
      {
        first: '1,2',
        second: '280',
        third: '15851-08280'
      },
      {
        first: '1,0',
        second: '600',
        third: '15851-08600'
      },
      {
        first: '1,2',
        second: '600',
        third: '15851-08600'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/cerclage-wire-with-head.jpeg'),
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
