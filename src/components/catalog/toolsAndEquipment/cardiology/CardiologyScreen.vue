<template>
  <ToolsAndEquipmentLayuot>
    <div class="cardiology__carts">
      <a
        v-for="cart in cardiologyCarts"
        :key="cart"
        class="cardiology__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="cardiology__cart-img"
        />
        <div class="cardiology__cart-title">
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

    const cardiologyCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphAksion'),
        img: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-aksion.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/elektrokardiograf-odno-trekhkanalnii-ek1t-1-3-07-aksion`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphMiniature'),
        img: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-miniature.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/elektrokardiograf-dvenadtsatikanalnyi-s-registratsiei-ekg-v-ruchnom-i-avtomaticheskom-rezhimakh-miniatyurnyi-ek-12t-01-r-d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphRDArmasoft'),
        img: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-rd-armasoft.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/elektrokardiograf-dvenadtsatikanalnyi-s-registratsiei-ekg-v-ruchnom-i-avtomaticheskom-rezhimakh-miniatyurnyi-ek-12t-01-r-d-s-programmoi-na-pk-armasoft-12-cardio`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphSingleThreeChannel'),
        img: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-single-three-channel.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/elektrokardiograf-odno-tryokhkanalnyi-miniatyurnyi-ek-3t-01-r-d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.monitorResuscitation'),
        img: require('@/assets/toolsAndEquipment/cardiology/monitor-resuscitation.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/monitor_resuscitation`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.defibrillatorMonitor'),
        img: require('@/assets/toolsAndEquipment/cardiology/defibrillator-monitor.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/defibrillyator-monitor`
      },
    ])

    return {
      cardiologyCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.cardiology {

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
    box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
    transition: transform 0.05s linear, -webkit-transform 0.05s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__cart-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    height: 78px;
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