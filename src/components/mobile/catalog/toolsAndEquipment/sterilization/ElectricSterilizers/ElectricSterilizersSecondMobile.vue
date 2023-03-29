<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="electricSterilizersSecondData[0].image"
          :title="electricSterilizersSecondData[0].title"
          :subtitle="electricSterilizersSecondData[0].subtitle"
          :productsParams="electricSterilizersSecondData[0].productsParams"
      />
      <div class="card">
        <div class="card__product-info">
          <div
              class="card__product-info-inner"
              v-for="item in textData"
              :key="item.id"
          >
            <div class="card__product-data" style="color: #000; text-align: left; padding: 10px;">
              {{ item.data }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const textData = computed(() => [
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizers.electricSterilizers320.text1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizers.electricSterilizers320.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizers.electricSterilizers320.text3'),
      },
    ])
    const electricSterilizersSecondData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers320'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/electric-sterilizers-320.png'),
        productsParams: [
        ]
      }
    ])
    return {
      electricSterilizersSecondData,
      textData
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
