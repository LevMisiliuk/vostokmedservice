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
            Медипор плюс ПАД<br />
            Пластир на шовковій основі
          </h2>
          Пов'язка з поглинаючою прокладкою Медипор плюс Пад є нетканою
          еластичною пластирною основою з нанесеним гіпоалергенним
          водовідштовхувальним клеєм і поглинаючою прокладкою. Прокладка
          забезпечена шаром, що не прилипає до рани, тому пов'язка з
          вбираючою прокладкою Медіпор плюс Пад (Medipore + Pad)
          безболісно знімається. Кожна пов'язка стерильна та має
          індивідуальне пакування. Пов'язка з поглинаючою прокладкою
          Medipore™ + Pad є чудовою альтернативою звичним марлевим
          пов'язкам.<br /><br />
          <strong>Основа:</strong> нетканий поліестер.<br />
          <strong>Адгезив:</strong> нешкідливий для шкіри
          поліакрилат.<br />
          <strong> Ступінь адгезії:</strong> хороша.<br /><br />

          <strong>ПЕРЕВАГИ:</strong><br />
          <ul>
            <li>• Абсорбуюча прокладка, що не прилипає до рани</li>
            <li>• Стерильна</li>
            <li>• М'яка та зручна</li>
            <li>• Повітропроникна.</li>
          </ul>
          <br>
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br />
          Закріплення первинних або вторинних пов'язок на "чисті" рани
          зі слабкою та помірною ексудацією, включаючи хірургічні та
          травматичні рани. Захист ділянок запровадження
          внутрішньовенних катетерів та місць венепункції.
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
        title: 'Медипор плюс ПАД',
        image: require('@/assets/surgery/medipore-plus-pad.jpeg'),
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
