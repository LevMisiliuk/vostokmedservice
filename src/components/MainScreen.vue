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
          <el-button class="intro__button">{{ $t('main.intro.more') }}</el-button>
        </div>
      </div>
      <div class="carts">
        <div class="cart">
          <CatalogCart
            :title="$t('main.carts.traumatology.title')"
            :text="$t('main.carts.traumatology.text')"
            :img='require("../assets/traumatology-img.png")'
            img-position="bottom"
          />
          <ul>
            <li
              v-for="item in traumatologyLinks"
              :key="item"
              class="cart__list"
            >
              <div class="blue-circle"></div>
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="cart">
          <CatalogCart
            :title="$t('main.carts.surgery.title')"
            :text="$t('main.carts.surgery.text')"
            :img='require("../assets/surgery-img.png")'
            img-position="bottom"
          />
          <ul>
            <li
              v-for="item in surgeryLinks"
              :key="item"
              class="cart__list"
            >
              <div class="blue-circle"></div>
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="cart">
          <CatalogCart
            :title="$t('main.carts.neurosurgery.title')"
            :text="$t('main.carts.neurosurgery.text')"
            :img='require("../assets/neurosurgery-img.png")'
            img-position="bottom"
          />
          <ul>
            <li
              v-for="item in neurosurgeryLinks"
              :key="item"
              class="cart__list"
            >
              <div class="blue-circle"></div>
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="cart">
          <CatalogCart
            :title="$t('main.carts.toolsAndEquipment.title')"
            :text="$t('main.carts.toolsAndEquipment.text')"
            :img='require("../assets/tools-and-equipment-img.png")'
            img-position="top"
          />
          <ul>
            <li
              v-for="item in toolsAndEquipmentLinks"
              :key="item"
              class="cart__list"
            >
              <div class="blue-circle"></div>
              <a href="#">{{ item }}</a>
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
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'
import CatalogCart from './CatalogCart.vue'
import i18n from '../i18n'
// import { useI18n } from 'vue-i18n'

export default {
  name: 'MainScreen',
  components: {
    MainHeader,
    MainFooter,
    CatalogCart,
  },
  props: {
    msg: String
  },
  setup() {
    console.log('i18n', i18n)
    const traumatologyLinks = computed(() => [
      i18n.global.t('main.carts.traumatology.links.intramedullaryPins'),
      i18n.global.t('main.carts.traumatology.links.blockedPlates'),
      i18n.global.t('main.carts.traumatology.links.tool'),
      i18n.global.t('main.carts.traumatology.links.screwsAT'),
      i18n.global.t('main.carts.traumatology.links.JSCPlates'),
      i18n.global.t('main.carts.traumatology.links.needlesRodsCerclage'),
      i18n.global.t('main.carts.traumatology.links.microsurgery'),
      i18n.global.t('main.carts.traumatology.links.ilizarovsApparatus')
    ])
    const surgeryLinks = computed(() => [
      i18n.global.t('main.carts.surgery.links.sutureMaterials'),
      i18n.global.t('main.carts.surgery.links.endoprosthesesPolymerNets'),
      i18n.global.t('main.carts.surgery.links.endoprosthesesForUrogynecology'),
      i18n.global.t('main.carts.surgery.links.antiAdhesiveAgents'),
      i18n.global.t('main.carts.surgery.links.woundCovers'),
      i18n.global.t('main.carts.surgery.links.hemostaticSponge'),
      i18n.global.t('main.carts.surgery.links.productsPfZMCompany')
    ])
    const neurosurgeryLinks = computed(() => [
      i18n.global.t('main.carts.neurosurgery.links.transpedicularFixationOfTheSpine'),
      i18n.global.t('main.carts.neurosurgery.links.neurosurgicalPlates'),
      i18n.global.t('main.carts.neurosurgery.links.vertebralEndoprostheses'),
      i18n.global.t('main.carts.neurosurgery.links.neurosurgicalInstrument'),
      i18n.global.t('main.carts.neurosurgery.links.antiAdhesionGel')
    ])
    const toolsAndEquipmentLinks = computed(() => [
      i18n.global.t('main.carts.toolsAndEquipment.links.inhalersNebulizers'),
      i18n.global.t('main.carts.toolsAndEquipment.links.equipmentForOperatingRooms'),
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
      background-image: url('../assets/main-image.png');
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
      font-weight: 300;
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
      margin: 0 4px;
      &__list {
        display: flex;
        align-items: center;
        padding: 12px;

        &:hover {
          .blue-circle {
            background-color: $primary-blue;
          }
        }
      }
      .blue-circle {
        width: 10px;
        height: 10px;
        background-color: $primary-pale-blue;
        border-radius: 50%;
        margin-right: 10px;
        transition: all .3s linear;
      }
    }
  }
</style>
