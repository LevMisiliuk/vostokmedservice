<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="AirSterilizerBdData[0].image"
          :title="AirSterilizerBdData[0].title"
          :subtitle="AirSterilizerBdData[0].subtitle"
          :productsParams="AirSterilizerBdData[0].productsParams"
      />
      <div class="card" style="color: #000; padding: 10px;">
        <div class="card__product-info">
          <div
              class="card__product-info-inner"
              v-for="item in textData"
              :key="item.id"
          >
            <div class="card__product-data" style="text-align: left">
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
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text7'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text8'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text9'),
      },
      {
        id: 10,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text10'),
      },
      {
        id: 11,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text11'),
      },
      {
        id: 12,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text12'),
      },
      {
        id: 13,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text13'),
      },
      {
        id: 14,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text14'),
      },
      {
        id: 15,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text15'),
      },
    ])
    const AirSterilizerBdData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerGP'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/air-sterilizer-spu.png'),
      }
    ])
    return {
      AirSterilizerBdData,
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
