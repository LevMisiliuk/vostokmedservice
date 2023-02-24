<template>
  <ToolsAndEquipmentLayuot>
    <div class="sterilization__carts">
      <a
        v-for="cart in sterilizationCarts"
        :key="cart"
        class="sterilization__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="sterilization__cart-img"
        />
        <div class="sterilization__cart-title">
          {{ cart.title }}
        </div>
      </a>
    </div>
  </ToolsAndEquipmentLayuot>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {

    const sterilizationCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraMedium'),
        img: require('@/assets/toolsAndEquipment/uv-camera-medium.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-medium`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraLarge'),
        img: require('@/assets/toolsAndEquipment/uv-camera-large.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-large`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraSmall'),
        img: require('@/assets/toolsAndEquipment/uv-camera-small.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-small`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerNotPassable'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-not-passable.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-320-bd-neprokhodnoi-gpd-320-prokhodnoi-usovershenstvovannye-analogi-shss-250p-i-shss-250pr`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerUkraine'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-ukraine.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-20-gp-40-gp-80-ukraina`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerGP'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-GP.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-160bd-gp-640-bd-gp-1300-bd`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerSpu'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-spu.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-20-spu-gp-40-spu-gp-80-spu`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.sterilizationCabinet'),
        img: require('@/assets/toolsAndEquipment/sterilization-cabinet.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/air-sterilizer/shkaf-sushilno-sterilizatsionnyi-shs-80`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers420'),
        img: require('@/assets/toolsAndEquipment/electric-sterilizers-420.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/electric-sterilizer/sterilizator-elektricheskii-420-e-kipyatilnik`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers320'),
        img: require('@/assets/toolsAndEquipment/electric-sterilizers-320.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/electric-sterilizer/sterilizator-elektricheskii-320-e-kipyatilnik`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.sterilizationBoxesLinks.sterilizationBoxesRound'),
        img: require('@/assets/toolsAndEquipment/sterilization-boxes-round.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/boxes-sterilization-round/boxes-sterilization-round`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberBig'),
        img: require('@/assets/toolsAndEquipment/formalin-chamber-big.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/kamera-paroformalinovaya-kkhi-dlya-sterilizatsii-medizdelii-i-instrumenta-bolshaya`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberSmall'),
        img: require('@/assets/toolsAndEquipment/formalin-chamber-small.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/kamera-paroformalinovaya-kkhi-dlya-sterilizatsii-medizdelii-i-instrumenta-malaya`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator1Lamp'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-1Lamp.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-1-lampovyi-obn-75`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator2Lamp150M'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-2Lamp150M.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/reflectors-bactericidal/reflectors_bactericidal/obluchatel-bakteritsidnyi-2-lampovyi-obn-150m`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator2Lamp150MP'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-2Lamp150MP.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-2-lampovyi-obn-150mp`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator4Lamp300M'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-4Lamp300M.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-4-lampovyi-obn-300m`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator3Lamp225M'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-3Lamp225M.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-3-lampovyi-peredvizhnoi-obpe-225m`
      },
    ])

    return {
      sterilizationCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.sterilization {

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    img {
      width: 100%;
    }
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