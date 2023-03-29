<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="bactericidalIrradiator2Lamp150MData[0].image"
          :title="bactericidalIrradiator2Lamp150MData[0].title"
          :subtitle="bactericidalIrradiator2Lamp150MData[0].subtitle"
          :productsParams="bactericidalIrradiator2Lamp150MData[0].productsParams"
      />
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const bactericidalIrradiator2Lamp150MData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator2Lamp150M'),
        subtitle: '',
        image: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-2Lamp150M.png'),
        productsParams: [
        ]
      }
    ])
    return {
      bactericidalIrradiator2Lamp150MData,
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
