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
        <el-breadcrumb-item> Спиці </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <SpokeFirst />

          <SpokeSecond />

          <SpokeShoulder />

          <SpokeShoulderTypeK />

          <SpokeSteinman />

          <SpokeSimple />

          <PinMedialThread />

          <SpokeCondylus />

          <SpokeShoulderAndTibial />

          <KirchenersSpoke />

          <KirchenersSpokeSecond />

          <IlizarovsSpoke />

          <IlizarovsSpokeSecond />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import SpokeFirst from './grid/SpokeFirst.vue'
import SpokeSecond from './grid/SpokeSecond.vue'
import SpokeShoulder from './grid/SpokeShoulder.vue'
import SpokeShoulderTypeK from './grid/SpokeShoulderTypeK.vue'
import SpokeSteinman from './grid/SpokeSteinman.vue'
import SpokeSimple from './grid/SpokeSimple.vue'
import PinMedialThread from './grid/PinMedialThread.vue'
import SpokeCondylus from './grid/SpokeCondylus.vue'
import SpokeShoulderAndTibial from './grid/SpokeShoulderAndTibial.vue'
import KirchenersSpoke from './grid/KirchenersSpoke.vue'
import KirchenersSpokeSecond from './grid/KirchenersSpokeSecond.vue'
import IlizarovsSpoke from './grid/IlizarovsSpoke'
import IlizarovsSpokeSecond from './grid/IlizarovsSpokeSecond.vue'

export default {
  name: 'NeedlesScreen',
  setup() {
    const cardData = computed(() => [
      {
        title: 'Спиці',
        image: require('@/assets/traumatology/needles.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: {
    SpokeFirst,
    SpokeSecond,
    SpokeShoulder,
    SpokeShoulderTypeK,
    SpokeSteinman,
    SpokeSimple,
    PinMedialThread,
    SpokeCondylus,
    SpokeShoulderAndTibial,
    KirchenersSpoke,
    KirchenersSpokeSecond,
    IlizarovsSpoke,
    IlizarovsSpokeSecond
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
