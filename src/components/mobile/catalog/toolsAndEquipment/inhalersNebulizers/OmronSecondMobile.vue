<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="omronNeC29Data[0].image"
          :title="omronNeC29Data[0].title"
          :subtitle="omronNeC29Data[0].subtitle"
          :productsParams="omronNeC29Data[0].productsParams"
      />
      <div class="card" style="padding: 10px">
        <div class="card__product-info">
          <div
              class="card__product-info-inner"
              v-for="item in textData"
              :key="item.id"
          >
            <div v-if="item.id === 1">
              <div>
                <div class="card__product-title">
                  <h3 class="blue-txt">{{ item.title }}</h3>
                </div>
                <div class="card__product-data" style="color:#000; text-align: left">
                  {{ item.data }}
                </div>
              </div>
            </div>
            <div v-else-if="item.id === 2">
              <div>
                <div class="card__product-title">
                  <h3 class="blue-txt">{{ item.title }}</h3>
                </div>
                <div class="card__product-data" style="color:#000; text-align: left">
                  {{ item.data }}
                </div>
              </div>
            </div>
            <div v-else>
              <div class="card__product-data" style="color:#000; text-align: left">
                {{ item.data }}
              </div>
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
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.title1'),
      },
    ])
    const omronNeC29Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC29'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C29.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC29.dataRight9'),
          }
        ]
      }
    ])
    return {
      omronNeC29Data,
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
