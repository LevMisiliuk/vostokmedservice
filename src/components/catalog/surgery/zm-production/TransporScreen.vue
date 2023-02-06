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
          <a href="#">Айобан</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              ТРАНСПОР<br />
              Пластир Транспор (Transpor) на основі прозорого перфорованого
              пластику.
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/transpor.jpeg"
                  alt="plaster skin suture"
                />
                <div>
                  Пластикова гіпоалергенна основа пластиру Транспор (Тгаперого)
                  перфорована, що забезпечує вільний газообмін з поверхні шкіри.
                  Пластир легко рветься руками. Прозорість основи пластиру
                  Транспор дозволяє здійснювати візуальний контроль за місцем
                  фіксації та забезпечує косметичний ефект.<br /><br />
                  <strong>Основа:</strong> пориста плівка - сополімер етилену та
                  вінілацетату.<br />
                  <strong>Адгезив:</strong> шкідливий для шкіри поліакрилат.<br />
                  <strong>Ступінь адгезії:</strong> хороша.<br><br>
                  <strong>ПЕРЕВАГИ:</strong>
                  <ul>
                    <li>• Гіпоалергенний.</li>
                    <li>
                      • Можливість розриву в поздовжньому та поперечному напрямках
                      дозволяє легко робити хвостові надрізи.
                    </li>
                    <li>
                      • Пористий та повітропроникний пластир Транспор. Прозорий,
                      про Надійно фіксує, Не прилипає до медичних рукавичок.
                    </li>
                  </ul><br>
                  <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
                  Прикріплення об'ємних пов'язок, наприклад, пов'язок на очах.
                  Закріплення трубок та пристроїв: внутрішньовенних катетерів,
                  дренажів, назогастральних трубок, сечових катетерів.
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
  name: 'TransporScreen'
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
