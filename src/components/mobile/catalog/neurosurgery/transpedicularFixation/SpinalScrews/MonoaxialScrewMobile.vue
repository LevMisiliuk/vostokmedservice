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
            :label="$t('main.carts.neurosurgery.monoaxialScrew.table.first')"
            prop="first"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.monoaxialScrew.table.second')"
            prop="second"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.monoaxialScrew.table.third')"
            prop="third"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.monoaxialScrew.table.fourth')"
            prop="fourth"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.monoaxialScrew.table.fifth')"
            prop="fifth"
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
        second: '36100-45030',
        third: '36100-55030',
        fourth: '',
        fifth: '',
      },
      {
        first: '35',
        second: '36100-45035',
        third: '36100-55035',
        fourth: '36100-65035',
        fifth: '',
      },
      {
        first: '40',
        second: '36100-45040',
        third: '36100-55040',
        fourth: '36100-65040',
        fifth: '36100-75040',
      },
      {
        first: '45',
        second: '',
        third: '36100-55045',
        fourth: '36100-65045',
        fifth: '36100-75045',
      },
      {
        first: '50',
        second: '',
        third: '36100-55050',
        fourth: '36100-65050',
        fifth: '',
      },
      {
        first: '55',
        second: '',
        third: '',
        fourth: '36100-65055',
        fifth: '',
      },
    ]);

    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalScrewsLinks.monoaxialScrew'),
        image: require('@/assets/neurosurgery/monoaxial-screw.png'),
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
