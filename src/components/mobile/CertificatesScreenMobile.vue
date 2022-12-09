<template>
  <MobilePageWrapper>
    <div class="certificates_mobile__block">
      <h2 class="certificates_mobile__block-title">
        {{ $t('main.certificates.block.title') }}
      </h2>
      <div class="certificates_mobile__imgs">
        <img src="@/assets/certificates/certificate-1.png" alt="" />
        <img src="@/assets/certificates/certificate-2.png" alt="" />
        <img src="@/assets/certificates/certificate-3.png" alt="" />
        <img src="@/assets/certificates/certificate-4.png" alt="" />
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

.certificates_mobile {
  &__block {
    margin: 80px 0px 80px 0px;
    padding: 16px;
  }

  &__block-title {
    color: $primary-blue;
    margin-bottom: 20px;
    text-align: center;
  }
  
  &__block-text {
    font-weight: 400;
    color: #000;
    margin-bottom: 30px;
  }
  
  .p1 {
    margin-bottom: 40px;
  }
  
  .p2 {
    margin-bottom: 60px;
  }
  
  &__imgs {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    img {
      width: 100%;
    }
  }
}
</style>
