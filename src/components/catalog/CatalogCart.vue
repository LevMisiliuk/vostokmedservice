<template>
  <div :class="imgPosition === 'mobile' || imgPosition === 'mobile-top' ? 'cart-mobile' : 'cart'">
    <div v-if="imgPosition === 'bottom'">
      <div class="cart__body">
        <h2 class="cart__title">
          {{ title }}
        </h2>
        <p class="cart__text">
          {{ text }}
        </p>
      </div>
      <div class="cart__more-block">
        <span>
          {{ $t('main.carts.more') }}
        </span>
      </div>
      <img class="cart__img" :src="img" alt="" />
    </div>
    <div v-if="imgPosition === 'top'">
      <img class="cart__img" :src="img" alt="" />
      <div class="cart__body">
        <h2 class="cart__title">
          {{ title }}
        </h2>
        <p class="cart__text">
          {{ text }}
        </p>
      </div>
      <div class="cart__more-block">
        <span>
          {{ $t('main.carts.more') }}
        </span>
      </div>
    </div>
    <div v-if="imgPosition === 'mobile'">
      <div class="cart__body">
        <h2 class="cart__title">
          {{ title }}
        </h2>
        <p class="cart__text">
          {{ text }}
        </p>
        <slot name="list"></slot>
      </div>
      <img class="cart__img-mobile" :src="img" alt="" />
    </div>
    <div v-if="imgPosition === 'mobile-top'">
      <img class="cart__img-mobile-top" :src="img" alt="" />
      <div class="cart__body">
        <h2 class="cart__title">
          {{ title }}
        </h2>
        <p class="cart__text">
          {{ text }}
        </p>
        <slot name="list"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogCart',
  props: {
    title: {
      type: String,
      default: 'Some default title'
    },
    text: {
      type: String,
      default: 'Some default text'
    },
    img: {
      type: String,
      default: null
    },
    imgPosition: {
      type: String,
      default: 'bottom'
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

.cart {
  position: relative;
  overflow: hidden;
  width: 310px;
  height: 420px;
  border-radius: 16px;
  color: $primary-white;
  background: linear-gradient(180deg, #039ed8 0%, #0080b0 100%);
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, #004159 0%, #0080b0 100%);

    .cart__more-block {
      opacity: 1;
    }
  }

  &__more-block {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: auto;
    height: 60px;
    background: $primary-deep-blue;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s linear;
  }

  &__body {
    padding: 30px 16px;
  }

  &__title {
    margin-bottom: 16px;
  }

  &__img {
    width: 100%;
    
    &-mobile {
      position: absolute;
      bottom: -25px;
      right: 0px;
      width: 150px;
      height: 120px;
    }
    &-mobile-top {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 100px;
    }
  }
}
.cart-mobile {
  position: relative;
  overflow: hidden;
  width: 92vw;
  height: 420px;
  border-radius: 16px;
  color: $primary-white;
  background: linear-gradient(180deg, #039ed8 0%, #0080b0 100%);
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, #004159 0%, #0080b0 100%);

    .cart__more-block {
      opacity: 1;
    }
  }

  &__more-block {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: auto;
    height: 60px;
    background: $primary-deep-blue;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s linear;
  }

  &__body {
    padding: 30px 16px;
  }

  &__title {
    margin-bottom: 16px;
  }

  &__img {
    width: 100%;
    
    &-mobile {
      position: absolute;
      bottom: -25px;
      right: 0px;
      width: 150px;
      height: 120px;
    }
    &-mobile-top {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 100px;
    }
  }
}
</style>