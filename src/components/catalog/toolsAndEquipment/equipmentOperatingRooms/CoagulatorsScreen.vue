<template>
  <ToolsAndEquipmentLayuot>
    <div class="coagulators__carts">
      <a
        v-for="cart in CoagulatorsCarts"
        :key="cart"
        class="coagulators__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="coagulators__cart-img"
        />
        <div class="coagulators__cart-title">
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

    const CoagulatorsCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.coagulator'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/coagulator.png'),
        link: '/404'
      },
    ])

    return {
      CoagulatorsCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.coagulators {

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