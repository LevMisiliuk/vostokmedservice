<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
        :image="cardData[0].image"
        :title="cardData[0].title"
        :subtitle="cardData[0].subtitle"
        :productsParams="cardData[0].productsParams"
      />
    </div>
    <div class="mobile_table-container">
      <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
            :scrollbar-always-on="true"
          >
            <el-table-column
              label="№"
              prop="first"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.humerusInstrument.table.catalogNumber'
                )
              "
              prop="second"
              min-width="140px"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.humerusInstrument.table.name'
                )
              "
              prop="third"
              min-width="180px"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.humerusInstrument.table.qty'
                )
              "
              prop="fourth"
              min-width="100px"
            />
          </el-table>
    </div>
</MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {
    const tableData = computed(() => [
      {
        first: '1',
        second: '94290-00100',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.first'
        ),
        fourth: '1'
      },
      {
        first: '2',
        second: '94290-00200',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.second'
        ),
        fourth: '1'
      },
      {
        first: '3',
        second: '94290-00500',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.third'
        ),
        fourth: '1'
      },
      {
        first: '4',
        second: '94290-00800',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.fourth'
        ),
        fourth: '1'
      },
      {
        first: '5',
        second: '94290-00700',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.fifth'
        ),
        fourth: '1'
      },
      {
        first: '6',
        second: '94290-00600',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.sixth'
        ),
        fourth: '1'
      },
      {
        first: '7',
        second: '94290-00300',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.seventh'
        ),
        fourth: '1'
      },
      {
        first: '8',
        second: '94290-00400',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.eights'
        ),
        fourth: '1'
      },
      {
        first: '9',
        second: '94290-00800',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.ninth'
        ),
        fourth: '1'
      },
      {
        first: '10',
        second: '99010-35195',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.tenth'
        ),
        fourth: '1'
      },
      {
        first: '11',
        second: '99160-25120',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.eleventh'
        ),
        fourth: '1'
      },
      {
        first: '12',
        second: '99000-00009',
        third: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.tableData.twelfth'
        ),
        fourth: '1'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.humerusInstrument.title'
        ),
        image: require('@/assets/traumatology/humerus-istrument.jpeg')
      }
    ])
    return {
      cardData,
      tableData
    }
  }
}
</script>

<style lang="scss">
.default_mobile {
  &__card {
    display: flex;
    flex-direction: column;
  }
}

.mobile_table-container {
  img {
    width: 100%;
  }
}
</style>
