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
          <h2 class="suture-materials__block-header">
            Кобан<br>
            Еластичний бинт, що самоскріплюється.
          </h2>
          Еластичний бинт, що самоскріплюється, Кобан (Соban) забезпечує надійну компресію протягом тривалого часу, не допускаючи відносного зміщення і скручування витків. Еластичний бинт СоЬап, що самоскріплюється, може використовуватися як компресійний бинт для фіксації пов'язок і пристроїв, при розтягуваннях, для захисних перев'язок і контролю набряків, а також для часткової іммобілізації.<br><br>
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong
          ><br>
          У травматології та ортопедії, флебології, спортивній медицині, косметології.
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
        title: 'Кобан',
        image: require('@/assets/surgery/coban.jpeg'),
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
