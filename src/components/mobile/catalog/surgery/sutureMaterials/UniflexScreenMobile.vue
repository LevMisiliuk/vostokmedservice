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
      <h2 style="color: #000; text-align: center;">
        Уніфлекс<br />мононіт полівініліденфторидний - ПВДФ
      </h2>
          <div style="color: #000;">
            <strong>Аналоги:</strong> Resopren, Pronova, Сoralene,
            Marilon<br />
            <strong>Склад:</strong> полівініліденфторид (ПВДФ)<br />
            <strong>Колір:</strong> фіолетовий, синій<br />
            <strong>Реакція тканин:</strong> мінімальна<br /><br />
            <strong>ПЕРЕВАГИ</strong><br />
            Мононити Уніфлекс відрізняється найвищою біосумісністю серед
            хірургічних шовних матеріалів. Вона міцна, атравматична,
            некапілярна, нефітільна, не втрачає міцності під дією
            тканинних рідин. ПВДФ має високі показники
            тромборезистентності. Мононити Уніфлекс більш м'яка та гнучка,
            ніж поліпропіленова, внаслідок чого характеризується меншим
            ефектом пам'яті.<br /><br />

            <strong>ПОКАЗАННЯ</strong><br />
            Рекомендована для серцево-судинної, нейро-, офтальмо-,
            пластичної хірургії (у тому числі для накладання знімних
            косметичних внутрішньошкірних швів), фіксації різних
            пристроїв, що імплантуються (герніопротезів, судинних
            протезів).<br />
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
        title: 'уніфлекс',
        image: require('@/assets/surgery/uniflex.jpeg'),
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
