<template>
  <div class="intro">
    <div class="container">
      <MainHeader />
      <div class="intro__block">
        <div class="intro__block-inner">
          <h2 class="intro__title">
            {{ $t('main.intro.movement') }}
            <span class="intro__text_blue">{{ $t('main.intro.itsLife') }}</span>
          </h2>
          <p class="intro__text">
            {{ $t('main.intro.text') }}
          </p>
          <a :href="`/${$i18n.locale}/about`">
            <el-button class="intro__button">
              {{$t('main.intro.more')}}
            </el-button>
          </a>
        </div>
      </div>
      <div class="carts">
        <div class="cart">
          <CatalogCart
            :title="$t('main.carts.traumatology.title')"
            :text="$t('main.carts.traumatology.text')"
            :img="require('@/assets/traumatology-img.png')"
            img-position="bottom"
          />
          <ul>
            <li
              v-for="item in traumatologyLinks"
              :key="item.id"
              class="cart__list"
            >
              <PrimaryLink
                :path="item.path"
                :linkTitle="item.title"
                :blueCircle="true"
                :linkSize="15"
                :linkMargin="20"
              />
            </li>
          </ul>
        </div>
        <div class="cart">
          <CatalogCart
            :title="$t('main.carts.surgery.title')"
            :text="$t('main.carts.surgery.text')"
            :img="require('@/assets/surgery-img.png')"
            img-position="bottom"
          />
          <ul>
            <li v-for="item in surgeryLinks" :key="item" class="cart__list">
              <PrimaryLink
                :path="item.path"
                :linkTitle="item.title"
                :blueCircle="true"
                :linkSize="15"
                :linkMargin="20"
              />
            </li>
          </ul>
        </div>
        <div class="cart">
          <CatalogCart
            :title="$t('main.carts.neurosurgery.title')"
            :text="$t('main.carts.neurosurgery.text')"
            :img="require('@/assets/neurosurgery-img.png')"
            img-position="bottom"
          />
          <ul>
            <li
              v-for="item in neurosurgeryLinks"
              :key="item"
              class="cart__list"
            >
              <PrimaryLink
                :path="`/${$i18n.locale}/catalog/neurosurgery/`"
                :linkTitle="item"
                :blueCircle="true"
                :linkSize="15"
                :linkMargin="20"
              />
            </li>
          </ul>
        </div>
        <div class="cart">
          <CatalogCart
            :title="$t('main.carts.toolsAndEquipment.title')"
            :text="$t('main.carts.toolsAndEquipment.text')"
            :img="require('@/assets/tools-and-equipment-img.png')"
            img-position="top"
          />
          <ul>
            <li
              v-for="item in toolsAndEquipmentLinks"
              :key="item"
              class="cart__list"
            >
              <PrimaryLink
                :path="`/${$i18n.locale}/catalog/tools-and-equipment/`"
                :linkTitle="item"
                :blueCircle="true"
                :linkSize="15"
                :linkMargin="20"
              />
            </li>
          </ul>
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
  name: 'MainScreen',
  props: {
    msg: String
  },
  setup() {
    const traumatologyLinks = computed(() => [
      {
        id: 1,
        title: i18n.global.t(
          'main.carts.traumatology.links.intramedullaryPins'
        ),
        path: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`
      },
      {
        id: 2,
        title: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/blocked-plates`
      },
      {
        id: 3,
        title: i18n.global.t('main.carts.traumatology.links.tool'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/tools`
      },
      {
        id: 4,
        title: i18n.global.t('main.carts.traumatology.links.screwsAT'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws`
      },
      {
        id: 5,
        title: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/jsc-plates`
      },
      {
        id: 6,
        title: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        path: `/${i18n.global.locale.value}/catalog/traumatology/needles-rods-cerclage`
      },
      {
        id: 7,
        title: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/microsurgery`
      },
      {
        id: 8,
        title: i18n.global.t(
          'main.carts.traumatology.links.ilizarovsApparatus'
        ),
        path: `/${i18n.global.locale.value}/catalog/traumatology/ilizarovs-apparatus`
      }
    ])
    const surgeryLinks = computed(() => [
      {
        id: 1,
        title: i18n.global.t('main.carts.surgery.links.sutureMaterials'),
        path: `/${i18n.global.locale.value}/catalog/surgery/suture-materials`
      },
      {
        id: 2,
        title: i18n.global.t('main.carts.surgery.links.endoprosthesesPolymerNets'),
        path: `/${i18n.global.locale.value}/catalog/surgery/endoprostheses-polymer-meshes`
      },
      {
        id: 3,
        title: i18n.global.t('main.carts.surgery.links.endoprosthesesForUrogynecology'),
        path: `/${i18n.global.locale.value}/catalog/surgery/endoprostheses-for-urogynecology`
      },
      {
        id: 4,
        title: i18n.global.t('main.carts.surgery.links.antiAdhesiveAgents'),
        path: `/${i18n.global.locale.value}/catalog/surgery/antiadhesions`
      },
      {
        id: 5,
        title: i18n.global.t('main.carts.surgery.links.woundCovers'),
        path: `/${i18n.global.locale.value}/catalog/surgery/wound-dressings`
      },
      {
        id: 6,
        title: i18n.global.t('main.carts.surgery.links.hemostaticSponge'),
        path: `/${i18n.global.locale.value}/catalog/surgery/hemostatic-sponge`
      },
      {
        id: 7,
        title: i18n.global.t('main.carts.surgery.links.productsPfZMCompany'),
        path: `/${i18n.global.locale.value}/catalog/surgery/zm-production`
      }
    ])
    const neurosurgeryLinks = computed(() => [
      i18n.global.t(
        'main.carts.neurosurgery.links.transpedicularFixationOfTheSpine'
      ),
      i18n.global.t('main.carts.neurosurgery.links.neurosurgicalPlates'),
      i18n.global.t('main.carts.neurosurgery.links.vertebralEndoprostheses'),
      i18n.global.t('main.carts.neurosurgery.links.neurosurgicalInstrument'),
      i18n.global.t('main.carts.neurosurgery.links.antiAdhesionGel')
    ])
    const toolsAndEquipmentLinks = computed(() => [
      i18n.global.t(
        'main.carts.toolsAndEquipment.links.equipmentForOperatingRooms'
      ),
      i18n.global.t('main.carts.toolsAndEquipment.links.medicalFurniture'),
      i18n.global.t('main.carts.toolsAndEquipment.links.sterilization'),
      i18n.global.t('main.carts.toolsAndEquipment.links.cardiology'),
      i18n.global.t('main.carts.toolsAndEquipment.links.medicalInstrument')
    ])

    return {
      traumatologyLinks,
      surgeryLinks,
      neurosurgeryLinks,
      toolsAndEquipmentLinks
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  &__block {
    position: relative;
    color: $primary-white;
    width: 100%;
    border-radius: 16px;
    height: 480px;
    background-image: url('@/assets/main-image.png');
    background-repeat: no-repeat;
    background-size: cover;

    margin-bottom: 60px;
  }

  &__block-inner {
    position: absolute;
    right: 3%;
    padding-top: 80px;
    max-width: 800px;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__text {
    font-weight: 400;
    color: $primary-white;
    margin-bottom: 20px;

    &_blue {
      color: $primary-blue;
    }
  }

  &__button {
    position: absolute;
    right: 0;
    color: $primary-black;
    width: 260px;
    height: 48px;
    border-radius: 16px;
    padding: 11px 78px;
  }
}

.carts {
  display: flex;
  justify-content: space-between;

  .cart {
    margin-right: 4px;
    margin-left: 4px;
    margin-bottom: 8px;

    &__list {
      padding: 0 10px 0 10px;
    }
  }
}
</style>
