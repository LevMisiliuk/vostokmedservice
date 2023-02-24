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
          <a href="#">Уніфлекс</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              Уніфлекс<br />мононіт полівініліденфторидний - ПВДФ
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/uniflex.jpeg" alt="uniflex" />
                <div>
                  <strong>Аналоги:</strong> Resopren, Pronova, Сoralene,
                  Marilon<br />
                  <strong>Склад:</strong> полівініліденфторид (ПВДФ)<br />
                  <strong>Колір:</strong> фіолетовий, синій<br />
                  <strong>Реакція тканин:</strong> мінімальна<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  Мононити Уніфлекс відрізняється найвищою біосумісністю серед
                  хірургічних шовних матеріалів. Вона міцна, атравматична,
                  некапілярна, нефітільна, не втрачає міцності під дією
                  тканинних рідин. ПВДФ має високі показники
                  тромборезистентності. Мононити Уніфлекс більш м'яка та гнучка,
                  ніж поліпропіленова, внаслідок чого характеризується меншим
                  ефектом пам'яті.<br /><br />

                  <strong>ПОКАЗАННЯ</strong><br />
                  Рекомендована для серцево-судинної, нейро-, офтальмо-,
                  пластичної хірургії (у тому числі для накладання знімних
                  косметичних внутрішньошкірних швів), фіксації різних
                  пристроїв, що імплантуються (герніопротезів, судинних
                  протезів).<br />
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
  name: 'UniflexScreen'
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
