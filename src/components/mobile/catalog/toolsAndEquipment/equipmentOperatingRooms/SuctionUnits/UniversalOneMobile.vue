<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="universal7edData[0].image"
          :title="universal7edData[0].title"
          :subtitle="universal7edData[0].subtitle"
          :productsParams="universal7edData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.title2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.text7'),
      }
    ])
    const universal7edData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.universal7ed'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.subtitle'),
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/universal-7ed.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.universal7ed.universal7edDataRight11'),
          },
        ]
      }
    ])
    return {
      universal7edData,
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
