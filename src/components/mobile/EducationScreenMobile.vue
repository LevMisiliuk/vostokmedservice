<template>
  <MobilePageWrapper>
    <div class="education_mobile__block">
      <h2 class="education_mobile__block-title">
        {{ $t('main.education.block.title') }}
      </h2>
      <p class="education_mobile__block-text p1">
        {{ $t('main.education.block.text-p1') }}
      </p>
      <p class="education_mobile__block-text p2">
        {{ $t('main.education.block.text-p2') }}
      </p>
      <div class="education_mobile__imgs">
        <img src="@/assets/education-1.png" alt="" />
        <img src="@/assets/education-2.png" alt="" />
        <img src="@/assets/education-3.png" alt="" />
        <img src="@/assets/education-4.png" alt="" />
        <img src="@/assets/education-5.png" alt="" />
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

.education_mobile {
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
