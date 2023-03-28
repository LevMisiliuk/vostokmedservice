<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="cardData[0].image"
          :title="cardData[0].title"
          :subtitle="cardData[0].subtitle"
          :productsParams="cardData[0].productsParams"
      />
      <el-table
          :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
          :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
          :data="tableData"
          style="width: 100%; margin-bottom: 10px;"
          :scrollbar-always-on="true"
      >
        <el-table-column
            :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.table.first')"
            prop="first"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.table.second')"
            prop="second"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.table.third')"
            prop="third"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.table.fourth')"
            prop="fourth"
            min-width="140px"
        />
      </el-table>
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed, ref} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const tableData = ref([
      {
        first: '16',
        second: '5',
        third: '23 mm',
        fourth: '36010-02305',
      },
      {
        first: '18',
        second: '5',
        third: '25mm',
        fourth: '36010-02505',
      },
      {
        first: '16+18',
        second: '8',
        third: '41mm',
        fourth: '36010-04108',
      },
      {
        first: '16+18+18',
        second: '11',
        third: '59mm',
        fourth: '36010-05911',
      },
      {
        first: '21',
        second: '5',
        third: '28mm',
        fourth: '36010-02805',
      },
      {
        first: '18+21',
        second: '8',
        third: '46mm',
        fourth: '36010-04608',
      },
      {
        first: '18+18+21',
        second: '11',
        third: '64mm',
        fourth: '36010-64011',
      },
      {
        first: '16+18+18+21',
        second: '14',
        third: '80mm',
        fourth: '36010-08014',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.hPlate'),
        subtitle: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.subtitle'),
        image: require('@/assets/neurosurgery/h-plate.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.dataLeft1'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.dataLeft2'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.dataLeft3'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.hPlate.dataRight3'),
          },
        ]
      }
    ])

    return {
      cardData,
      tableData,
    }
  }
}
</script>

<style lang="scss">
.default_mobile {
  &__card {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
}
.mobile__wrapper {
  .card {
    display: flex;
    flex-direction: column;
    min-width: 1vw !important;
    z-index: 0;
    margin: 0px 16px 40px 16px
  }

  .card__product-info-structure {
    display: flex;
    flex-direction: column;
    color: rgb(27, 28, 30);
  }

  .card__product-image {
    max-width: 100% !important;
  }

  .card__product-info {
    padding: 0px;
  }

  .card__product-data {
    text-align: right;
  }
}

</style>
