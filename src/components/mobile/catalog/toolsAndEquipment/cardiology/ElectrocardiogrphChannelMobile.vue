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
        id: 1,
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.title1'),
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text7'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text8'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text10'),
      },
      {
        id: 10,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text11'),
      },
      {
        id: 11,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.text12'),
      },
    ])
    const data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphSingleThreeChannel'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-single-three-channel.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight13'),
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight14'),
          },
          {
            id: 15,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft15'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight15'),
          },
          {
            id: 16,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft16'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight16'),
          },
          {
            id: 17,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft17'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight17'),
          },
          {
            id: 18,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft18'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight18'),
          },
          {
            id: 19,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft19'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight19'),
          },
          {
            id: 20,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft20'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight20'),
          },
          {
            id: 21,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataLeft21'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphSingleThreeChannel.dataRight21'),
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
