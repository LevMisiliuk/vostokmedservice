<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="electric7a23vData[0].image"
          :title="electric7a23vData[0].title"
          :subtitle="electric7a23vData[0].subtitle"
          :productsParams="electric7a23vData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.title2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.text7'),
      },
    ])
    const electric7a23vData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7a23v'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7a23v.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.electric7a23v.electric7a23vDataRight13'),
          },
        ]
      }
    ])
    return {
      electric7a23vData,
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
