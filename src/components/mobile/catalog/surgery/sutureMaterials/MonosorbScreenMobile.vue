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
        <h2 class="suture-materials__block-header">Моносорб<br>нитка плетена та кручена</h2>
        <div class="suture-materials__text">
          <div class="suture-materials__text-block">
            <div :style="{color: 'black'}">
              <strong>Аналоги:</strong> PDS II, MonoPlus<br />
              <strong>Склад:</strong> полідіоксанон<br />
              <strong>Колір:</strong> фіолетовий<br />
              <strong>Механізм розсмоктування:</strong> гідролітичний<br />
              <strong>Реакція тканин:</strong> мінімальна<br />
              <strong>Термін розсмоктування:</strong> втрата 50% міцності – через 30 діб повне розсмоктування – 6 місяців<br><br>
              <strong>ПЕРЕВАГИ</strong><br />
              Мононіт Моносорб характеризується атравматичним проходженням крізь тканини, зручністю у застосуванні, високою міцністю, еластичність, відсутністю капілярності та ґнота.<br><br>
              <strong>ПОКАЗАННЯ</strong><br />
              Апроксимація м'яких тканин у випадках, коли необхідно застосування нитки, що розсмоктується, з тривалою (до б тижнів) підтримкою рани (наприклад, шов апоневрозу білої лінії живота). Рекомендована для кардіо- та ангіохірургічних операцій у дітей.
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
        title: 'Моносорб',
        image: require('@/assets/surgery/uniflex.jpeg'),
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
