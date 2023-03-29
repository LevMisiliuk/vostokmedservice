<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="surgicalElemaData[0].image"
          :title="surgicalElemaData[0].title"
          :subtitle="surgicalElemaData[0].subtitle"
          :productsParams="surgicalElemaData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.title1'),
      },
    ])
    const surgicalElemaData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.surgicalElema'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/surgical-elema.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight13'),
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.surgicalElema.surgicalElemaDataRight14'),
          },
        ]
      }
    ])
    return {
      surgicalElemaData,
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
