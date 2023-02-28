<template>
  <MobilePageWrapper>
    <div class="small-inserts-with-angular-stability_mobile__card">
      <ProductInfoCardMobile
        :image="cardData[0].image"
        :title="cardData[0].title"
        :subtitle="cardData[0].subtitle"
        :productsParams="cardData[0].productsParams"
      />
    </div>
    <LockingSmallTPlateGrid />
    <LockingSmallTPlateObliqueGrid />
    <LockingDistalMedialHumerusPlateGrid />
    <ThreadStabilizedSmallTPlateGrid />
    <ThreadStabilizedSmallTPlateObliqueGrid />
    <LockingDistalFemurPlateGrid />
    <LockingProximalTibiaPlateGrid />
    <LockingDistalMedialTibiaPlateGrid />
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {

    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/small-inserts-with-angular-stability.jpeg'),
        productsParams: [

        ]
      }
    ])

    return {
      cardData,
    }
  }
}
</script>

<style lang="scss">
.small-inserts-with-angular-stability_mobile {
  &__card {
    display: flex;
    flex-direction: column;
  }

  .card__product-data {
    text-align: right;
  }
}
</style>
