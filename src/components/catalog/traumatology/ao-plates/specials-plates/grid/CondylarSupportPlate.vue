<template>
  <ProductTableHeader
    title="Пластина опорна виросткова для гомілки"
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
    <el-table-column label="L, мм" prop="first" min-width="140px" />
    <el-table-column label="Сторона" prop="second" min-width="140px" />
    <el-table-column label="Кат. № нерж. сталь" prop="third" min-width="140px" />
    <el-table-column label="Кат. № сплав титану" prop="fourth" min-width="140px" />
  </el-table>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CondylarSupportPlate',

  setup() {
    const tableData = computed(() => [
      {
        first: '106',
        second: 'Ліва',
        third: '13670-10603',
        fourth: '33670-10603'
      },
      {
        first: '106',
        second: 'Права',
        third: '13671-10603',
        fourth: '33671-10603'
      },
      {
        first: '122',
        second: 'Ліва',
        third: '13670-12204',
        fourth: '33670-12204'
      },
      {
        first: '122',
        second: 'Права',
        third: '13671-12204',
        fourth: '33671-12204'
      },
      {
        first: '138',
        second: 'Ліва',
        third: '13670-13805',
        fourth: '33670-13805'
      },
      {
        first: '138',
        second: 'Права',
        third: '13421-23216',
        fourth: '33671-13805'
      },
      {
        first: '154',
        second: 'Ліва',
        third: '13670-15406',
        fourth: '33670-15406'
      },
      {
        first: '154',
        second: 'Права',
        third: '13671-15406',
        fourth: '33671-15406'
      },
      {
        first: '186',
        second: 'Ліва',
        third: '13670-18608',
        fourth: '33670-18608'
      },
      {
        first: '186',
        second: 'Права',
        third: '13671-18608',
        fourth: '33671-18608'
      },
      {
        first: '218',
        second: 'Ліва',
        third: '13670-21810',
        fourth: '33670-21810'
      },
      {
        first: '218',
        second: 'Права',
        third: '13671-21810',
        fourth: '33671-21810'
      },
      {
        first: '250',
        second: 'Ліва',
        third: '13670-25012',
        fourth: '33670-25012'
      },
      {
        first: '250',
        second: 'Права',
        third: '13671-25012',
        fourth: '33671-25012'
      }
    ])
    const cardData = computed(() => [
      {
        imageAddition: require('@/assets/traumatology/condylar-support-plate.jpeg'),
        productsParams: [
          {
            id: 1,
            name: 'Товщина',
            data: '3,0 мм'
          },
          {
            id: 2,
            name: 'Ширина',
            data: '14 мм'
          },
          {
            id: 3,
            name: 'Діаметр гвинта',
            data: '4,5-6,5 мм'
          },
          {
            id: 8,
            name: 'Матеріал',
            data: 'Нерж. сталь або сплав титану'
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
