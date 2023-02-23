<template>
  <ProductTableHeader
    title="Спиця плечова і великогомілкова"
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
    <el-table-column label="L, мм  " prop="first" />
    <el-table-column label="Плече 3 мм" prop="second" />
    <el-table-column label="Берцова 4 мм" prop="third" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SpokeShoulderAndTibial',

  setup() {
    const tableData = computed(() => [
      {
        first: '200',
        second: '15820-45260',
        third: '15830-40200'
      },
      {
        first: '210',
        second: '15820-45280',
        third: '15830-40210'
      },
      {
        first: '220',
        second: '15820-45300',
        third: '15830-40220'
      },
      {
        first: '230',
        second: '15820-45320',
        third: '15830-40230'
      },
      {
        first: '240',
        second: '15820-45330',
        third: '15830-40240'
      },
      {
        first: '250',
        second: '15820-45340',
        third: '15830-40250'
      },
      {
        first: '260',
        second: '15820-45350',
        third: '15830-40260'
      },
      {
        first: '270',
        second: '15820-45360',
        third: '15830-40270'
      },
      {
        first: '280',
        second: '15820-45370',
        third: '15830-40280'
      },
      {
        first: '290',
        second: '15820-45380',
        third: '15830-40290'
      },
      {
        first: '300',
        second: '15820-45390',
        third: '15830-40300'
      },
      {
        first: '310',
        second: '15820-45400',
        third: '15830-40310'
      },
      {
        first: '320',
        second: '15820-45410',
        third: '15830-40320'
      },
      {
        first: '330',
        second: '15820-45420',
        third: '15830-40330'
      },
      {
        first: '340',
        second: '15820-45430',
        third: '15830-40340'
      },
      {
        first: '350',
        second: '15820-45440',
        third: '15830-40350'
      },
      {
        first: '360',
        second: '15820-45450',
        third: '15830-40360'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/tibial-spoke.jpeg'),
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
