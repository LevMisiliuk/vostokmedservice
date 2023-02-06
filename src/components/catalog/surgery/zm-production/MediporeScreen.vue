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
              Медіпор <br>М'який еластичний пластир
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/medipore.jpeg"
                  alt="plaster skin suture"
                />
                <div>
                  М'який еластичний пластир Медіпор (МесІроге) легко набуває
                  форми будь-якої поверхні. Злегка розтягується, не травмує
                  шкіру під час набряку в області рани або руху. Перфорація
                  пластиру Медіпор зроблена через кожні 5 см, тому м'який
                  еластичний пластир Медіпор можна легко розірвати руками по
                  лінії перфорації. Чи не перешкоджає газообміну. <br>
                  <br><strong>Основа:</strong> нетканий поліестер.<br>
                  <strong>Адгезив:</strong> нешкідливий для шкіри поліакрилат.<br>
                  <strong>Ступінь адгезії:</strong> висока<br><br>
                  <strong>ПЕРЕВАГИ:</strong>
                  <ul>
                    <li>• Гіпоалергенний. о М'який.</li>
                    <li>• Легко набуває форми.</li>
                    <li>• Перфорований, тому не потрібні ножиці.</li>
                    <li>• Пористий та повітропроникний.</li>
                    <li>• Без паперової підкладки.</li>
                    <li>• Не прилипає до медичних рукавичок.</li>
                  </ul><br><br>
                  <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
                  Щільно прилеглі та
                  покривають післяопераційні пов'язки: абдомінальні,
                  ортопедичні, в акушерстві/гінекології, на молочній залозі,
                  кардіоторакальні. Щільно прилеглі та покривають пов'язки ран:
                  добре підходить для вигнутих ділянок тіла та області суглобів.
                  Для багаторазового накладання пластиру, коли вирішальним є
                  захист шкіри, що знаходиться в "зоні ризику" (пов'язки для
                  хронічних ран). Закріплення трубок, катетерів, дренажів та
                  інших виробів медичного призначення.
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
  name: 'MediporeScreen'
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
