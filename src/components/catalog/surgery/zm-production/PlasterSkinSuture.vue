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
          :to="`/${$i18n.locale}/catalog/surgery/zm-production`"
        >
          Продукція компанії ЗМ
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">Пластирний шкірний шов </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              ПЛАСТИРНИЙ ШКІРНИЙ ШОВ <br>
              Пластирний шкірний шов Стері-Стріп (Steri-Strip™) із підсилюючими
              волокнами
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/plaster-skin-suture.jpeg"
                  alt="plaster skin suture"
                />
                <div>
                  Смужки для безшовного зведення країв шкірної рани<br>
                  <strong>Основа:</strong> неткана віскоза.<br>
                  <strong>Адгезив:</strong> нешкідливий для шкіри поліакрилат.<br>
                  Адгезивні смужки посилені в поздовжньому напрямку нейлоновими
                  нитками, що сприяє більш міцному зведенню країв розривів та
                  розрізів шкіри. Пластирний шкірний шов дозволяють раніше
                  знімати шви з хірургічними нитками.<br><br>
                  <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
                  Використовуються для країв шкірної рани замість швів нитками (у поєднанні з нитками або після раннього зняття швів).
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
  name: 'PlasterSkinSuture'
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
