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
          :to="`/${$i18n.locale}/catalog/surgery/endoprostheses-polymer-meshes`"
        >
          Ендопротези – сітки полімерні
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="#">Есфіл Т</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Есфіл Т</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/esfilt.jpeg" alt="esfilt" />
                <div>
                  <strong>Склад:</strong> поліпропіленові мононіти діаметром 0,14 мм<br />
                  <strong>Колір:</strong> білий або біло-синій<br />
                  <strong>Товщина:</strong> 0,65 мм<br />
                  <strong>Об'ємна пористість:</strong> 80%<br />
                  <strong>Поверхнева густина:</strong> 95 г/м2<br /><br>
                  Есфіл Т - "важкий" відрізняється підвищеною міцністю, що дозволяє з впевненістю застосовувати його у складних клінічних випадках, коли інші ендопротези можуть не витримати навантаження. Ендопротез біологічно інертний і стійкий до інфекції.<br><br>
                  <div>
                    <img src="@/assets/surgery/esfilt-micro.jpeg" alt="esfilt micro" />
                  </div>
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
  name: 'EsfilT'
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
