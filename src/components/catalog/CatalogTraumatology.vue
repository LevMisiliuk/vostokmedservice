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
        path: `/404`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        path: `/404`
      },
      {
        name: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        path: `/404`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        path: `/404`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.ilizarovsApparatus'),
        path: `/404`
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
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        img: require('@/assets/traumatology/plates-at.png'),
        link: '/404'
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        img: require('@/assets/traumatology/needles-etc.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        img: require('@/assets/traumatology/microsurgery.png'),
        link: '/404'
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.ilizarovsApparatus'
        ),
        img: require('@/assets/traumatology/ilizarovs-apparatus.png'),
        link: '/404'
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
    margin-bottom: -10px;
  }
}
</style>