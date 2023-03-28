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
            Дюрапор<br>
            Пластир на шовковій основі
          </h2>
          Є високоміцним багатофункціональним гіпоалергенним пластиром на шовковій основі, забезпечує надійну фіксацію найбільш складних хірургічних пов'язок. Особлива міцність фіксації пластиром Дюрапор на шовковій основі досягається завдяки рухомій структурі матеріалу. Вологопроникна основа Дюрапор не перешкоджає повітрообміну і не дозволяє накопичуватися надлишкам вологи, які можуть спричинити мацерацію рани та ослаблення адгезії.<br><br>
          <strong>Основа:</strong> тканинний, штучний шовк.<br>
          <strong>Адгезив:</strong> нешкідливий для шкіри поліакрилат.<br>
          <strong> Ступінь адгезії:</strong> висока адгезія та міцність.<br><br>

          <strong>ПЕРЕВАГИ:</strong><br>
          Гіпоалергенний. Пористий і повітропроникний, Тканинне покриття, Легко відривається, Міцний.
          Можна написувати, Не прилипає до медичних рукавичок.<br><br>
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong>
          Щільно прилеглі та покривають пов'язки. Прикріплення об'ємних пов'язок. Закріплення великих трубок та пристроїв: калоприймачів, грудних дренажів або ендотрахеальних трубок. Накладення шин на пальці під час переломів фаланг.
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
        title: 'Дюрапор',
        image: require('@/assets/surgery/durapore.jpeg'),
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
