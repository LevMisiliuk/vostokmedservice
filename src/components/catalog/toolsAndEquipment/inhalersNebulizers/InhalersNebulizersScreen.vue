<template>
  <ToolsAndEquipmentLayuot>
    <div class="inhalers-nebulizers__carts">
      <a
        v-for="cart in inhalersNebulizersCarts"
        :key="cart"
        class="inhalers-nebulizers__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="inhalers-nebulizers__cart-img"
        />
        <div class="inhalers-nebulizers__cart-title">
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

    const inhalersNebulizersCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerDolphin'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/compressor-inhaler-dolphin.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/komprescornyi-ingalyator-nebulaizer-delfin`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerBoreal'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/compressor-inhaler-boreal.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/komprescornyi-ingalyator-nebulaizer-boreal`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.inhaler403A'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/inhaler-403A.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/ingalyator-403a-kompressornyi`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC30'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C30.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c30-comp-a-i-r-elite`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC29'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C29.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c29-comp-a-i-r-pro`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC28'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C28.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c28-comp-a-i-r`
      },
    ])

    return {
      inhalersNebulizersCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.inhalers-nebulizers {

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