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
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.title1'),
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text7'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text8'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text9'),
      },
      {
        id: 10,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text10'),
      },
      {
        id: 11,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text11'),
      },
    ])
    const data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphMiniature'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-miniature.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight13'),
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight14'),
          },
          {
            id: 15,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft15'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight15'),
          },
          {
            id: 16,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft16'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight16'),
          },
          {
            id: 17,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft17'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight17'),
          },
          {
            id: 18,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft18'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight18'),
          },
          {
            id: 19,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft19'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight19'),
          },
          {
            id: 20,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft20'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight20'),
          },
          {
            id: 21,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft21'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight21'),
          },
          {
            id: 22,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft22'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight22'),
          },
          {
            id: 23,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft23'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight23'),
          },
          {
            id: 24,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft24'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight24'),
          },
          {
            id: 25,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft25'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight25'),
          },
          {
            id: 26,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft26'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight26'),
          },
          {
            id: 27,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft27'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight27'),
          },
          {
            id: 28,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft28'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight28'),
          },
          {
            id: 29,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft29'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight29'),
          },
          {
            id: 30,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft30'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight30'),
          },
          {
            id: 31,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft31'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight31'),
          },
          {
            id: 32,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft32'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight32'),
          },
          {
            id: 33,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft33'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight33'),
          },
          {
            id: 34,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft34'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight34'),
          },
          {
            id: 35,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft35'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight35'),
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
