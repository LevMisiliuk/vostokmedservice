<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="diagnosticCouchCD1Data[0].image"
          :title="diagnosticCouchCD1Data[0].title"
          :subtitle="diagnosticCouchCD1Data[0].subtitle"
          :productsParams="diagnosticCouchCD1Data[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.title1'),
      }
    ])
    const diagnosticCouchCD1Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.diagnosticCouchCD1'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/medicalFurniture/diagnostic-couch-CD1.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataLeft1'),
            data: "120",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataLeft2'),
            data: "820",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataLeft3'),
            data: "0 - 45",
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataLeft4'),
            data: "1960 х 610 х 45",
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.diagnosticCouchCD1.dataLeft7'),
            data: "45",
          },
        ]
      }
    ])
    return {
      diagnosticCouchCD1Data,
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
