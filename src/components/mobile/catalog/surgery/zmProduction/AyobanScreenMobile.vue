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
          <strong
          >Основа: поліпропіленова плівка. Адгезив: нешкідливий для шкіри поліакрилат.</strong
          >
          <br><br>
          Антимікробна плівка, що розрізається, з йодофором ЗМ™ Ioban™ 2 поєднує можливість швидкої дезінфекції шкіри з довготривалим захистом рани від шкірних мікроорганізмів. Операційна плівка приклеюється на суху шкіру пацієнта після обробки операційного поля за методикою, прийнятою в клініці, та осушення стерильною серветкою. Антисептик йодофор поступово виділяється з плівки протягом усієї операції та забезпечує придушення мікрофлори поряд з ефектом іммобілізації мікробів липкою плівкою. Знімається перед накладенням шкірних швів.<br><br>
          <strong>ПЕРЕВАГИ:</strong><br>
          <ul>
            <li>
              • Забезпечується найвищий на сьогоднішній день рівень
              асептики операційного поля протягом всієї операції в
              результаті впливу йодофора, що поєднується, і механічної
              іммобілізації мікробів.
            </li>
            <li>
              • Виключається контакт інструментів, рукавичок та рідин зі
              шкірними бактеріями та їх попадання в рану.
            </li>
            <li>
              • Пригнічення широкого спектру мікробів, у тому числі S.
              epidermidis, Staphylococcus aureus, Е. Coli, Pseudomonas
              aeruginosa.
            </li>
            <li>
              • Шкіра пацієнта "дихає" через плівку, чим забезпечується
              щільне прилягання плівки під час найтриваліших операцій.
            </li>
            <li>
              • Плівка легко розтягується і "запам'ятовує" форму, що
              дозволяє щільно та швидко фіксувати її на рельєфних та
              рухомих ділянках.
            </li>
            <li>
              • Повна прозорість плівки забезпечує гарний огляд області
              операції.
            </li>
            <li>
              • Полегшується фіксація хірургічних простирадл навколо
              області розрізу (замість затискачів та липких стрічок).
            </li>
            <li>• Має антистатичний ефект.</li>
            <li>• Гіпоалергенна за рахунок акрилатного адгезиву.</li>
          </ul><br>
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
          всім видів хірургічних
          операцій - покриття зони операційного розрізу підвищення рівня
          асептики.<br><br>
          <strong>ПРОТИПОКАЗАННЯ:</strong><br> індивідуальна чутливість до
          йодофора.
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
        title: 'АЙОБАН Антимікробна плівка, що розрізається',
        image: require('@/assets/surgery/ayoban.jpeg'),
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
