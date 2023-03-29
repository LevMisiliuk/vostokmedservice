<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="inhaler403AData[0].image"
          :title="inhaler403AData[0].title"
          :subtitle="inhaler403AData[0].subtitle"
          :productsParams="inhaler403AData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.title2'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text3'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text4'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text5'),
      },
    ])
    const inhaler403AData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.inhaler403A'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/inhalersNebulizers/inhaler-403A.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight7'),
          },
        ]
      }
    ])
    return {
      inhaler403AData,
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
