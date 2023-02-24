<template>
  <div class="blocked-plates">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/`">
          {{ $t('main.carts.traumatology.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">
            {{ $t('main.carts.traumatology.links.aoScrews') }}
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="blocked-plates__inner">
        <LeftLinksMenu />
        <div class="blocked-plates__inner-block">
          <div class="blocked-plates__block">
            <div class="blocked-plates__carts">
              <a
                v-for="cart in traumatologyCarts"
                :key="cart"
                class="blocked-plates__cart"
                :href="cart.link"
              >
                <img :src="cart.img" alt="" class="blocked-plates__cart-img" />
                <div class="blocked-plates__cart-title">
                  {{ cart.title }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'AoScrews',
  setup() {
    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.microscrews'
        ),
        img: require('@/assets/traumatology/microscrews.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/micro-screws/microscrew`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.cancellousScrews'
        ),
        img: require('@/assets/traumatology/cancellous-screws.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/sponge-screw`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.corticalScrews'
        ),
        img: require('@/assets/traumatology/cortical-screws.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/cortical-screw`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.threadResistantScrews'
        ),
        img: require('@/assets/traumatology/screws-thread-stable.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/thread-resistance-screw`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.specialScrews'
        ),
        img: require('@/assets/traumatology/special-screws.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/special-screws`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.screwsInsertsWithAngularStability'
        ),
        img: require('@/assets/traumatology/screws-for-plates-with-angular-stability.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/screws-with-inserts-for-angular-stability`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.cannulatedScrews'
        ),
        img: require('@/assets/traumatology/cannulated-screws.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      }
    ])

    return {
      traumatologyCarts
    }
  }
}
</script>

<style lang="scss" scoped>
.blocked-plates {
  &__inner {
    display: flex;
  }

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    width: 300px;
    max-height: 290px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;

    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;

    &:hover {
      transition: all 0.2s;
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }

  &__cart-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
  }

  &__cart-img {
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
  }
}
</style>
