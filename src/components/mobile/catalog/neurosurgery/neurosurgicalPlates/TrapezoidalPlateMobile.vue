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
            :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.table.first')"
            prop="first"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.table.second')"
            prop="second"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.table.third')"
            prop="third"
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
        first: '2',
        second: '26mm',
        third: '36000-02602',
      },
      {
        first: '3',
        second: '34mm',
        third: '36000-03403',
      },
      {
        first: '4',
        second: '42mm',
        third: '36000-04204',
      },
      {
        first: '5',
        second: '50mm',
        third: '36000-05005',
      },
      {
        first: '6',
        second: '58mm',
        third: '36000-05806',
      },
      {
        first: '7',
        second: '66mm',
        third: '36000-06607',
      },
      {
        first: '8',
        second: '74mm',
        third: '36000-07408',
      },
      {
        first: '9',
        second: '82mm',
        third: '36000-08209',
      },
      {
        first: '10',
        second: '90mm',
        third: '36000-09010',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.trapezoidalPlate'),
        subtitle: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.subtitle'),
        image: require('@/assets/neurosurgery/trapezoidal-plate.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataLeft1'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataLeft2'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataLeft3'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataRight3'),
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
