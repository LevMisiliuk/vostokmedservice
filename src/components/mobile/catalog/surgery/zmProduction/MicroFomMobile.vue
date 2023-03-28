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
            Мікрофом<br />Еластичний гіпоалергенний пластир
          </h2>
          Еластичний гіпоалергенний пластир Мікрофом, що приймає
          будь-яку форму, ідеально підходить для компресійних та
          ортопедичних пов'язок. М'яка еластична основа пластиру
          Мікрофом (М1сго№ат) не викликає сильного натягу шкіри, як при
          використанні звичайного пластиру. Завдяки пружності та
          розтяжності по всіх напрямках забезпечує щільне прилягання
          пов'язки на будь-якій поверхні, не залишає слідів клею після
          видалення. Еластичний мікрогубчастий пластир Мікрофом
          непроникний для рідин та мікроорганізмів, але не перешкоджає
          повітрообміну.<br /><br />
          <strong>Основа:</strong> спінений полівінілхлорид.<br />
          <strong>Адгезив:</strong> нешкідливий для шкіри поліакрилат.<br />
          <strong>Ступінь адгезії:</strong> міцна.<br /><br />
          <strong>ПЕРЕВАГИ:</strong><br>
          <ul>
            <li>• Гіпоалергенний</li>
            <li>• Легко приймає потрібну форму</li>
            <li>• Водонепроникний</li>
            <li>• Можна написувати</li>
            <li>• Не прилипає до медичних рукавичок</li>
          </ul><br><br>
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
          У травматології та ортопедії: для захисту кісткових виступів при накладенні
          іммобілізуючих пов'язок. Щільно прилеглі та покриваючі
          післяопераційні пов'язки: абдомінальні, торакальні та
          ортопедичні. Для післяопераційної компресії. Для вторинного
          шва. Для здавлення над ділянками серцево-судинних
          втручань/ангіопластики, операцій на молочній залозі. У
          косметології.
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
        title: 'Мікрофом',
        image: require('@/assets/surgery/microfom.jpeg'),
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
