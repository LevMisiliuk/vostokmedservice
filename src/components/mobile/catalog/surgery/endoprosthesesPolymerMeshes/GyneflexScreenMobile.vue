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
        <h2 class="suture-materials__block-header">Гінефлекс</h2>
        <div style="color: #000;">
          <strong>Склад:</strong> поліпропіленові та полівініліденфторидні мононитки діаметром 0,09 мм.<br />
          <strong>Колір:</strong> білий або біло-синій<br />
          <strong>Товщина:</strong>0,37 мм<br />
          <strong>Об'ємна пористість:</strong> 93%<br />
          <strong>Поверхнева густина:</strong> 40 г/м2<br /><br>
          Гінефлекс - полегшений ендопротез Флексілен для реконструктивної хірургії тазового дна - має виняткову гнучкість і об'ємну пористість. Завдяки поєднанню високих показників біоінертності та особливих структурно-механічних властивостей Гінефлекс забезпечує утворення у зоні імплантації тонкого, ніжного та рівномірного рубця. Ендопротез має високу стійкість до інфекції.<br><br>
          <div>
            <img src="@/assets/surgery/gyneflex-micro.jpeg" alt="gyneflex micro" />
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
        title: 'Гінефлекс',
        image: require('@/assets/surgery/gyneflex.jpeg'),
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
