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
            ТРАНСПОР<br />
            Пластир Транспор (Transpor) на основі прозорого перфорованого
            пластику.
          </h2>
          Пластикова гіпоалергенна основа пластиру Транспор (Тгаперого)
          перфорована, що забезпечує вільний газообмін з поверхні шкіри.
          Пластир легко рветься руками. Прозорість основи пластиру
          Транспор дозволяє здійснювати візуальний контроль за місцем
          фіксації та забезпечує косметичний ефект.<br /><br />
          <strong>Основа:</strong> пориста плівка - сополімер етилену та
          вінілацетату.<br />
          <strong>Адгезив:</strong> шкідливий для шкіри поліакрилат.<br />
          <strong>Ступінь адгезії:</strong> хороша.<br><br>
          <strong>ПЕРЕВАГИ:</strong>
          <ul>
            <li>• Гіпоалергенний.</li>
            <li>
              • Можливість розриву в поздовжньому та поперечному напрямках
              дозволяє легко робити хвостові надрізи.
            </li>
            <li>
              • Пористий та повітропроникний пластир Транспор. Прозорий,
              про Надійно фіксує, Не прилипає до медичних рукавичок.
            </li>
          </ul><br>
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
          Прикріплення об'ємних пов'язок, наприклад, пов'язок на очах.
          Закріплення трубок та пристроїв: внутрішньовенних катетерів,
          дренажів, назогастральних трубок, сечових катетерів.
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
        title: 'Траспор',
        image: require('@/assets/surgery/transpor.jpeg'),
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
