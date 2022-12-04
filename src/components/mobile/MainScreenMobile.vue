<template>
  <div class="intro_mobile">
    <div class="intro_mobile__block">
      <MainBurgerMenu/>
      <div class="intro_mobile__block-menu"></div>
      <div class="intro_mobile__block__opacity"></div>
      <div class="intro_mobile__block-inner">
        <div class="intro_mobile__block__logo">
          <router-link :to="`/${$i18n.locale}/`">
            <img src="@/assets/logo-mobile.png" alt="logo" />
          </router-link>
        </div>
        <h2 class="intro_mobile__title">
          {{ $t('main.intro.movement') }}
          <span class="intro__text_blue">{{ $t('main.intro.itsLife') }}</span>
        </h2>
        <p class="intro_mobile__text">
          {{ $t('main.intro-mobile.text') }}
        </p>
        <el-button class="intro_mobile__button">
          {{ $t('main.intro.more') }}
        </el-button>
      </div>
    </div>
    <div class="carts-mobile">
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        :pagination="true"
        :modules="modules"
      >
        <swiper-slide>
          <div class="cart-mobile">
            <CatalogCart
              :title="$t('main.carts.traumatology.title')"
              :text="$t('main.carts.traumatology.text')"
              :img="require('@/assets/traumatology-img.png')"
              img-position="mobile"
            >
              <template v-slot:list>
                <ul>
                  <li
                    v-for="item in traumatologyLinks"
                    :key="item.id"
                    class="cart__list"
                  >
                    <PrimaryLink
                      :path="item.path"
                      :linkTitle="item.title"
                      :whiteCircle="true"
                      :linkSize="15"
                    />
                  </li>
                </ul>
              </template>
            </CatalogCart>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="cart-mobile">
            <CatalogCart
              :title="$t('main.carts.surgery.title')"
              :text="$t('main.carts.surgery.text')"
              :img="require('@/assets/surgery-img.png')"
              img-position="mobile"
            >
              <template v-slot:list>
                <ul>
                  <li
                    v-for="item in surgeryLinks"
                    :key="item"
                    class="cart__list"
                  >
                    <PrimaryLink
                      :path="`/${$i18n.locale}/catalog/surgery/`"
                      :linkTitle="item"
                      :whiteCircle="true"
                      :linkSize="15"
                    />
                  </li>
                </ul>
              </template>
            </CatalogCart>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="cart-mobile">
            <CatalogCart
              :title="$t('main.carts.neurosurgery.title')"
              :text="$t('main.carts.neurosurgery.text')"
              :img="require('@/assets/neurosurgery-img.png')"
              img-position="mobile"
            >
              <template v-slot:list>
                <ul>
                  <li
                    v-for="item in neurosurgeryLinks"
                    :key="item"
                    class="cart__list"
                  >
                    <PrimaryLink
                      :path="`/${$i18n.locale}/catalog/neurosurgery/`"
                      :linkTitle="item"
                      :whiteCircle="true"
                      :linkSize="15"
                    />
                  </li>
                </ul>
              </template>
            </CatalogCart>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="cart-mobile">
            <CatalogCart
              :title="$t('main.carts.toolsAndEquipment.title')"
              :text="$t('main.carts.toolsAndEquipment.text')"
              :img="require('@/assets/tools-and-equipment-img.png')"
              img-position="mobile-top"
            >
              <template v-slot:list>
                <ul>
                  <li
                    v-for="item in toolsAndEquipmentLinks"
                    :key="item"
                    class="cart__list"
                  >
                    <PrimaryLink
                      :path="`/${$i18n.locale}/catalog/tools-and-equipment/`"
                      :linkTitle="item"
                      :whiteCircle="true"
                      :linkSize="15"
                    />
                  </li>
                </ul>
              </template>
            </CatalogCart>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
    <MainFooterMobile />
  </div>
</template>

