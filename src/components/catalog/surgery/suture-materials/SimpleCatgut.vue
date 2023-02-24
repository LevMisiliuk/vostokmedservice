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
          <a href="#">Кетгут простий</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Кетгут простий</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/simple-catgut.jpeg" alt="catgut" />
                <div>
                  <strong>Склад:</strong> натуральний колагеновий матеріал з очищеної сполучної тканини підслизового шару тонкого кишечника овець<br />
                  <strong>Колір:</strong> світло-жовтий<br />
                  <strong>Механізм розсмоктування:</strong> ферментативна біодеструкція<br />
                  <strong>Реакція тканин:</strong> помірна<br />
                  <strong>Термін розсмоктування:</strong> втрата 50% міцності - через 14 діб повне розсмоктування - 60-90 діб<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  <ul>
                    <li>• Кетгут-Лінтекс відрізняється високою якістю полірування</li>
                    <li>• Легко проходить через тканини</li>
                    <li>• Має добрі маніпуляційні властивості</li>
                    <li>• Високе розривне навантаження та еластичність</li>
                    <li>• Надійно утримує вузол.</li>
                  </ul><br><br>
                  <strong>ПОКАЗАННЯ</strong><br />
                  Широка сфера застосування для апроксимації м'яких тканин та накладання лігатур. Рекомендований для накладання швів при операціях на сечовидільній та жовчовидільній системах.
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
  name: 'SimpleCatgut'
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
