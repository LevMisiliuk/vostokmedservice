<template>
      <Slide class="slide" @click="toggleDisplay" width="400">
        <span class="menu-items" v-show="display">
          <div class="intro_mobile__block__logo">
            <router-link :to="`/${$i18n.locale}/`">
              <img src="@/assets/logo-mobile.png" alt="logo" />
            </router-link>
          </div>
          <div class="burger__menu">
            <PrimaryLink
              :linkTitle="$t('header.main')"
              :path="`/${$i18n.locale}`"
            />
            <PrimaryLink
              :linkTitle="$t('header.education')"
              :path="`/${$i18n.locale}/education`"
            />
            <PrimaryLink
              :linkTitle="$t('header.certificates')"
              :path="`/${$i18n.locale}/certificates`"
            />
            <PrimaryLink
              :linkTitle="$t('header.contacts')"
              :path="`/${$i18n.locale}/contacts`"
            />
          </div>
          <el-button class="button-contacts">
            +38(050) 960-37-67
          </el-button>
          <el-button class="button-contacts">
            <mail>tdvostok@mail.ru</mail>
          </el-button>
          </span>
          <LangSelect
          :options="options"
          @select="optionSelect"
          :selected="selected"
          class="lang-select-mobile"
        />
      </Slide>
</template>

<script>
import { ref } from 'vue';
import { Slide } from 'vue3-burger-menu'

import 'swiper/css/pagination';
import 'swiper/css';

export default {
  components: {
    Slide
  },
  props: {
    msg: {
      type: String,
      default: ''
    },
  },
  setup() {
    const options = ref([
      { name: 'УКР', value: 'ua', flag: require('@/assets/ua-flag.png') },
      { name: 'ENG', value: 'en', flag: require('@/assets/en-flag.png') },
      { name: 'РУС', value: 'ru', flag: require('@/assets/ru-flag.png') }
    ])

    const selected = ref(
      localStorage.getItem('lang') === 'ua'
        ? options.value[0]
        : localStorage.getItem('lang') === 'en'
        ? options.value[1]
        : localStorage.getItem('lang') === 'ru'
        ? options.value[2]
        : options.value[0]
    )

    const display = ref(true);

    function toggleDisplay() {
      display.value = !display.value;
    }

    function optionSelect(option) {
      selected.value = option
    }

    return {
      toggleDisplay,
      display,
      options,
      selected,
      optionSelect
    };
  },
};
</script>

<style lang="scss">
.lang-select-mobile {
  left: 35%;
}

.slide {
  z-index:3;
}

.button-contacts {
    width: 75vw !important;
    height: 48px !important;
    text-align: center !important;
    margin-top: 0 !important;
    border: 2px solid #00aeef !important;
    border-radius: 16px !important;
    margin-bottom: 30px !important;
  }

.menu-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.burger__menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.bm-burger-button {
  position: fixed;
  width: 32px;
  height: 30px;
  left: 80%;
  top: 2.5%;
  cursor: pointer;
}

.bm-burger-bars {
  background-color: #fff;
}

.line-style {
  height: 10%;
}

.bm-menu {
  height: 100vh;
  background-color: #F2F2F2;
}

.cross-style {
  top: 25px;
  right: 15px;
}

.bm-item-list {
  margin: auto;
}

.intro_mobile {
  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: $primary-white;
    width: 100vw;
    height: 80vh;
    background-image: url('@/assets/main-image.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
