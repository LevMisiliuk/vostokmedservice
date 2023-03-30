<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="data[0].image"
          :title="data[0].title"
          :subtitle="data[0].subtitle"
          :productsParams="data[0].productsParams"
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
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text1'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text2'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text3'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text4'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text5'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text6'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text7'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text8'),
      },
    ])
    const data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphAksion'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-aksion.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight13'),
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight14'),
          },
          {
            id: 15,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft15'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight15'),
          },
          {
            id: 16,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft16'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight16'),
          },
          {
            id: 17,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft17'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight17'),
          },
          {
            id: 18,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft18'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight18'),
          },
          {
            id: 19,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft19'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight19'),
          },
          {
            id: 20,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft20'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight20'),
          },
          {
            id: 21,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft21'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight21'),
          },
          {
            id: 22,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft22'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight22'),
          },
          {
            id: 23,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft23'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight23'),
          },
        ]
      }
    ])
    return {
      data,
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
