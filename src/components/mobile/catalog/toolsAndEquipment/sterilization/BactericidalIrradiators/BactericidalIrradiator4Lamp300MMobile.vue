<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="bactericidalIrradiator4Lamp300MData[0].image"
          :title="bactericidalIrradiator4Lamp300MData[0].title"
          :subtitle="bactericidalIrradiator4Lamp300MData[0].subtitle"
          :productsParams="bactericidalIrradiator4Lamp300MData[0].productsParams"
      />
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const bactericidalIrradiator4Lamp300MData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator4Lamp300M'),
        subtitle: '',
        image: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-4Lamp300M.png'),
        productsParams: [
        ]
      }
    ])
    return {
      bactericidalIrradiator4Lamp300MData,
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
