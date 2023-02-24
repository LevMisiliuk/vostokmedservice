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
          <a href="#">Медипор плюс ПАД</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              Медипор плюс ПАД<br />
              Пластир на шовковій основі
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/medipore-plus-pad.jpeg"
                  alt="medipore plus pad."
                />
                <div>
                  Пов'язка з поглинаючою прокладкою Медипор плюс Пад є нетканою
                  еластичною пластирною основою з нанесеним гіпоалергенним
                  водовідштовхувальним клеєм і поглинаючою прокладкою. Прокладка
                  забезпечена шаром, що не прилипає до рани, тому пов'язка з
                  вбираючою прокладкою Медіпор плюс Пад (Medipore + Pad)
                  безболісно знімається. Кожна пов'язка стерильна та має
                  індивідуальне пакування. Пов'язка з поглинаючою прокладкою
                  Medipore™ + Pad є чудовою альтернативою звичним марлевим
                  пов'язкам.<br /><br />
                  <strong>Основа:</strong> нетканий поліестер.<br />
                  <strong>Адгезив:</strong> нешкідливий для шкіри
                  поліакрилат.<br />
                  <strong> Ступінь адгезії:</strong> хороша.<br /><br />

                  <strong>ПЕРЕВАГИ:</strong><br />
                  <ul>
                    <li>• Абсорбуюча прокладка, що не прилипає до рани</li>
                    <li>• Стерильна</li>
                    <li>• М'яка та зручна</li>
                    <li>• Повітропроникна.</li>
                  </ul>
                  <br>
                  <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br />
                  Закріплення первинних або вторинних пов'язок на "чисті" рани
                  зі слабкою та помірною ексудацією, включаючи хірургічні та
                  травматичні рани. Захист ділянок запровадження
                  внутрішньовенних катетерів та місць венепункції.
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
  name: 'MediporPlusPad'
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
