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
      <h2 style="color: #000; text-align: center;">Фторекс<br>нитка поліефірна з покриттям</h2>
          <div style="color: #000;">
            <strong>Аналоги:</strong> Ethibond, Synthofil, Supolene, Ti-cron, Polyester-S, Miralene<br />
                  <strong>Склад:</strong> поліетилентерефталат (поліефір, лавсан) з фторполімерним покриттям<br />
                  <strong>Колір:</strong> зелений, білий<br />
                  <strong>Реакція тканин:</strong> мінімальна<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  Фторполімерне покриття нитки збільшує біосумісність, повністю усуває капілярність і гніт нитки, підвищує надійність хірургічного вузла, забезпечує атравматичність при проведенні через тканини. При цьому нитка міцна, гнучка та зручна у маніпуляціях. Не вимагає накладання додаткових вузлів для надійної фіксації шва.<br><br>
                  <strong>ПОКАЗАННЯ</strong><br />
                  Широка сфера застосування (включаючи серцево-судинну хірургію) для апроксимації тканин і накладання лігатур, фіксації різних пристроїв, що імплантуються (наприклад, герніопротезів, протезів кровоносних судин, клапанів серця).
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
        title: 'фторекс',
        image: require('@/assets/surgery/fluorex.jpeg'),
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
