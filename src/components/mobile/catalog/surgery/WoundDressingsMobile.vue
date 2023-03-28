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
          <h4>МЕТУРАКОЛ губка ранозаживляющая</h4>
          <span
          ><strong>Модифицированное полиэфирное волокно</strong></span
          >
          <ul>
            <li>• Активно дренує рановий ексудат</li>
            <li>• Захищає рану від зовнішніх впливів</li>
            <li>• Створює асептичні умови загоєння</li>
            <li>
              • Покращує міцнісні та маніпуляційні властивості
              пов'язки
            </li>
          </ul>
          <span><strong>Колагенова губка з антисептиком</strong></span>
          <ul>
            <li>• Стимулює загоєння</li>
            <li>• Чинить антимікробну дію</li>
            <li>
              • Забезпечує безболісну та атравматичну зміну пов'язки
            </li>
          </ul>
          <span><strong>Показання до застосування: </strong></span>
          <ul>
            <li>
              • Травми шкірних покривів та слизових (порізи, садна,
              ерозії, тріщини,потертості та ін.)
            </li>
            <li>• Опіки та відмороження</li>
            <li>• Пролежні</li>
            <li>• Трофічні виразки</li>
            <li>• Діабетична стопа</li>
            <li>• Довго не загоюються рани</li>
            <li>
              • Закриття шкірних трансплантатів та донорських ділянок
            </li>
          </ul>
          <span
          ><strong>Результати клінічнихвипробувань: </strong></span
          >
          <p>
            Клінічні випробування у НДІ Швидкої допомоги ім. Н.В.
            Скліфооовокого (Москва) та Військово-медичної академії ім.
            СМ. Кірова (Санкт-Петербург), показали високі функціональні
            та сприятливі якості Біатравма.
          </p>
          <span><strong>Переваги: </strong></span>
          <ul>
            <li>• Активно адсорбує ранове відокремлюване</li>
            <li>• Сприяє активному очищенню ран від гною</li>
            <li>• Стимулює зростання грануляційної тканини.</li>
            <li>• Прискорює процеси репарації та епітелізації</li>
            <li>• Зменшує кількість інфекційних ускладнень</li>
            <li>• Знижує болючі відчуття при зміні пов'язки</li>
            <li>
              • З Зручний для застосування у стаціонарі та в побутових
              умовах
            </li>
            <li>
              • Дозволяє скоротити кількість перев'язок та тривалість
              лікування
            </li>
            <li>• Не має побічної дії</li>
          </ul>
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
        title: 'Раневі покриття',
        image: require('@/assets/surgery/wound-dressings.jpeg'),
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
