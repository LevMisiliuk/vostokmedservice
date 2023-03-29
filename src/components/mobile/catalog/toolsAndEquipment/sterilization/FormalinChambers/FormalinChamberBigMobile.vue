<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="formalinChamberBigData[0].image"
          :title="formalinChamberBigData[0].title"
          :subtitle="formalinChamberBigData[0].subtitle"
          :productsParams="formalinChamberBigData[0].productsParams"
      />
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const formalinChamberBigData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberBig'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.title'),
        image: require('@/assets/toolsAndEquipment/formalin-chamber-big.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData1'),
            data: '416'
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData2'),
            data: '524'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData3'),
            data: '275'
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData4'),
            data: '5'
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData6'),
          },
        ]
      }
    ])
    return {
      formalinChamberBigData,
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
