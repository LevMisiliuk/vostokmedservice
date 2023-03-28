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
            :label="$t('main.carts.neurosurgery.curvedBeam.table.first')"
            prop="first"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.curvedBeam.table.second')"
            prop="second"
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
        first: '30',
        second: '36140-06030',
      },
      {
        first: '35',
        second: '36140-06035',
      },
      {
        first: '40',
        second: '36140-06040',
      },
      {
        first: '45',
        second: '36140-06045',
      },
      {
        first: '50',
        second: '36140-06050',
      },
      {
        first: '55',
        second: '36140-06055',
      },
      {
        first: '60',
        second: '36140-06060',
      },{
        first: '80',
        second: '36140-06080',
      },
      {
        first: '90',
        second: '36140-06090',
      },
      {
        first: '100',
        second: '36140-06100',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.curvedBeam'),
        subtitle: "",
        image: require('@/assets/neurosurgery/curved-beam.png'),
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
