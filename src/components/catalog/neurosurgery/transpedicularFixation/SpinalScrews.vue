<template>
  <NeurosurgeryLayuot>
    <div class="spinal-screws__carts">
      <a
        v-for="cart in spinalScrewsCarts"
        :key="cart"
        class="spinal-screws__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="spinal-screws__cart-img"
        />
        <div class="spinal-screws__cart-title">
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

    const spinalScrewsCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalScrewsLinks.polyaxialScrew'),
        img: require('@/assets/neurosurgery/polyaxial-screw.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-screws/poliaksialnyi-vint`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalScrewsLinks.monoaxialScrew'),
        img: require('@/assets/neurosurgery/monoaxial-screw.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-screws/monoaksialnyi-vint`
      },
    ])

    return {
      spinalScrewsCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.spinal-screws {

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