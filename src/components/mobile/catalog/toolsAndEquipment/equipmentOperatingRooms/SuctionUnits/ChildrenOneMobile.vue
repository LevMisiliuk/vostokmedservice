<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="children7ebData[0].image"
          :title="children7ebData[0].title"
          :subtitle="children7ebData[0].subtitle"
          :productsParams="children7ebData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.title2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.text7'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.text8'),
      }
    ])
    const children7ebData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.children7eb'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/children-7eb.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.children7eb.children7ebDataRight11'),
          },
        ]
      }
    ])
    return {
      children7ebData,
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
