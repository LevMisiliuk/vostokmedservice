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
        <h2 class="suture-materials__block-header">Есфіл Т</h2>
        <div style="color: #000;">
          <strong>Склад:</strong> полівініліденфторидні (ПВДФ) мононитки діаметром 0,12 мм.<br />
          <strong>Колір:</strong> білий або біло-синій<br />
          <strong>Товщина:</strong> 0,48 мм<br />
          <strong>Об'ємна пористість:</strong> 85%<br />
          <strong>Поверхнева густина:</strong> 160 г/м2<br /><br>
          Уніфлекс є представником нового покоління полімерних ендопротезів. Основними відмінними рисами даного ендопротезу є унікальна біологічна інертність та гнучкість. Клінічні випробування Уніфлекс показали, що застосування даного ендопротезу супроводжується мінімальною кількістю післяопераційних ускладнень.<br><br>
          <div>
            <img src="@/assets/surgery/uniflex-micro.jpeg" alt="uniflex micro" />
          </div>
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
        title: 'Есфіл Т',
        image: require('@/assets/surgery/uniflex-2.jpeg'),
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
