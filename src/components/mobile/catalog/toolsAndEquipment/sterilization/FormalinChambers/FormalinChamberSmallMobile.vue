<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="formalinChamberSmallData[0].image"
          :title="formalinChamberSmallData[0].title"
          :subtitle="formalinChamberSmallData[0].subtitle"
          :productsParams="formalinChamberSmallData[0].productsParams"
      />
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const formalinChamberSmallData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberSmall'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.title'),
        image: require('@/assets/toolsAndEquipment/formalin-chamber-small.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData1'),
            data: '286'
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData2'),
            data: '193'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData3'),
            data: '191'
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData4'),
            data: '1,75'
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData6'),
          },
        ]
      }
    ])
    return {
      formalinChamberSmallData,
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
