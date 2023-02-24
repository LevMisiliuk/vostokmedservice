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
            Спиці, стержні, серкляж
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
  name: 'NeedlesRobsCerclage',
  setup() {
    const traumatologyCarts = computed(() => [
      {
        title: 'Серкляж',
        img: require('@/assets/traumatology/cerclage.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/needles-robs-cerclage/cerclage`
      },
      {
        title: 'Спиці',
        img: require('@/assets/traumatology/needles.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/needles-robs-cerclage/needles`
      },
      {
        title: 'Стержні',
        img: require('@/assets/traumatology/robs.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/needles-robs-cerclage/robs`
      },
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
