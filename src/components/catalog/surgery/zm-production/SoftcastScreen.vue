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
          <a href="#">Софткаст</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Софткаст</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/softcast.jpeg"
                  alt="scotchcast-plus"
                />
                <div>
                  <h4>
                    Напівжорсткий полімерний бинт, що іммобілізує
                  </h4><br>
                  Напівжорсткий полімерний бинт, що іммобілізує Напівжорсткий
                  полімерний бинт, що іммобілізує Софткаст Softcast дозволяє
                  формувати пов'язки різної жорсткості. Після затвердіння
                  матеріал залишається напівжорстким і легко розрізається
                  ножицями. Матеріал еластичний, але при цьому нерозтяжний і
                  завжди набуває своєї первісної форми, завдяки чому сформована
                  пов'язка може використовуватися багаторазово. Напівжорсткий
                  полімерний бинт Софткаст Softcast має такі властивості, як
                  пористість, повітропроникність та водостійкість. Пов'язка із
                  комбінації матеріалів Scotchcast Plus та Softcast™ дозволяє
                  зберегти м'язовий тонус, знизити ризик розвитку набряків,
                  кісткової та м'язової атрофії, внаслідок чого значно
                  скорочується термін реабілітації.<br><br>
                  <span><strong>Рекомендовані області застосування:</strong></span><br>
                  Комбіновані пов'язки (лонгето-циркулярні) у
                  поєднанні з жорстким полімерним іммобілізуючим бинтом
                  Scothcast - метод функціональної іммобілізації в лікуванні
                  переломів та синдрому діабетичної стопи. Пошкодження
                  зв'язкового апарату кінцівок. Зовнішня іммобілізація після
                  занурювального остеосинтезу (за наявності показань).
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
  name: 'SoftcastScreen'
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
