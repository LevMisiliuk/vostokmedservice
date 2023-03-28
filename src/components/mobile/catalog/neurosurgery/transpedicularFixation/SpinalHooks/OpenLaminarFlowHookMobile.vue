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
            :label="$t('main.carts.neurosurgery.openLaminarFlowHook.table.first')"
            prop="first"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.openLaminarFlowHook.table.second')"
            prop="second"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.openLaminarFlowHook.table.third')"
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
        first: '5X5',
        second: 'Uni',
        third: '36190-05005',
      },
      {
        first: '5X7',
        second: 'Uni',
        third: '36190-05007',
      },
      {
        first: '5X7',
        second: 'Left',
        third: '36191-05007',
      },
      {
        first: '5x9',
        second: 'Left',
        third: '36191-05009',
      },
      {
        first: '5x11',
        second: 'Left',
        third: '36191-05011',
      },
      {
        first: '5X7',
        second: 'Right',
        third: '36192-05007',
      },
      {
        first: '5x9',
        second: 'Right',
        third: '36192-05009',
      },
      {
        first: '5x11',
        second: 'Right',
        third: '36192-05011',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.openLaminarFlowHook'),
        subtitle: "",
        image: require('@/assets/neurosurgery/open-laminar-flowhook.png'),
        productsParams: [
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
