<template>
  <div class="catalog_mobile">
    <div class="catalog_mobile__block">
      <MainBurgerMenu/>
      <div class="catalog_mobile__block__logo">
        <router-link :to="`/${$i18n.locale}/`">
          <img src="@/assets/logo-mobile.png" alt="logo" />
        </router-link>
      </div>
      <div class="catalog_mobile__inner">
        <div></div>
        <div class="catalog_mobile__inner-links">
          <h2>Каталог</h2>
          <el-button class="button-contacts">
            <mail>Каталог травматології російською мовою</mail>
          </el-button>
          <el-button class="button-contacts">
            <mail>Новий каталог травматології</mail>
          </el-button>
          <el-button class="button-contacts">
            <mail>Каталог травматології Восток Медсервис</mail>
          </el-button>
        </div>
      </div>
    </div>
    <MainFooterMobile />
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    msg: {
      type: String,
      default: ''
    },
  },
  setup() {


    return {

    };
  },
};
</script>

<style lang="scss">
.bm-burger-bars {
  background-color: #000;
}

.catalog_mobile {
  &__block {
    display: flex;
    flex-direction: column;
    color: $primary-white;
    width: 100vw;
    height: 80vh;
  
    &-menu {
      position: absolute;
      right: 0px;
    }

    &__logo {
      display: flex;
      position: fixed;
      align-items: center;
      margin: 16px;
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
    }

    &-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
