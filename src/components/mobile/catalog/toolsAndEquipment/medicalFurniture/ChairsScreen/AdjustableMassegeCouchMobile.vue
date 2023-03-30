<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="adjustableMassegeCouchData[0].image"
          :title="adjustableMassegeCouchData[0].title"
          :subtitle="adjustableMassegeCouchData[0].subtitle"
          :productsParams="adjustableMassegeCouchData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.title1'),
      }
    ])
    const adjustableMassegeCouchData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.adjustableMassegeCouch'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/medicalFurniture/adjustable-massege-couch.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.dataLeft1'),
            data: "120",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.dataLeft2'),
            data: "695 - 800",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.dataLeft3'),
            data: "1960 х 610 х 45",
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.adjustableMassegeCouch.dataLeft6'),
            data: "45",
          }
        ]
      }
    ])
    return {
      adjustableMassegeCouchData,
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
