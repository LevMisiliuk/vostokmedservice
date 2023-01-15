<template>
  <NeurosurgeryLayuot>
    <div class="neurosurgical-plates__carts">
      <a
        v-for="cart in neurosurgicalPlatesCarts"
        :key="cart"
        class="neurosurgical-plates__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="neurosurgical-plates__cart-img"
        />
        <div class="neurosurgical-plates__cart-title">
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

    const neurosurgicalPlatesCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.cervicalPlatesTitanium'),
        img: require('@/assets/neurosurgery/cervical-plates-titanium.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.hPlate'),
        img: require('@/assets/neurosurgery/h-plate.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.trapezoidalPlate'),
        img: require('@/assets/neurosurgery/trapezoidal-plate.png'),
        link: '/404'
      },
    ])

    return {
      neurosurgicalPlatesCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.neurosurgical-plates {

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    img {
      width: 100%;
      height: 85%;
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