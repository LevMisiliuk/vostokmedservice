<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="screwChairWithBackrestData[0].image"
          :title="screwChairWithBackrestData[0].title"
          :subtitle="screwChairWithBackrestData[0].subtitle"
          :productsParams="screwChairWithBackrestData[0].productsParams"
      />
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const screwChairWithBackrestData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithBackrest'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.screwChairWithBackrest.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chair-with-backrest.png'),
        productsParams: [
        ]
      }
    ])
    return {
      screwChairWithBackrestData,
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
