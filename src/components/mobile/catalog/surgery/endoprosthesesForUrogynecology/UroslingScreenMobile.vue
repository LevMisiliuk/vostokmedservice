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
        <h2 class="suture-materials__block-header">Урослінг</h2>
        <div style="color: #000;">
          <strong>Склад:</strong> поліпропіленові та
          полівініліденфторидні мононитки діаметром 0,10 мм.<br />
          <strong>Колір:</strong> білий або біло-синій<br />
          <strong>Товщина:</strong> 0,5 мм<br />
          <strong>Об'ємна пористість:</strong> 72%<br />
          <strong>Поверхнева густина:</strong> 60 г/м2<br />

          УроСлінг - ендопротез-стрічка для хірургічного лікування
          нетримання сечі - унікальним чином поєднує в собі високу
          біологічну інертність, стійкість до інфекції, стабільність
          структури, м'якість та атравматичність. Важливою особливістю
          УроСлінга є його універсальність: він може застосовуватися як
          позадилонної, так і в трансобтураторній модифікації слінгових
          операцій, причому без використання при установці спеціальних
          захисних чохлів. Ендопротез швидко проростає сполучною
          тканиною і надійно фіксується до навколишніх структур.<br /><br />

          <strong>ПОКАЗАННЯ</strong><br />
          Хірургічне лікування нетримання сечі (установка синтетичного
          субуретрального слінгу в позадилонному та трансобтураторному
          положенні).<br><br>

          <strong>ПРОТИПОКАЗАННЯ</strong><br />
          Не рекомендується застосування синтетичних ендопротезів за
          умов інфекційного процесу у тканинах. Стерилізація Окис
          етилену (ЕО).<br><br>

          <strong>АСОРТИМЕНТ</strong><br />
          Сітчастий стерильний ендопротез в індивідуальній упаковці
          розміром 1,1 т 1,3 х 50 см.
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
        title: 'Урослінг',
        image: require('@/assets/surgery/urosling.jpeg'),
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
