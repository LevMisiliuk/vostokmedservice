<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="luminaireReflectorEEma3Data[0].image"
          :title="luminaireReflectorEEma3Data[0].title"
          :subtitle="luminaireReflectorEEma3Data[0].subtitle"
          :productsParams="luminaireReflectorEEma3Data[0].productsParams"
      />
      <div class="card" style="padding: 10px">
        <div class="card__product-info">
          <div
              class="card__product-info-inner"
              v-for="item in textData"
              :key="item"
          >
            <div v-if="item.id === 1">
              <div>
                <div class="card__product-title" v-if="item.title">
                  <h3 class="blue-txt">{{ item.title }}</h3>
                </div>
                <div class="card__product-data" style="color:#000; text-align: left">
                  {{ item.data }}
                </div>
              </div>
            </div>
            <div v-else-if="item.id === 2">
              <div>
                <div class="card__product-title" v-if="item.title">
                  <h3 class="blue-txt">{{ item.title }}</h3>
                </div>
                <div class="card__product-data" style="color:#000; text-align: left">
                  {{ item.data }}
                </div>
              </div>
            </div>
            <div v-else-if="item.id === 3">
              <div>
                <div class="card__product-title" v-if="item.title">
                  <h3 class="blue-txt">{{ item.title }}</h3>
                </div>
                <div class="card__product-data" style="color:#000; text-align: left">
                  {{ item.data }}
                </div>
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.title1'),
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text2')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text3')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text4')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text5')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text6')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text7')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text8')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text9')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text10')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text11')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text12')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text13')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text14')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text15')
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text16')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text16'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.title2'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text17')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text18')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text19')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text20')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text21')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text22')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text23')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text24')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text25')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text26')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text27')
      },
      {
        id: 3,
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.title3'),
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text28')
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text29')
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.text30')
      },
    ])
    const luminaireReflectorEEma3Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorEEma3'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.subtitle'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft1'),
            data: '60',
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft2'),
            data: '30',
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft3'),
            data: '120-300',
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft4'),
            data: '70',
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft5'),
            data: '400',
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft6'),
            data: '6',
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft7'),
            data: '800',
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft8'),
            data: '',
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft9'),
            data: '40',
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft10'),
            data: '40',
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft11'),
            data: '90',
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft12'),
            data: '35',
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft13'),
            data: '35',
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataRight14'),
          },
          {
            id: 15,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft15'),
            data: '220 ± 22',
          },
          {
            id: 16,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft16'),
            data: '50',
          },
          {
            id: 17,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft17'),
            data: '150',
          },
          {
            id: 18,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft18'),
            data: '2,9',
          },
          {
            id: 19,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft19'),
            data: '620',
          },
          {
            id: 20,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft20'),
            data: '2,8',
          },
          {
            id: 21,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft21'),
            data: '320° ± 20°',
          },
          {
            id: 22,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft22'),
            data: '50',
          },
          {
            id: 23,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorEEma3.dataLeft23'),
            data: '7',
          }
        ]
      }
    ])
    return {
      luminaireReflectorEEma3Data,
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
