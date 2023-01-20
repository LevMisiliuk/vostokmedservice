<template>
  <NeurosurgeryLayuot>
    <div class="spinal-hooks__carts">
      <a
        v-for="cart in spinalHooksCarts"
        :key="cart"
        class="spinal-hooks__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="spinal-hooks__cart-img"
        />
        <div class="spinal-hooks__cart-title">
          {{ cart.title }}
        </div>
      </a>
    </div>
  </NeurosurgeryLayuot>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {

    const spinalHooksCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.connectionHook'),
        img: require('@/assets/neurosurgery/connection-hook.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.closedPedicleHook'),
        img: require('@/assets/neurosurgery/closed-pedicle-hook.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.openPedicleHook'),
        img: require('@/assets/neurosurgery/open-pedicle-hook.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.openLaminarFlowHook'),
        img: require('@/assets/neurosurgery/open-laminar-flowhook.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.closedLaminarHook'),
        img: require('@/assets/neurosurgery/closed-laminar-hook.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.curvedLaminarHook'),
        img: require('@/assets/neurosurgery/curved-laminar-hook.png'),
        link: '/404'
      },
    ])

    return {
      spinalHooksCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.spinal-hooks {

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

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