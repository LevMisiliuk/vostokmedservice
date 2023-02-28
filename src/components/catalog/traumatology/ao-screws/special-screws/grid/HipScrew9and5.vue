<template>
  <ProductTableHeader
    title="Тазостегновий гвинт 9,5 мм"
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
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.first')"
      prop="first"
      min-width="140px"
    />
    <el-table-column
      label="Кат. № нерж. сталь, 32 мм"
      prop="second"
      min-width="140px"
    />
    <el-table-column
      label="Кат. № сплав титану, 32 мм"
      prop="third"
      min-width="140px"
    />
  </el-table>

  <el-table
    border
    style="width: 100%; margin-bottom: 20px"
    :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
    :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
    :data="tableDataSecond"
  >
    <el-table-column
      :label="$t('main.carts.traumatology.microScrews.table.first')"
      prop="first"
    />
    <el-table-column
      label="Кат. № нерж. сталь, 48 мм"
      prop="second"
    />
    <el-table-column
      label="Кат. № сплав титану, 48 мм"
      prop="third"
    />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FemoralScrewR8',

  setup() {
    const tableData = computed(() => [
      {
        first: '65',
        second: '12621-95065',
        third: '32621-95065'
      },
      {
        first: '70',
        second: '12621-95070',
        third: '32621-95070'
      },
      {
        first: '75',
        second: '12621-95075',
        third: '32621-95075'
      },
      {
        first: ' 80',
        second: '12621-95080',
        third: '32621-95080'
      },
      {
        first: '85',
        second: '12621-95085',
        third: '32621-95085'
      },
      {
        first: ' 90',
        second: '12621-95090',
        third: '32621-95090'
      },
      {
        first: '95',
        second: '12621-95095',
        third: '32621-95095'
      },
      {
        first: '100',
        second: '12621-95100',
        third: ' 32621-95100'
      },
      {
        first: '105',
        second: '12621-95105',
        third: '32621-95105'
      },
      {
        first: '110',
        second: '12621-95110',
        third: '32621-95110'
      },
      {
        first: '115',
        second: '12621-95115',
        third: ' 32621-95115'
      },
      {
        first: '120',
        second: '12621-95120',
        third: '32621-95120'
      },
      {
        first: '125',
        second: '12621-95125',
        third: '32621-95125'
      },
      {
        first: '130',
        second: ' 12621-95130',
        third: '32621-95130'
      },
      {
        first: '135',
        second: '12621-95135',
        third: '32621-95135'
      },
      {
        first: '140',
        second: '12621-95140',
        third: '32621-95140'
      },
      {
        first: '150',
        second: '12621-95150',
        third: '32621-95150'
      },
      {
        first: '155',
        second: '12621-95155',
        third: '32621-95155'
      },
      {
        first: ' 160',
        second: '12621-95160',
        third: '32621-95160'
      },
      {
        first: '165',
        second: '12621-95165',
        third: '32621-95165'
      },
      {
        first: '170',
        second: '12621-95170',
        third: '32621-95170'
      },
    ])

    const tableDataSecond = computed(() => [
      {
        first: ' 65',
        second: '12622-95065',
        third: '32622-95065'
      },
      {
        first: '70',
        second: '12622-95070',
        third: '32622-95070'
      },
      {
        first: '75',
        second: '12622-95075',
        third: '32622-95075'
      },
      {
        first: '80',
        second: '12622-95080',
        third: '32622-95080'
      },
      {
        first: '85',
        second: '12622-95085',
        third: '32622-95085'
      },
      {
        first: '90',
        second: '12622-95090',
        third: '32622-95090'
      },
      {
        first: '95',
        second: ' 12622-95095',
        third: '32622-95095'
      },
      {
        first: '100',
        second: '12622-95100',
        third: '32622-95100'
      },
      {
        first: '105',
        second: '12622-95105',
        third: '32622-95105'
      },
      {
        first: '110',
        second: '12622-95110',
        third: '32622-95110'
      },
      {
        first: ' 115',
        second: '12622-95115',
        third: '32622-95115'
      },
      {
        first: '120',
        second: '12622-95120',
        third: '32622-95120'
      },
      {
        first: '125',
        second: '12622-95125',
        third: '32622-95125'
      },
      {
        first: '130',
        second: '12622-95130',
        third: '32622-95130'
      },
      {
        first: '135',
        second: '12622-95135',
        third: '32622-95135'
      },
      {
        first: '140',
        second: '12622-95140',
        third: '32622-95140'
      },
      {
        first: ' 145',
        second: '12622-95145',
        third: '32622-95145'
      },
      {
        first: '150',
        second: '12622-95150',
        third: '32622-95150'
      },
      {
        first: '155',
        second: '12622-95155',
        third: '32622-95155'
      },
      {
        first: '160',
        second: '12622-95160',
        third: '32622-95160'
      },
      {
        first: '165',
        second: '12622-95165',
        third: '32622-95165'
      },
      {
        first: '170',
        second: '12622-95170',
        third: '32622-95170'
      },
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/hip-screw-9-and-5.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Діаметр різьблення',
            data: '9,5 мм'
          },
          {
            id: 2,
            name: 'Діаметр ядра',
            data: '6,0 мм'
          },
          {
            id: 8,
            name: 'Міжрізьбова відстань',
            data: '2,75 мм'
          },
          {
            id: 6,
            name: 'Шестигранник',
            data: '6,0 мм'
          },
          {
            id: 5,
            name: 'Матеріал',
            data: 'нерж. сталь або сплав титану'
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
