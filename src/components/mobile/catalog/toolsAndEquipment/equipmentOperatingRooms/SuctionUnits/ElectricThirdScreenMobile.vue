<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="electric7sData[0].image"
          :title="electric7sData[0].title"
          :subtitle="electric7sData[0].subtitle"
          :productsParams="electric7sData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.title2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.text7'),
      }
    ])
    const electric7sData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7s'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.subtitle'),
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7s.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7s.electric7sDataRight11'),
          },
        ]
      }
    ])
    return {
      electric7sData,
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
