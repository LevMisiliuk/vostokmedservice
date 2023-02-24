<template>
  <div class="suture-materials">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/surgery/`">
          Хірургія
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">Гемостатична губка</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Гемостатична губка</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/hemostatic-sponge.jpeg"
                  alt="hemostatic-sponge"
                />
                <div>
                  <span><strong> Склад: </strong></span><br>Губка гемостатична колагенова
                  готується з розчину колагену, отриманого з гольового спилка
                  великої рогатої худоби. До складу губки входять: борна кислота
                  – 0,0125 г та фурацилін – 0,0075 г (з розрахунку на 1 г сухої
                  губки). Чинить місцеву гемостатичну та антисептичну дію,
                  стимулює регенерацію тканин. Залишена в рані чи порожнині вона
                  повністю розсмоктується.<br>
                  <span><strong> Показання до застосування:</strong></span><br>
                  Як місцевий гемостатичний засіб при капілярних та паренхіматозних
                  кровотечах. Для тампонади синусів твердої мозкової оболонки.
                  Для зупинки кровотечі із кістково-мозкового каналу, зупинки
                  альвеолярної кровотечі після видалення зуба. Для заповнення
                  дефектів паренхіматозних органів (зокрема, після резекції
                  печінки) та для закриття ложа жовчного міхура після
                  холецистектомії.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
export default {
  name: 'HemostaticSponge'
}
</script>

<style lang="scss" scoped>
.suture-materials {
  &__inner {
    display: flex;
  }

  &__text-block {
    display: flex;
    flex-direction: row;
    gap: 40px;

    img {
      height: 100%;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    width: 300px;
    max-height: 290px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transition: all 0.2s;
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }

  &__card-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
  }

  &__card-img {
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
  }

  &__block-header {
    margin-bottom: 10px;
  }
  &__block-subtitle {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
