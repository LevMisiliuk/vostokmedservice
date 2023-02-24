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
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/plates-neurosurgical/plastiny-sheinye-titanovye`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.hPlate'),
        img: require('@/assets/neurosurgery/h-plate.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/plates-neurosurgical/plastina-h-obraznaya`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.trapezoidalPlate'),
        img: require('@/assets/neurosurgery/trapezoidal-plate.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/plates-neurosurgical/plastina-trapetsioobraznaya`
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