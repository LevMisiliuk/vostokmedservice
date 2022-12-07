<template>
  <div class="burger-menu">
    <nav>
      <div class="burger-menu__wrap">
        <button
          @click="toggleMenu"
          class="burger-menu__menu"
          :class="{ active: isActive }"
        >
          <svg viewBox="0 0 64 48">
            <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
            <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
            <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
          </svg>
        </button>
      </div>
    </nav>
    <div
      class="burger-menu__dropdown"
      :class="{ 'burger-menu__dropdown-after': isActive }"
    >
      <div class="burger-menu__dropdown-content">
        <router-link :to="`/${$i18n.locale}/`" class="burger-menu__dropdown-content-item">
          <img src="@/assets/logo-mobile.png" alt="logo" />
        </router-link>
        <div class="burger-menu__dropdown-content-items">
          <PrimaryLink
            :linkTitle="$t('header.main')"
            :path="`/${$i18n.locale}`"
            class="burger-menu__dropdown-content-item"
          />
          <PrimaryLink
            :linkTitle="$t('header.catalog')"
            :path="`/${$i18n.locale}/catalog`"
            class="burger-menu__dropdown-content-item"
          />
          <PrimaryLink
            :linkTitle="$t('header.education')"
            :path="`/${$i18n.locale}/education`"
            class="burger-menu__dropdown-content-item"
          />
          <PrimaryLink
            :linkTitle="$t('header.certificates')"
            :path="`/${$i18n.locale}/certificates`"
            class="burger-menu__dropdown-content-item"
          />
          <PrimaryLink
            :linkTitle="$t('header.contacts')"
            :path="`/${$i18n.locale}/contacts`"
            class="burger-menu__dropdown-content-item"
          />
        </div>
        <a class="burger-menu__contact" href="tel:+38(050) 960-37-67">
          <img
            src="@/assets/svg/phone-icon.svg"
            class="burger-menu__contact-img"
            alt="phone"
          />
          +38(050) 960-37-67
        </a>
        <div class="burger-menu__contact">
          <img
            src="@/assets/svg/email-icon.svg"
            class="burger-menu__contact-img"
            alt="email"
          />
          <mail class="">tdvostok@mail.ru</mail>
        </div>
        <div class="burger-menu__contact-langs">
          <ChooseLangButton
            :language="'УКР'"
            :flag="require('@/assets/ua-flag.png')"
            @click="setLocale('ua')"
          />
          <ChooseLangButton
            :language="'РУС'"
            :flag="require('@/assets/ru-flag.png')"
            @click="setLocale('ru')"
          />
          <ChooseLangButton
            :language="'ENG'"
            :flag="require('@/assets/en-flag.png')"
            @click="setLocale('en')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ChooseLangButton from '@/components/auxiliaryComponents/ChooseLangButton.vue'
import i18n from '@/i18n'
import router from '@/routes'

export default {
  components: {
    ChooseLangButton
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    function toggleMenu() {
      isActive.value = !isActive.value
      document.body.classList.toggle('active'); //removing scroll when we have burger menu active
    }

    function setLocale(locale) {
      localStorage.setItem('lang', locale)
      i18n.global.locale.value = locale
      router.push({
        params: { lang: locale }
      })
    }

    const isActive = ref(false)

    return {
      isActive,
      toggleMenu,
      setLocale
    }
  }
}
</script>

<style lang="scss">
.burger-menu {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;

  &__wrap {
    position: fixed;
    z-index: 1000;
    width: 100%;
    margin-top: 0;
  }

  &__dropdown {
    height: 0px;
    background-color: #fff;
    transition: height 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      &-items {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 32px;
      }

      &-item {
        margin-bottom: 32px;
      }
    }
  }

  &__dropdown-after {
    position: fixed;
    height: calc(110vh);
    width: 100%;
    transition: height 0.2s ease;
    display: flex;
    align-items: flex-start;
    padding: 64px 37px;
  }

  &__wrap {
    display: flex;
    justify-content: flex-end;
  }

  &__menu {
    --color: #fff;
    width: 36px;
    height: 36px;
    padding: 0;
    margin: 12px 18px 0 0;
    outline: none;
    position: relative;
    right: 0;
    border: none;
    background: none;
    cursor: pointer;
    -webkit-appearence: none;
    -webkit-tap-highlight-color: transparent;
    svg {
      width: 64px;
      height: 48px;
      top: -6px;
      left: -14px;
      stroke: var(--color);
      stroke-width: 4px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      display: block;
      position: absolute;
      path {
        transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease)
            var(--delay, 0s),
          stroke-dashoffset var(--duration, 0.85s) var(--easing, ease)
            var(--delay, 0s);
        stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
        stroke-dashoffset: var(--offset, 126px);
        transform: translateZ(0);
        &:nth-child(2) {
          --duration: 0.7s;
          --easing: ease-in;
          --offset: 100px;
          --array-2: 74px;
        }
        &:nth-child(3) {
          --offset: 133px;
          --array-2: 107px;
        }
      }
    }
    &.active {
      svg {
        stroke: gray;
        path {
          --offset: 57px;
          &:nth-child(1),
          &:nth-child(3) {
            --delay: 0.15s;
            --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
          }
          &:nth-child(2) {
            --duration: 0.4s;
            --offset: 2px;
            --array-1: 1px;
          }
          &:nth-child(3) {
            --offset: 58px;
          }
        }
      }
    }
  }

  &__contact {
    width: 100%;
    padding: 11px 64px;
    height: 100%;
    text-align: center;
    margin-top: 0;
    border: 2px solid #00aeef;
    border-radius: 16px;
    margin-bottom: 30px;
    color: $primary-black;
    margin-bottom: 40px;
    white-space: nowrap;

    &-img {
      margin-right: 18px;
    }

    &-langs {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>
