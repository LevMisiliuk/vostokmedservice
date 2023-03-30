<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <div class="card" style="padding: 10px">
        <el-button class="button-download-pdf">
          {{ $t('main.carts.toolsAndEquipment.medicalInstrument.links.medicalInstrumentButton') }}
        </el-button>
      </div>
    </div>
  </MobilePageWrapper>
</template>

<script>

export default {
  setup() {

    return {
    }
  }
}
</script>

<style lang="scss">
.default_mobile {
  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
  }
}
.mobile__wrapper {
  .button-download-pdf {
    width: 100%;
    height: 48px;
    text-align: center;
    margin: 0;
    border: 2px solid #00aeef;
    border-radius: 16px;
    margin-bottom: 30px;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 1vw !important;
    z-index: 0;
    margin: 0px 16px 40px 16px
  }

  .card__product-info-structure {
    display: flex;
    flex-direction: column;
    color: rgb(27, 28, 30);
  }

  .card__product-image {
    max-width: 100% !important;
  }

  .card__product-info {
    padding: 0px;
  }

  .card__product-data {
    text-align: right;
  }
}

</style>
