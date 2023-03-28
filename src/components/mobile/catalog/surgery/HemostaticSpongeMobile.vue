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
        <div style="color: #000;">
          <span><strong> Склад: </strong></span><br>Губка гемостатична колагенова
          готується з розчину колагену, отриманого з гольового спилка
          великої рогатої худоби. До складу губки входять: борна кислота
          – 0,0125 г та фурацилін – 0,0075 г (з розрахунку на 1 г сухої
          губки). Чинить місцеву гемостатичну та антисептичну дію,
          стимулює регенерацію тканин. Залишена в рані чи порожнині вона
          повністю розсмоктується.<br>
          <span><strong> Показання до застосування:</strong></span><br>
          Як місцевий гемостатичний засіб при капілярних та паренхіматозних
          кровотечах. Для тампонади синусів твердої мозкової оболонки.
          Для зупинки кровотечі із кістково-мозкового каналу, зупинки
          альвеолярної кровотечі після видалення зуба. Для заповнення
          дефектів паренхіматозних органів (зокрема, після резекції
          печінки) та для закриття ложа жовчного міхура після
          холецистектомії.
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
        title: 'Гемостатична губка',
        image: require('@/assets/surgery/hemostatic-sponge.jpeg'),
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
