<template>
  <MobilePageWrapper>
    <div class="contacts-mobile__box">
      <h2 class="contacts-mobile__title">{{ $t('contacts.contact-us') }}</h2>
      <div class="contacts-mobile__inner">
        <a class="contacts-mobile__contact" href="tel:+38(050) 960-37-67">
          <img
            src="@/assets/svg/phone-icon.svg"
            class="contacts-mobile__contact-img"
            alt="phone"
          />
          +38(050) 960-37-67
        </a>
        <div class="contacts-mobile__contact">
          <img
            src="@/assets/svg/email-icon.svg"
            class="contacts-mobile__contact-img"
            alt="email"
          />
          <mail class="">tdomvostok@gmail.com</mail>
        </div>
      </div>
    </div>
  </MobilePageWrapper>
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
.contacts-mobile {
  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 25px !important;
    width: 100%;
  }
  &__box {
    margin: 80px 0px 50px 0px;
    padding: 16px;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: center;
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
  }
}
</style>
