<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="electric7a23dData[0].image"
          :title="electric7a23dData[0].title"
          :subtitle="electric7a23dData[0].subtitle"
          :productsParams="electric7a23dData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.title2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.text6'),
      }
    ])
    const electric7a23dData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7a23d'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7a23d.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23d.electric7a23dDataRight13'),
          },
        ]
      }
    ])
    return {
      electric7a23dData,
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
