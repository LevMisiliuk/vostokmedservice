<template>
  <div class="inserts-with-angular-stability">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/`">
          {{ $t('main.carts.traumatology.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          Апарат Ілізарова
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="inserts-with-angular-stability__card">
          <h2>Апарат Ілізарова</h2>
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
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'
import HalfRing from './grid/HalfRing.vue'
import FiveandEightRing from './grid/FiveandEightRing.vue'
import RacNut from './grid/RacNut.vue'
import StandScrew from './grid/StandScrew.vue'
import LoopNut from './grid/LoopNut.vue'
import HingeScrew from './grid/HingeScrew.vue'
import LoopConnecting from './grid/LoopConnecting.vue'
import ConnectingBar from './grid/ConnectingBar.vue'
import PlankThreadedEnd from './grid/PlankThreadedEnd.vue'
import NeedleClipWithHole from './grid/NeedleClipWithHole.vue'
import ClipForNeedlesWithSlot from './grid/ClipForNeedlesWithSlot.vue'
import ClipKnittingNeedles from './grid/ClipKnittingNeedles.vue'
import ScrewBlock from './grid/ScrewBlock.vue'
import WasherBlock from './grid/WasherBlock.vue'
import HairpinBlock from './grid/HairpinBlock.vue'
import HairpinPartialThread from './grid/HairpinPartialThread.vue'
import SpokeTensioner from './grid/SpokeTensioner.vue'
import StandardRodHolder from './grid/StandardRodHolder.vue'
import RemovableRodHolder from './grid/RemovableRodHolder.vue'
import RepositioningRodHolder from './grid/RepositioningRodHolder.vue'
import CompressionDevice from './grid/CompressionDevice.vue'
import DirectorTool from './grid/DirectorTool.vue'
import CarrierBar from './grid/CarrierBar.vue'

export default {
  name: 'IlizarovApparatus',
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.corticalScrews.title'),
        image: require('@/assets/traumatology/cortical-screws.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: {
    HalfRing,
    FiveandEightRing,
    RacNut,
    StandScrew,
    LoopNut,
    HingeScrew,
    LoopConnecting,
    ConnectingBar,
    PlankThreadedEnd,
    NeedleClipWithHole,
    ClipForNeedlesWithSlot,
    ClipKnittingNeedles,
    ScrewBlock,
    WasherBlock,
    HairpinBlock,
    HairpinPartialThread,
    SpokeTensioner,
    StandardRodHolder,
    RemovableRodHolder,
    RepositioningRodHolder,
    CompressionDevice,
    DirectorTool,
    CarrierBar
  }
}
</script>

<style lang="scss" scoped>
.inserts-with-angular-stability {
  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__card {
    display: flex;
    flex-direction: column;
  }
}
</style>
