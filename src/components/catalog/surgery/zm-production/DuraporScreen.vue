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
          <a href="#">Дюрапор</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              Дюрапор<br>
              Пластир на шовковій основі
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/durapore.jpeg" alt="durapore" />
                <div>
                  Є високоміцним багатофункціональним гіпоалергенним пластиром на шовковій основі, забезпечує надійну фіксацію найбільш складних хірургічних пов'язок. Особлива міцність фіксації пластиром Дюрапор на шовковій основі досягається завдяки рухомій структурі матеріалу. Вологопроникна основа Дюрапор не перешкоджає повітрообміну і не дозволяє накопичуватися надлишкам вологи, які можуть спричинити мацерацію рани та ослаблення адгезії.<br><br>
                  <strong>Основа:</strong> тканинний, штучний шовк.<br>
                  <strong>Адгезив:</strong> нешкідливий для шкіри поліакрилат.<br>
                  <strong> Ступінь адгезії:</strong> висока адгезія та міцність.<br><br>

                  <strong>ПЕРЕВАГИ:</strong><br>
                    Гіпоалергенний. Пористий і повітропроникний, Тканинне покриття, Легко відривається, Міцний.
                    Можна написувати, Не прилипає до медичних рукавичок.<br><br>
                  <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong>
                  Щільно прилеглі та покривають пов'язки. Прикріплення об'ємних пов'язок. Закріплення великих трубок та пристроїв: калоприймачів, грудних дренажів або ендотрахеальних трубок. Накладення шин на пальці під час переломів фаланг.
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
  name: 'DuraporScreen'
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
