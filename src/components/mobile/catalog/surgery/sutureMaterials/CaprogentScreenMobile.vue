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
      <h2 style="color: #000; text-align: center;">Капрогент<br>нитка капронова антимікробна</h2>
          <div style="color: #000;">
            <strong>Склад:</strong> капрон з антибактеріальним компонентом (гентаміцин)<br />
                  <strong>Колір:</strong> білий, синій<br />
                  <strong>Реакція тканин:</strong> мінімальна<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  Є оригінальним видом хірургічних ниток, які не мають вітчизняних та зарубіжних аналогів за тривалістю та ефективності антимікробної дії. Антимікробна активність широкого спектра обумовлена пролонгованим виділенням гентаміцину, що входить до складу нитки. Тривалість антимікробної дії нитки Капрогенту не менше 15 діб, початкова зона пригнічення мікрофлори - 25-40 мм (зростає зі збільшенням товщини нитки). Нитки міцні та еластичні. Результати застосування антимікробних ниток у хірургічній практиці показали, що кількість постопераційних гнійних ускладнень знижується у 3-5 разів у порівнянні із звичайними шовними матеріалами.<br><br>
                  <strong>ПОКАЗАННЯ</strong><br />
                  Капрогент рекомендується при хірургічних втручаннях на органах та тканинах з підвищеною мікробною обсімененістю або у разі небезпеки вторинного інфікування швів.
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
        title: 'капрогент',
        image: require('@/assets/surgery/caprogent.jpeg'),
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
