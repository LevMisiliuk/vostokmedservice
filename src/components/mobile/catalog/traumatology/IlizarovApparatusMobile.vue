<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <h2 style="text-align: center;">Апарат Ілізарова</h2>
          <br />
          <HalfRing />
          <FiveandEightRing />
          <RacNut />
          <StandScrew />
          <LoopNut />
          <HingeScrew />
          <LoopConnecting />
          <ConnectingBar />
          <PlankThreadedEnd />
          <NeedleClipWithHole />
          <ClipForNeedlesWithSlot />
          <ClipKnittingNeedles />
          <ScrewBlock />
          <WasherBlock />
          <HairpinBlock />
          <HairpinPartialThread />
          <SpokeTensioner />
          <StandardRodHolder />
          <RemovableRodHolder />
          <RepositioningRodHolder />
          <CompressionDevice />
          <DirectorTool />
          <CarrierBar />
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
        title: i18n.global.t('main.carts.traumatology.corticalScrews.title'),
        image: require('@/assets/traumatology/cortical-screws.jpeg')
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
