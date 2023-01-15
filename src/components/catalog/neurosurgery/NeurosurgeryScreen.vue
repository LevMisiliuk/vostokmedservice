<template>
  <NeurosurgeryLayuot>
    <div class="neurosurgery__carts">
      <a
        v-for="cart in neurosurgeryCarts"
        :key="cart"
        class="neurosurgery__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="neurosurgery__cart-img"
        />
        <div class="neurosurgery__cart-title">
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
    const neurosurgeryCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.links.transpedicularFixationOfTheSpine'),
        img: require('@/assets/neurosurgery/transpedicular-fixation-ofthespine.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/transpedikulyarnaya-fiksatsiya-pozvonochnika`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.links.neurosurgicalPlates'),
        img: require('@/assets/neurosurgery/neurosurgical-plates.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/plates-neurosurgical`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.links.vertebralEndoprostheses'),
        img: require('@/assets/neurosurgery/vertebral-endoprostheses.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/vertebrae-implants`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.links.neurosurgicalInstrument'),
        img: require('@/assets/neurosurgery/neurosurgica-iInstrument.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.links.antiAdhesionGel'),
        img: require('@/assets/neurosurgery/anti-adhesion-gel.png'),
        link: '/404'
      },
    ])

    return {
      neurosurgeryCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.neurosurgery {
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
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
  }

  &__cart-img {
    margin-bottom: -10px;
  }
}
</style>