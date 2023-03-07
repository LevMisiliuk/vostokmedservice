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
      <h2 style="color: #000; text-align: center;">Капрон<br>нитка поліамідна плетена та кручена</h2>
          <div style="color: #000;">
            <strong>Аналоги:</strong> Nurolon, Bralon, Surgilon<br />
                  <strong>Склад:</strong> полікапроамід (капрон, найлон 6)<br />
                  <strong>Колір:</strong> білий, синій, чорний<br />
                  <strong>Реакція тканин:</strong> помірна<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  Нитка міцна, гнучка, зручна у маніпуляціях.<br><br>
                  <strong>ПОКАЗАННЯ</strong><br />
                  Широка сфера застосування у загальній хірургії для апроксимації тканин та накладання лігатур.
          </div>
      </div>>
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'

export default {
  setup() {

    const cardData = computed(() => [
      {
        title: 'капрон',
        image: require('@/assets/surgery/capron.jpeg'),
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
