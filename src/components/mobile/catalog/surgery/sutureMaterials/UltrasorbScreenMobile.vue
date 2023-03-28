<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="cardData[0].image"
          :title="cardData[0].title"
          :subtitle="cardData[0].subtitle"
          :productsParams="cardData[0].productsParams"
      />
    </div>
    <div class="card">
      <div
          class="default_mobile__card-inner"
      >
        <h2 class="suture-materials__block-header">Ультрасорб<br>мононіт полігліколідний</h2>
        <div class="suture-materials__text">
          <div class="suture-materials__text-block">
            <div :style="{color: 'black'}">
              <strong>Аналоги:</strong> Мопосгуl, Махоn, Monosyn<br />
              <strong>Склад:</strong> полігліколева (полігідрокси-ацетилова - ПГА) кислота, капролактон<br />
              <strong>Колір:</strong> фіолетовий<br />
              <strong>Механізм розсмоктування:</strong> гідролітичний<br />
              <strong>Реакція тканин:</strong> мінімальна<br />
              <strong>Термін розсмоктування:</strong> втрата 50% міцності - через 14 діб повне розсмоктування - 60-90 діб<br /><br />
              <strong>ПЕРЕВАГИ</strong><br />
              Мононити Ультрасорб характеризується атравматичним проходженням крізь тканини, зручна у застосуванні, дуже міцна, еластична, некапілярна та нефітільна.<br><br>
              <strong>ПОКАЗАННЯ</strong><br />
              Широка сфера застосування для апроксимації м'яких тканин та накладання лігатур. Рекомендована для накладання швів при операціях на сечовидільній та жовчовидільній системах.
            </div>
          </div>
        </div>
      </div>
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'

export default {
  setup() {

    const cardData = computed(() => [
      {
        title: 'Ультрасорб',
        image: require('@/assets/surgery/ultrasorb.jpeg'),
      }
    ])

    return {
      cardData,
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

    &-inner {
      padding: 10px;
    }
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
