<template>
  <NeurosurgeryLayuot>
    <div class="spinal-beams__carts">
      <a
        v-for="cart in spinalBeamsCarts"
        :key="cart"
        class="spinal-beams__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="spinal-beams__cart-img"
        />
        <div class="spinal-beams__cart-title">
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

    const spinalBeamsCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.staightGirder'),
        img: require('@/assets/neurosurgery/staight-girder.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-beam/pryamayabalka`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.curvedBeam'),
        img: require('@/assets/neurosurgery/curved-beam.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-beam/izognutaya-balka`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.crossBar'),
        img: require('@/assets/neurosurgery/cross-bar.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-beam/perekrestnayabalk`
      },
    ])

    return {
      spinalBeamsCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.spinal-beams {

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