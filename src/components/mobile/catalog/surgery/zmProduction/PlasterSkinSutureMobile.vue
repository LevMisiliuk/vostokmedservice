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
            ПЛАСТИРНИЙ ШКІРНИЙ ШОВ <br>
            Пластирний шкірний шов Стері-Стріп (Steri-Strip™) із підсилюючими
            волокнами
          </h2>
          Смужки для безшовного зведення країв шкірної рани<br>
          <strong>Основа:</strong> неткана віскоза.<br>
          <strong>Адгезив:</strong> нешкідливий для шкіри поліакрилат.<br>
          Адгезивні смужки посилені в поздовжньому напрямку нейлоновими
          нитками, що сприяє більш міцному зведенню країв розривів та
          розрізів шкіри. Пластирний шкірний шов дозволяють раніше
          знімати шви з хірургічними нитками.<br><br>
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
          Використовуються для країв шкірної рани замість швів нитками (у поєднанні з нитками або після раннього зняття швів).
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
        title: 'Пластирний шкірний шов',
        image: require('@/assets/surgery/plaster-skin-suture.jpeg'),
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
