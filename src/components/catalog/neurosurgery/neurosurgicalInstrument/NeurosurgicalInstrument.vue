<template>
  <NeurosurgeryLayuot>
    <div class="neurosurgical-instrument__carts">
      <a
        v-for="cart in neurosurgicalInstrumentCarts"
        :key="cart"
        class="neurosurgical-instrument__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="neurosurgical-instrument__cart-img"
        />
        <div class="neurosurgical-instrument__cart-title">
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

    const neurosurgicalInstrumentCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.CLOWARD1120116016cm'),
        img: require('@/assets/neurosurgery/CLOWARD-1120116016cm.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.1120214014CM'),
        img: require('@/assets/neurosurgery/1120214014CM.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.INGE1119516016CMSMALLPATTERN'),
        img: require('@/assets/neurosurgery/INGE-1119516016CM-SMALL-PATTERN.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.INGE1119617017CM'),
        img: require('@/assets/neurosurgery/INGE-1119617017CM.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.INGELARGEPATTERN'),
        img: require('@/assets/neurosurgery/INGE-LARGE-PATTERN.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.cushing'),
        img: require('@/assets/neurosurgery/cushing.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.glowardTypeCupJaws'),
        img: require('@/assets/neurosurgery/glowardtype-cup-jaws.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.loveGruenwald'),
        img: require('@/assets/neurosurgery/love-gruenwald.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.microCupForceps'),
        img: require('@/assets/neurosurgery/micro-cup-forceps.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.microAlligatorShaft'),
        img: require('@/assets/neurosurgery/micro-alligator-shaft.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.lunbraLaminaSpreader'),
        img: require('@/assets/neurosurgery/lunbra-lamina-spreader.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.cloward1119913013CM'),
        img: require('@/assets/neurosurgery/cloward-1119913013CM.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.microGraspingSerrated'),
        img: require('@/assets/neurosurgery/micro-grasping-serrated.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.microAlligatorStraight'),
        img: require('@/assets/neurosurgery/micro-alligator-straight.png'),
        link: '/404'
      }
    ])

    return {
      neurosurgicalInstrumentCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.neurosurgical-instrument {

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    img {
      width: 100%;
      height: 70%;
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
    height: 30%;
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