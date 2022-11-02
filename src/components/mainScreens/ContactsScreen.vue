<template>
  <div class="contacts container">
    <MainHeader />
    <div class="contacts__inner">
      <div class="contacts__box">
        <h2 class="contacts__title">{{ $t('contacts.contact-us') }}</h2>
        <div class="contacts__phone">
          <div class="contacts__phone-inner">
            <img
              src="@/assets/svg/phone-icon.svg"
              class="contacts__img"
              alt="phone"
            />
            <span class="blue-txt">{{ $t('contacts.phone') }}</span>
          </div>
          <a class="contacts__phone-number" href="tel:+38(050) 960-37-67">
            +38(050) 960-37-67
          </a>
        </div>
        <div class="contacts__email">
          <div class="contacts__email-inner">
            <img
              src="@/assets/svg/email-icon.svg"
              class="contacts__img"
              alt="email"
            />
            <span class="blue-txt">{{ $t('contacts.email') }}</span>
          </div>
          <mail>tdvostok@mail.ru</mail>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>

export default {
  name: 'ContactsScreen',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  &__inner {
    display: flex;
    justify-content: center;
  }
  &__title {
    display: flex;
    justify-content: center;
    color: $primary-blue;
    margin-bottom: 50px;
    width: 100%;
  }
  &__img {
    margin-right: 12px;
  }
  &__box {
    width: 420px;
    height: 280px;
    padding: 40px 64px;
    background-color: $primary-white;
    border: 1px solid #c5c5c4;
    border-radius: 16px;
  }
  &__phone {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin-bottom: 20px;
    &-number {
      font-feature-settings: 'pnum' on, 'lnum' on;
    }
  }
  &__email {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>