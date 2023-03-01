<template>
  <ProductTableHeader
    title="Спиця"
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
    <el-table-column label="Діаметр, мм" prop="first" min-width="140px"/>
    <el-table-column label="L, мм" prop="second" min-width="140px"/>
    <el-table-column label="Кат. №" prop="third" min-width="140px"/>
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeSimple',

  setup() {
    const tableData = computed(() => [
      {
        first: '2,0',
        second: '260',
        third: '15040-20260'
      },
      {
        first: '3,0',
        second: '370',
        third: '15040-30370'
      },
      {
        first: '3,0',
        second: '400',
        third: '15040-30400'
      },
      {
        first: '3,0',
        second: '500',
        third: '15040-30500'
      },
      {
        first: '3,0',
        second: '600',
        third: '15040-30600'
      },
      {
        first: '1,2',
        second: '300',
        third: '15040-12300'
      },
      {
        first: '1,5',
        second: '300',
        third: '15040-15300'
      },
      {
        first: '1,8	',
        second: '300',
        third: '15040-18300'
      },
      {
        first: '2,0',
        second: '300',
        third: '15040-20300'
      },
      {
        first: '2,2',
        second: '300',
        third: '15040-22300'
      },
      {
        first: '2,5',
        second: '300',
        third: '15040-25300'
      },
      {
        first: '3,0',
        second: '300',
        third: '15040-30300'
      },
      {
        first: '2,5',
        second: '300',
        third: '15040-25350'
      },
      {
        first: '3,5',
        second: '350',
        third: '15040-35350'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spoke-simple.jpeg'),
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
