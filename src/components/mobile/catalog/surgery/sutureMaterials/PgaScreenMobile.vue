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
        <h2 class="suture-materials__block-header">ПГА<br>нитка полігліколідна плетена з покриттям</h2>
        <div class="suture-materials__text">
          <div class="suture-materials__text-block">
            <div :style="{color: 'black'}">
              <strong>Аналоги:</strong> Vicryl, Safil, Polisorb, PGA-Resorba, Dexon II, Marlin, Dar-vin, Biosorb С, Bondek<br />
              <strong>Склад:</strong> полігліколева (полігідроксіацетилова - ПГА) кислота<br />
              <strong>Колір:</strong> фіолетовий<br />
              <strong>Механізм розсмоктування:</strong> гідролітичний<br />
              <strong>Реакція тканин:</strong> мінімальна<br />
              <strong>Термін розсмоктування:</strong> втрата 50% міцності - через 14 діб; повне розсмоктування - 60-80 діб.<br /><br />
              <strong>ПЕРЕВАГИ</strong><br />
              Нитка ПГА міцна, дуже зручна у маніпуляціях, надійно тримає вузол. Завдяки покриттю має мінімальний ефект, що «пиляє», і капілярність.<br><br>
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
        title: 'ПГА',
        image: require('@/assets/surgery/pga.jpeg'),
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
