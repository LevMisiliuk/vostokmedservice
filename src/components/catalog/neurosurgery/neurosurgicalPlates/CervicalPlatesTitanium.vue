<template>
  <NeurosurgeryLayuot>
    <div class="neurosurgical-plates__carts">
      <a
        v-for="cart in cervicalPlatesTitaniumCarts"
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

    const cervicalPlatesTitaniumCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin1'),
        img: require('@/assets/neurosurgery/plastin1.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin2'),
        img: require('@/assets/neurosurgery/plastin2.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin3'),
        img: require('@/assets/neurosurgery/plastin3.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin4'),
        img: require('@/assets/neurosurgery/plastin4.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin5'),
        img: require('@/assets/neurosurgery/plastin5.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin6'),
        img: require('@/assets/neurosurgery/plastin6.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin7'),
        img: require('@/assets/neurosurgery/plastin7.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin8'),
        img: require('@/assets/neurosurgery/plastin8.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin9'),
        img: require('@/assets/neurosurgery/plastin9.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin10'),
        img: require('@/assets/neurosurgery/plastin10.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin11'),
        img: require('@/assets/neurosurgery/plastin11.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin12'),
        img: require('@/assets/neurosurgery/plastin12.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin13'),
        img: require('@/assets/neurosurgery/plastin13.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin14'),
        img: require('@/assets/neurosurgery/plastin14.png'),
      },
    ])

    return {
      cervicalPlatesTitaniumCarts,
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
      height: 80%;
    }
  }

  &__cart {
    width: 300px;
    max-height: 281px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
  }

  &__cart-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    height: 20%;
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