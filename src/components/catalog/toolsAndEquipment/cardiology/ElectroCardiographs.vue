<template>
  <ToolsAndEquipmentLayuot>
    <div class="electro-cardiographs__carts">
      <a
        v-for="cart in electroCardiographsCart"
        :key="cart"
        class="electro-cardiographs__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="electro-cardiographs__cart-img"
        />
        <div class="electro-cardiographs__cart-title">
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

    const electroCardiographsCart = computed(() => [
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
    ])

    return {
      electroCardiographsCart,
    }
  }
}
</script>

<style lang="scss" scoped>
.electro-cardiographs {

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