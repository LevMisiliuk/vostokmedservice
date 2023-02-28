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
        <el-breadcrumb-item
          :to="`/${$i18n.locale}/catalog/traumatology/ao-screws/`"
        >
          {{ $t('main.carts.traumatology.links.aoScrews') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item> Гвинти спеціальні </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
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
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import BlockedScrew3and9 from './grid/BlockedScrew3and9.vue'
import BlockedScrew4and9 from './grid/BlockedScrew4and9.vue'
import BlockedScrew6and5 from './grid/BlockedScrew6and5.vue'
import AntirotationScrew6and5 from './grid/AntirotationScrew6and5.vue'
import AnchorScrew3and5 from './grid/AnchorScrew3and5.vue'
import AnchorScrew4 from './grid/AnchorScrew4.vue'
import AnchorScrew4and5 from './grid/AnchorScrew4and5.vue'
import FemoralM8 from './grid/FemoralM8.vue'
import FemoralM9and5 from './grid/FemoralM9and5.vue'
import FemoralScrewR8 from './grid/FemoralScrewR8.vue'
import FemoralScrewR9and5 from './grid/FemoralScrewR9and5.vue'
import HipScrew9and5 from './grid/HipScrew9and5.vue'
import i18n from '@/i18n'

export default {
  name: 'SpongeScrews',
  components: {
    BlockedScrew3and9,
    BlockedScrew4and9,
    BlockedScrew6and5,
    AntirotationScrew6and5,
    AnchorScrew3and5,
    AnchorScrew4,
    AnchorScrew4and5,
    FemoralM8,
    FemoralM9and5,
    FemoralScrewR8,
    FemoralScrewR9and5,
    HipScrew9and5
  },
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.links.specialScrews'),
        image: require('@/assets/traumatology/special-screws.jpeg')
      }
    ])
    return {
      cardData
    }
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
