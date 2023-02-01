<template>
  <div class="catalog-surgery">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >Каталог</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a> {{ $t('main.carts.surgery.title') }}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="catalog-surgery__inner">
        <LeftLinksMenu :typeLink="'surgery'" :linksData="surgeryLinks" />
        <div class="catalog-surgery__block">
          <div class="catalog-surgery__block">
            <div class="catalog-surgery__carts">
              <a
                v-for="cart in surgeryCarts"
                :key="cart"
                class="catalog-surgery__cart"
                :href="cart.link"
              >
                <img :src="cart.img" alt="" class="catalog-surgery__cart-img" />
                <div class="catalog-surgery__cart-title">
                  {{ cart.title }}
                </div>
              </a>
            </div>
          </div>
          <br />
          <div class="blocked-plates__block">
            {{ $t('main.carts.surgery.textMain') }}
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
  name: 'CatalogSurgery',

  setup() {
    const surgeryLinks = computed(() => [
      {
        name: i18n.global.t('main.carts.surgery.links.sutureMaterials'),
        path: `/${i18n.global.locale.value}/catalog/surgery/suture-materials`
      },
      {
        name: i18n.global.t(
          'main.carts.surgery.links.endoprosthesesPolymerNets'
        ),
        path: `/${i18n.global.locale.value}/404`
      },
      {
        name: i18n.global.t(
          'main.carts.surgery.links.endoprosthesesForUrogynecology'
        ),
        path: `/${i18n.global.locale.value}/404`
      },
      {
        name: i18n.global.t('main.carts.surgery.links.antiAdhesiveAgents'),
        path: `/${i18n.global.locale.value}/404`
      },
      {
        name: i18n.global.t('main.carts.surgery.links.woundCovers'),
        path: `/${i18n.global.locale.value}/404`
      },
      {
        name: i18n.global.t('main.carts.surgery.links.hemostaticSponge'),
        path: `/${i18n.global.locale.value}/404`
      },
      {
        name: i18n.global.t('main.carts.surgery.links.productsPfZMCompany'),
        path: `/${i18n.global.locale.value}/404`
      }
    ])

    const surgeryCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.surgery.links.sutureMaterials'),
        img: require('@/assets/surgery/suture-materials.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: i18n.global.t(
          'main.carts.surgery.links.endoprosthesesPolymerNets'
        ),
        img: require('@/assets/surgery/endoprostheses.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: i18n.global.t(
          'main.carts.surgery.links.endoprosthesesForUrogynecology'
        ),
        img: require('@/assets/surgery/endoprostheses-for-urogenology.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: i18n.global.t('main.carts.surgery.links.antiAdhesiveAgents'),
        img: require('@/assets/surgery/antiadhesions.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: i18n.global.t('main.carts.surgery.links.woundCovers'),
        img: require('@/assets/surgery/wound-dressings.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: i18n.global.t('main.carts.surgery.links.hemostaticSponge'),
        img: require('@/assets/surgery/hemostatic-sponge.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: i18n.global.t('main.carts.surgery.links.productsPfZMCompany'),
        img: require('@/assets/surgery/zm-company-products.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      }
    ])

    return {
      surgeryLinks,
      surgeryCarts
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-surgery {
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
    width: 100%;
    object-fit: cover;
  }
}
</style>
