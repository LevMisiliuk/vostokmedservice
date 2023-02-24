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
          <a href="#">Мікрофом</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              Мікрофом<br />Еластичний гіпоалергенний пластир
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/microfom.jpeg" alt="micrafom" />
                <div>
                  Еластичний гіпоалергенний пластир Мікрофом, що приймає
                  будь-яку форму, ідеально підходить для компресійних та
                  ортопедичних пов'язок. М'яка еластична основа пластиру
                  Мікрофом (М1сго№ат) не викликає сильного натягу шкіри, як при
                  використанні звичайного пластиру. Завдяки пружності та
                  розтяжності по всіх напрямках забезпечує щільне прилягання
                  пов'язки на будь-якій поверхні, не залишає слідів клею після
                  видалення. Еластичний мікрогубчастий пластир Мікрофом
                  непроникний для рідин та мікроорганізмів, але не перешкоджає
                  повітрообміну.<br /><br />
                  <strong>Основа:</strong> спінений полівінілхлорид.<br />
                  <strong>Адгезив:</strong> нешкідливий для шкіри поліакрилат.<br />
                  <strong>Ступінь адгезії:</strong> міцна.<br /><br />
                  <strong>ПЕРЕВАГИ:</strong><br>
                  <ul>
                    <li>• Гіпоалергенний</li>
                    <li>• Легко приймає потрібну форму</li>
                    <li>• Водонепроникний</li>
                    <li>• Можна написувати</li>
                    <li>• Не прилипає до медичних рукавичок</li>
                  </ul><br><br>
                  <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
                  У травматології та ортопедії: для захисту кісткових виступів при накладенні
                  іммобілізуючих пов'язок. Щільно прилеглі та покриваючі
                  післяопераційні пов'язки: абдомінальні, торакальні та
                  ортопедичні. Для післяопераційної компресії. Для вторинного
                  шва. Для здавлення над ділянками серцево-судинних
                  втручань/ангіопластики, операцій на молочній залозі. У
                  косметології.
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
  name: 'MicroFom'
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
