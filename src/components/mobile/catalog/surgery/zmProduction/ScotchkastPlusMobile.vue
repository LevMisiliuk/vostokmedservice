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
          <h4>
            Жорсткий полімерний іммобілізуючий бинт («штучний гіпс»)
          </h4>
          Полімерний бінт, що іммобілізує - штучний гіпс Скотчкаст Плюс
          Scotchcast Plus може повністю замінити гіпсову пов'язку при
          лікуванні переломів. Поєднання надзвичайної міцності Скотчкаст
          Плюс і легкості матеріалу (у 4-5 разів легше за гіпс) робить
          його використання значно комфортнішим. Матеріал нетоксичний і
          не викликає алергічних реакцій. Пропускає випари з боку шкіри
          та кисень із зовнішнього боку ("дихає"), що перешкоджає
          виникненню сверблячки та мацерації. Пов'язка із матеріалу
          штучний гіпс Scotchcast Plus не боїться вологи, тому пацієнт
          може приймати душ.<br><br>
          <span><strong>Штучний гіпс – рекомендуемі області застосування:</strong></span><br>Циркулярні пов'язки, що іммобілізують. Лонгети.
          Комбіновані пов'язки (лонгето-циркулярні). у поєднанні з
          напівжорстким іммобілізуючим бинтом ЗМ™ Softcast™ - метод
          функціональної іммобілізації в лікуванні переломів та синдрому
          діабетичної стопи. Корсети.
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
        title: 'Cкотчкаст плюс',
        image: require('@/assets/surgery/scotchcast-plus.jpeg'),
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
