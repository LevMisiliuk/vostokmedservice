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
            {{ $t('main.carts.traumatology.links.blockedPlates') }}
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="blocked-plates__inner">
        <LeftLinksMenu />
        <div class="blocked-plates__block">
          <div class="blocked-plates__carts">
            <a
              v-for="cart in traumatologyCarts"
              :key="cart"
              class="blocked-plates__cart"
              :href="cart.link"
            >
              <img
                :src="cart.img"
                alt=""
                class="blocked-plates__cart-img"
              />
              <div class="blocked-plates__cart-title">
                {{ cart.title }}
              </div>
            </a>
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
  name: 'IntramedullaryPins',
  setup() {
    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.links.smallInsertsWithAngularStability'),
        img: require('@/assets/traumatology/small-inserts-with-angular-stability.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/blockedPlates/small-inserts-with-angular-stability`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.specialInsertsWithAngularStability'),
        img: require('@/assets/traumatology/special-inserts-with-angular-stability.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.angularStabilityInserts'),
        img: require('@/assets/traumatology/angular-stability-inserts.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.largeInsertsWithAngularStability'),
        img: require('@/assets/traumatology/large-inserts-with-angular-stability.jpeg'),
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
    box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
    transition: transform 0.05s linear, -webkit-transform 0.05s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
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