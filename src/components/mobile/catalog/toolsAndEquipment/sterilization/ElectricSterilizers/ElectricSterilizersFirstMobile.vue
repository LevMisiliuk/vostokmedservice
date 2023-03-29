<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="electricSterilizersFirstData[0].image"
          :title="electricSterilizersFirstData[0].title"
          :subtitle="electricSterilizersFirstData[0].subtitle"
          :productsParams="electricSterilizersFirstData[0].productsParams"
      />
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const electricSterilizersFirstData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers420'),
        subtitle: '',
        image: require('@/assets/toolsAndEquipment/electric-sterilizers-420.png'),
        productsParams: [
        ]
      }
    ])
    return {
      electricSterilizersFirstData,
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