<script>
import { computed } from 'vue';
import i18n from '@/i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    msg: {
      type: String,
      default: ''
    },
  },
  setup() {
    const traumatologyLinks = computed(() => [
      {
        id: 1,
        title: i18n.global.t(
          'main.carts.traumatology.links.intramedullaryPins'
        ),
        path: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`,
      },
      {
        id: 2,
        title: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/blocked-plates`,
      },
      {
        id: 3,
        title: i18n.global.t('main.carts.traumatology.links.tool'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/tool`,
      },
      {
        id: 4,
        title: i18n.global.t('main.carts.traumatology.links.screwsAT'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/screw-at`,
      },
      {
        id: 5,
        title: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/jsc-plates`,
      },
      {
        id: 6,
        title: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        path: `/${i18n.global.locale.value}/catalog/traumatology/needles-rods-cerclage`,
      },
      {
        id: 7,
        title: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/microsurgery`,
      },
      {
        id: 8,
        title: i18n.global.t(
          'main.carts.traumatology.links.ilizarovsApparatus'
        ),
        path: `/${i18n.global.locale.value}/catalog/traumatology/ilizarovs-apparatus`,
      },
    ]);
    const surgeryLinks = computed(() => [
      i18n.global.t('main.carts.surgery.links.sutureMaterials'),
      i18n.global.t('main.carts.surgery.links.endoprosthesesPolymerNets'),
      i18n.global.t('main.carts.surgery.links.endoprosthesesForUrogynecology'),
      i18n.global.t('main.carts.surgery.links.antiAdhesiveAgents'),
      i18n.global.t('main.carts.surgery.links.woundCovers'),
      i18n.global.t('main.carts.surgery.links.hemostaticSponge'),
      i18n.global.t('main.carts.surgery.links.productsPfZMCompany'),
    ]);
    const neurosurgeryLinks = computed(() => [
      i18n.global.t(
        'main.carts.neurosurgery.links.transpedicularFixationOfTheSpine'
      ),
      i18n.global.t('main.carts.neurosurgery.links.neurosurgicalPlates'),
      i18n.global.t('main.carts.neurosurgery.links.vertebralEndoprostheses'),
      i18n.global.t('main.carts.neurosurgery.links.neurosurgicalInstrument'),
      i18n.global.t('main.carts.neurosurgery.links.antiAdhesionGel'),
    ]);
    const toolsAndEquipmentLinks = computed(() => [
      i18n.global.t(
        'main.carts.toolsAndEquipment.links.equipmentForOperatingRooms'
      ),
      i18n.global.t('main.carts.toolsAndEquipment.links.medicalFurniture'),
      i18n.global.t('main.carts.toolsAndEquipment.links.sterilization'),
      i18n.global.t('main.carts.toolsAndEquipment.links.cardiology'),
      i18n.global.t('main.carts.toolsAndEquipment.links.medicalInstrument'),
    ]);

    return {
      traumatologyLinks,
      surgeryLinks,
      neurosurgeryLinks,
      toolsAndEquipmentLinks,
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">

.intro_mobile {
  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: $primary-white;
    width: 100vw;
    height: 80vh;
    background-image: url('@/assets/main-image.png');
    background-repeat: no-repeat;
    background-size: cover;

    &-menu {
      position: absolute;
      right: 0px;
    }
  }

  &__block__opacity {
    position: absolute;
    width: 103vw;
    height: 80vh;
    background-color: #000;
    opacity: 0.7;
  }

  &__block-inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    font-size: 14px;
    text-align: center;

    img {
      width: 245px;
    }
  }

  &__title {
    margin-bottom: 10px;
    font-weight: 400;
  }

  &__text {
    width: 61%;
    font-weight: 400;
    color: #fefdfb;
    margin-bottom: 20px;

    &_blue {
      color: $primary-blue;
    }
  }

  &__button {
    position: absolute;
    left: 4%;
    bottom: 26%;
    color: $primary-black;
    width: 92vw;
    height: 48px !important;
    border-radius: 16px !important;
    padding: 11px 78px;
  }
}

.carts-mobile {
  display: flex;
  margin-top: 50px;
  .cart-mobile {
    width: 90vw;
    margin-right: 4px;
    margin-left: 10px;
    margin-bottom: 40px;
    height: 500px;
  }
}
</style>
