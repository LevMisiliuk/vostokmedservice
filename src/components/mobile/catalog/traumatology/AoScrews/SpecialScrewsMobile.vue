<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
        :image="cardData[0].image"
        :title="cardData[0].title"
        :subtitle="cardData[0].subtitle"
        :productsParams="cardData[0].productsParams"
      />
      <BlockedScrew3and9 />

      <BlockedScrew4and9 />

      <BlockedScrew6and5 />

      <AntirotationScrew6and5 />

      <AnchorScrew3and5 />

      <AnchorScrew4 />

      <AnchorScrew4and5 />

      <FemoralM8 />

      <FemoralM9and5 />

      <FemoralScrewR8 />

      <FemoralScrewR9and5 />

      <HipScrew9and5 />
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {

    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.links.specialScrews'),
        image: require('@/assets/traumatology/special-screws.jpeg')
      }
    ]);

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
