<template>
  <div class="mobile__wrapper">
    <div class="mobile__wrapper__block">
      <MainBurgerMenu />
      <div class="mobile__wrapper__block__logo">
        <router-link :to="`/${$i18n.locale}/`">
          <img src="@/assets/logo-mobile.png" alt="logo" />
        </router-link>
      </div>
      <div class="mobile__wrapper__inner">
        <slot></slot>
      </div>
    </div>
    <MainFooterMobile />
  </div>
</template>

<script>

export default {
  setup() {


    return {

    };
  },
};
</script>

<style lang="scss" >

.mobile__wrapper {
  .burger-menu__menu svg {
    stroke: black;
  }
  &__block {
    display: flex;
    flex-direction: column;
    color: $primary-white;
    width: 100vw;
    height: fit-content;
  
    &__logo {
      display: flex;
      position: fixed;
      align-items: center;
      margin: 16px;
      z-index: 999;
      img {
        width: 152px;
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    h2 {
      color:$primary-blue;
      margin-bottom: 14px;
    }
  }
}
</style>
