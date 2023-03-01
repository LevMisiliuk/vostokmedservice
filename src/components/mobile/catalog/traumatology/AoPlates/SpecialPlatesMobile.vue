<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
        :image="cardData[0].image"
        :title="cardData[0].title"
        :subtitle="cardData[0].subtitle"
        :productsParams="cardData[0].productsParams"
      />
      <TShapedPlateThreadResistance />

          <TShapedPlateCurvedThreadResistance />

          <TShapedPlateEyeletThreadResistant />

          <TShapedPlateEyeletThreadResistantSecond />

          <ShoulderPlateThreadResistant />

          <UlnaPlateThreadResistant />

          <RadiusPlateThreadResistant />

          <DancePlate />

          <ToothedPlate />

          <ThoothedPlateSecond />

          <ThoothedPlateThird />

          <CondylarSupportPlate />

          <ShoulderPlate />

          <AcetabularPlate />

          <ShinPlate />
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'

export default {
  setup() {

    const cardData = computed(() => [
      {
        title: 'Спеціальні пластини',
        image: require('@/assets/traumatology/special-plates.jpeg')
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
