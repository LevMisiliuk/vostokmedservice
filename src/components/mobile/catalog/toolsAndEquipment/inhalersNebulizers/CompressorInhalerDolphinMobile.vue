<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="compressorInhalerDolphinData[0].image"
          :title="compressorInhalerDolphinData[0].title"
          :subtitle="compressorInhalerDolphinData[0].subtitle"
          :productsParams="compressorInhalerDolphinData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.compressorInhalerDolphin.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.compressorInhalerDolphin.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.compressorInhalerDolphin.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.compressorInhalerDolphin.title2'),
      }
    ])
    const compressorInhalerDolphinData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerDolphin'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/inhalersNebulizers/compressor-inhaler-dolphin.png'),
        productsParams: [
        ]
      }
    ])
    return {
      compressorInhalerDolphinData,
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
