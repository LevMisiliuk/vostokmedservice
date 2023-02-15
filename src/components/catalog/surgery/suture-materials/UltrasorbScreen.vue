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
        <el-breadcrumb-item
          :to="`/${$i18n.locale}/catalog/surgery/suture-materials`"
        >
          Шовні матеріали
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="#">Ультрасорб</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Ультрасорб<br>мононіт полігліколідний</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/ultrasorb.jpeg" alt="ultrasorb" />
                <div>
                  <strong>Аналоги:</strong> Мопосгуl, Махоn, Monosyn<br />
                  <strong>Склад:</strong> полігліколева (полігідрокси-ацетилова - ПГА) кислота, капролактон<br />
                  <strong>Колір:</strong> фіолетовий<br />
                  <strong>Механізм розсмоктування:</strong> гідролітичний<br />
                  <strong>Реакція тканин:</strong> мінімальна<br />
                  <strong>Термін розсмоктування:</strong> втрата 50% міцності - через 14 діб повне розсмоктування - 60-90 діб<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  Мононити Ультрасорб характеризується атравматичним проходженням крізь тканини, зручна у застосуванні, дуже міцна, еластична, некапілярна та нефітільна.<br><br>
                  <strong>ПОКАЗАННЯ</strong><br />
                  Широка сфера застосування для апроксимації м'яких тканин та накладання лігатур. Рекомендована для накладання швів при операціях на сечовидільній та жовчовидільній системах.
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
  name: 'UltrasorbScreen'
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
    box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
    transition: transform 0.05s linear, -webkit-transform 0.05s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
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
