<template>
  <NeurosurgeryLayuot>
    <div class="vertebral-endoprostheses__carts">
      <a
        v-for="cart in vertebralEndoprosthesesCarts"
        :key="cart"
        class="vertebral-endoprostheses__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="vertebral-endoprostheses__cart-img"
        />
        <div class="vertebral-endoprostheses__cart-title">
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

    const vertebralEndoprosthesesCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.slidingLumbarVertebra'),
        img: require('@/assets/neurosurgery/sliding-lumbar-vertebra.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.slindigCervicalVertebra'),
        img: require('@/assets/neurosurgery/slindig-cervical-vertebra.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.slindigVertebraThoracicSpine'),
        img: require('@/assets/neurosurgery/slindig-vertebra-thoracicspine.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.slindigVertebraThoracicSpine2'),
        img: require('@/assets/neurosurgery/slindig-vertebra-thoracicspine2.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.lumbarIntervertebraldiscEdoprosthesis'),
        img: require('@/assets/neurosurgery/lumbar-intervertebraldisc-edoprosthesis.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.edoprosthesisCervicalIntervertebraldisc'),
        img: require('@/assets/neurosurgery/edoprosthesis-cervical-intervertebraldisc.png'),
      },
    ])

    return {
      vertebralEndoprosthesesCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.vertebral-endoprostheses {

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