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
        <h2 class="suture-materials__block-header">Фторекс</h2>
        <div style="color: #000;">
          <strong>Склад:</strong> лавсанові комплексні нитки з фторполімерним покриттям діаметром 0,042 мм.<br />
          <strong>Колір:</strong> білий або зелений<br />
          <strong>Товщина:</strong> 0,30 мм<br />
          <strong>Об'ємна пористість:</strong> 88%<br />
          <strong>Поверхнева густина:</strong> 48 г/м2<br /><br>
          Фторекс виготовлений із поліефірних (лавсанових) комплексних ниток із гідрофобним фторполімерним покриттям. Відрізняється повною відсутністю капілярності. Покриття підвищує біосумісність ендопротезу та забезпечує стійкість до інфікування при збереженні міцності, м'якості та гарної моделюваності.<br><br>
          <div>
            <img src="@/assets/surgery/ftorex-micro.jpeg" alt="ftorex micro" />
          </div>
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
        title: 'Фторекс',
        image: require('@/assets/surgery/fluorex-2.jpeg'),
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
