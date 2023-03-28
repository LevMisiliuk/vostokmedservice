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
        <h2 class="suture-materials__block-header">Шовк<br>нитка полігліколідна плетена швидко розсмоктується</h2>
        <div class="suture-materials__text">
          <div class="suture-materials__text-block">
            <div :style="{color: 'black'}">
              <strong>Аналоги:</strong> Vicryl-rapid, Safil-quick, PGA-Resoquick<br />
              <strong>Склад:</strong> полігліколева (полігідроксіацетилова – ПГА) кислота<br />
              <strong>Колір:</strong> білий<br />
              <strong>Механізм розсмоктування:</strong> гідролітичний<br />
              <strong>Реакція тканин:</strong> мінімальна<br /><br />
              <strong>ПЕРЕВАГИ</strong><br />
              Нитка дуже зручна у маніпуляціях, надійно тримає вузол. Завдяки прискореному розсмоктування нитка швидко зникає з області операційної рани, що позбавляє необхідності знімати шви і не створює перешкод для загоєння рани.<br><br>
              <strong>ПОКАЗАННЯ</strong><br />
              Застосовується для апроксимації м'яких тканин у випадках, коли 14 діб достатньо для адекватного загоєння рани та/або коли перебування шва у тканинах понад 35-40 діб може несприятливо позначитися на процесах регенерації.
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
        title: 'ПГА Рапід',
        image: require('@/assets/surgery/pga-rapid.jpeg'),
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
