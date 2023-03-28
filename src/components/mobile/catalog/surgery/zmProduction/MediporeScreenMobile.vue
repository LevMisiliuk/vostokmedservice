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
            Медіпор <br>М'який еластичний пластир
          </h2>
          М'який еластичний пластир Медіпор (МесІроге) легко набуває
          форми будь-якої поверхні. Злегка розтягується, не травмує
          шкіру під час набряку в області рани або руху. Перфорація
          пластиру Медіпор зроблена через кожні 5 см, тому м'який
          еластичний пластир Медіпор можна легко розірвати руками по
          лінії перфорації. Чи не перешкоджає газообміну. <br>
          <br><strong>Основа:</strong> нетканий поліестер.<br>
          <strong>Адгезив:</strong> нешкідливий для шкіри поліакрилат.<br>
          <strong>Ступінь адгезії:</strong> висока<br><br>
          <strong>ПЕРЕВАГИ:</strong>
          <ul>
            <li>• Гіпоалергенний. о М'який.</li>
            <li>• Легко набуває форми.</li>
            <li>• Перфорований, тому не потрібні ножиці.</li>
            <li>• Пористий та повітропроникний.</li>
            <li>• Без паперової підкладки.</li>
            <li>• Не прилипає до медичних рукавичок.</li>
          </ul><br><br>
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
          Щільно прилеглі та
          покривають післяопераційні пов'язки: абдомінальні,
          ортопедичні, в акушерстві/гінекології, на молочній залозі,
          кардіоторакальні. Щільно прилеглі та покривають пов'язки ран:
          добре підходить для вигнутих ділянок тіла та області суглобів.
          Для багаторазового накладання пластиру, коли вирішальним є
          захист шкіри, що знаходиться в "зоні ризику" (пов'язки для
          хронічних ран). Закріплення трубок, катетерів, дренажів та
          інших виробів медичного призначення.
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
        title: 'Медіпор',
        image: require('@/assets/surgery/medipore.jpeg'),
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
