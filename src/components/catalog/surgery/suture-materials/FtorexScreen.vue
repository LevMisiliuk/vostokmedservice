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
          <a href="#">Фторекс</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Фторекс<br>нитка поліефірна з покриттям</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/fluorex.jpeg" alt="fluorex" />
                <div>
                  <strong>Аналоги:</strong> Ethibond, Synthofil, Supolene, Ti-cron, Polyester-S, Miralene<br />
                  <strong>Склад:</strong> поліетилентерефталат (поліефір, лавсан) з фторполімерним покриттям<br />
                  <strong>Колір:</strong> зелений, білий<br />
                  <strong>Реакція тканин:</strong> мінімальна<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  Фторполімерне покриття нитки збільшує біосумісність, повністю усуває капілярність і гніт нитки, підвищує надійність хірургічного вузла, забезпечує атравматичність при проведенні через тканини. При цьому нитка міцна, гнучка та зручна у маніпуляціях. Не вимагає накладання додаткових вузлів для надійної фіксації шва.<br><br>
                  <strong>ПОКАЗАННЯ</strong><br />
                  Широка сфера застосування (включаючи серцево-судинну хірургію) для апроксимації тканин і накладання лігатур, фіксації різних пристроїв, що імплантуються (наприклад, герніопротезів, протезів кровоносних судин, клапанів серця).
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
  name: 'FtorexScreen'
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
