<template>
  <ProductTableHeader
    title="Дужка"
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
    <el-table-column label="Кат №" prop="second" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CerclageBracket',

  setup() {
    const tableData = computed(() => [
      {
        first: '68х42',
        second: '15860-68042'
      },
      {
        first: '48х36',
        second: '15860-48036'
      },
      {
        first: '36х30',
        second: '15860-36030'
      },
      {
        first: '24х22',
        second: '15860-24022'
      },
      {
        first: '15х15',
        second: '15860-15015'
      },
      {
        first: '20х20',
        second: '15860-20020'
      },
      {
        first: '24х42',
        second: '15860-24042'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/bracket.jpeg'),
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
