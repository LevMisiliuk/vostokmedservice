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
          <a href="#">Монофіл</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Монофіл<br>мононіти поліпропіленова</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/monofil.jpeg" alt="monofil" />
                <div>
                  <strong>Аналоги:</strong> Prolene, Surgilene, Premilene, Surgipro<br />
                  <strong>Склад:</strong> поліпропілен<br />
                  <strong>Колір:</strong> синій<br />
                  <strong>Реакція тканин:</strong> мінімальна<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  Мононити біоінертна, міцна, атравматична, некапілярна, нефітільна, не втрачає міцність під дією тканинних рідин..<br><br>
                  <strong>ПОКАЗАННЯ</strong><br />
                  Рекомендована для серцево-судинної, нейро-, офтальмо-, пластичної хірургії (у тому числі для накладання знімних косметичних внутрішньошкірних швів), фіксації різних пристроїв, що імплантуються (наприклад, герніо-протезів, судинних протезів).
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
  name: 'MonofilScreen'
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
