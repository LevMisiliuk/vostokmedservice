<template>
  <div class="catalog-traumatology">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >Каталог</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>Травматология</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="catalog-traumatology__inner">
        <LeftLinksMenu :typeLink="'traumatology'" :linksData="traumatologyLinks" />
        <div class="catalog-traumatology__block">
          <div class="catalog-traumatology__carts">
            <a
              v-for="cart in traumatologyCarts"
              :key="cart"
              class="catalog-traumatology__cart"
              :href="cart.link"
            >
              <img
                :src="cart.img"
                alt=""
                class="catalog-traumatology__cart-img"
              />
              <div class="catalog-traumatology__cart-title">
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
  name: 'CatalogTraumatology',

  setup() {
    const traumatologyLinks = computed(() => [
      {
        name: i18n.global.t('main.carts.traumatology.links.intramedullaryPins'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/blocked-plates`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.tool'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/tools`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.screwsAT'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/ao-plates`
      },
      {
        name: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        path: `/${i18n.global.locale.value}/catalog/traumatology/needles-robs-cerclage`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/micro-surgery`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.ilizarovsApparatus'),
        path:  `/${i18n.global.locale.value}/catalog/traumatology/ilizarovs-apparatus`
      }
    ])

    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.intramedullaryPins'
        ),
        img: require('@/assets/traumatology/intramedullary-pins.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
        img: require('@/assets/traumatology/blocked-plates.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/blocked-plates`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.tool'),
        img: require('@/assets/traumatology/tools.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/tools`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.screwsAT'),
        img: require('@/assets/traumatology/screews-at.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        img: require('@/assets/traumatology/plates-at.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-plates`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        img: require('@/assets/traumatology/needles-etc.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/needles-robs-cerclage`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        img: require('@/assets/traumatology/microsurgery.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/micro-surgery`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.ilizarovsApparatus'
        ),
        img: require('@/assets/traumatology/ilizarovs-apparatus.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ilizarovs-apparatus`
      }
    ])

    return {
      traumatologyCarts,
      traumatologyLinks
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-traumatology {
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
    width: 300px;
    max-height: 281px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    cursor: pointer;

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
    margin-bottom: -10px;
  }
}
</style>