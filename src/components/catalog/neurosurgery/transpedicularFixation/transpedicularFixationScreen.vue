<template>
  <NeurosurgeryLayuot>
    <div class="transpedicular-fixation__carts">
      <a
        v-for="cart in transpedicularFixationCarts"
        :key="cart"
        class="transpedicular-fixation__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="transpedicular-fixation__cart-img"
        />
        <div class="transpedicular-fixation__cart-title">
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

    const transpedicularFixationCarts = computed(() => [
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
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.connectionHook'),
        img: require('@/assets/neurosurgery/connection-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/soedinitelnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.closedPedicleHook'),
        img: require('@/assets/neurosurgery/closed-pedicle-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/zakrytyi-pedikulyarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.openPedicleHook'),
        img: require('@/assets/neurosurgery/open-pedicle-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/otkrytyi-pedikulyarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.openLaminarFlowHook'),
        img: require('@/assets/neurosurgery/open-laminar-flowhook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/otkrytyi-laminarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.closedLaminarHook'),
        img: require('@/assets/neurosurgery/closed-laminar-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/zakrytyi-laminarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.curvedLaminarHook'),
        img: require('@/assets/neurosurgery/curved-laminar-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/izognutyi-laminarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalSystemsLinks.sacredBlock'),
        img: require('@/assets/neurosurgery/sacred-block.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-system/sakralnyi-blok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalSystemsLinks.sacralScrew'),
        img: require('@/assets/neurosurgery/sacral-screw.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-system/sakralnyi-vint`
      },
    ])

    return {
      transpedicularFixationCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.transpedicular-fixation {

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