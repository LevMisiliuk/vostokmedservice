<template>
  <ProductTableHeader
    title="Спиця кондилус"
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
    <el-table-column label="Вигнутий" prop="second" />
    <el-table-column label="Плоский" prop="third" />
    <el-table-column label="Списоподібний" prop="fourth" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeCondylus',

  setup() {
    const tableData = computed(() => [
      {
        first: '260',
        second: '15800-45260',
        third: '15810-45260',
        fourth: '15801-45260'
      },
      {
        first: '280',
        second: '15800-45280',
        third: '15810-45280',
        fourth: '15801-45280'
      },
      {
        first: '300',
        second: '15800-45300',
        third: '15810-45300',
        fourth: '15801-45300'
      },
      {
        first: '320',
        second: '15800-45320',
        third: '15810-45320',
        fourth: '15801-45320'
      },
      {
        first: '330',
        second: '15800-45330',
        third: '15810-45330',
        fourth: '15801-45330'
      },
      {
        first: '340',
        second: '15800-45340',
        third: '15810-45340',
        fourth: '15801-45340'
      },
      {
        first: '350',
        second: '15800-45350',
        third: '15810-45350',
        fourth: '15801-45350'
      },
      {
        first: '360',
        second: '15800-45360',
        third: '15810-45360',
        fourth: '15801-45360'
      },
      {
        first: '370',
        second: '15800-45370',
        third: '15810-45370',
        fourth: '15801-45370'
      },
      {
        first: '380',
        second: '15800-45380',
        third: '15810-45380',
        fourth: '15801-45380'
      },
      {
        first: '390',
        second: '15800-45390',
        third: '15810-45390',
        fourth: '15801-45390'
      },
      {
        first: '400',
        second: '15800-45400',
        third: '15810-45400',
        fourth: '15801-45400'
      },
      {
        first: '410',
        second: '15800-45410',
        third: '15810-45410',
        fourth: '15801-45410'
      },
      {
        first: '420',
        second: '15800-45420',
        third: '15810-45420',
        fourth: '15801-45420'
      },
      {
        first: '430',
        second: '15800-45430',
        third: '15810-45430',
        fourth: '15801-45430'
      },
      {
        first: '440',
        second: '15800-45440',
        third: '15810-45440',
        fourth: '15801-45440'
      },
      {
        first: '450',
        second: '15800-45450',
        third: '15810-45450',
        fourth: '15801-45450'
      },
      {
        first: '460',
        second: '15800-45460',
        third: '15810-45460',
        fourth: '15801-45460'
      },
      {
        first: '470',
        second: '15800-45470',
        third: '15810-45470',
        fourth: '15801-45470'
      },
      {
        first: '480',
        second: '15800-45480',
        third: '15810-45480',
        fourth: '15801-45480'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/spoke-condylus.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Матеріал',
            data: 'нерж. сталь'
          },
          {
            id: 2,
            name: 'Розмір',
            data: '4,5 мм'
          },
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
