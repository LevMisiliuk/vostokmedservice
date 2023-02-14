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
          <a href="#">Еслан</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Еслан</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/eslan.jpeg" alt="eslan" />
                <div>
                  <strong>Склад:</strong> лавсанові комплексні нитки діаметром 0,04 мм.<br />
                  <strong>Колір:</strong> білий<br />
                  <strong>Товщина:</strong> 0,30 мм<br />
                  <strong>Об'ємна пористість:</strong> 89%<br />
                  <strong>Поверхнева густина:</strong> 40 г/м2<br /><br>
                  Еслан виготовлений з поліефірних (лавсанових) комплексних ниток, відрізняється м'якістю та гарною моделюваністю, біостабільністю, міцністю та еластичністю, що дозволяє використовувати його при оперативних втручаннях у ситуаціях, які потребують застосування м'яких (ніжних) імплантатів. Однак, через високу капілярність (фітільність) комплексних ниток його застосування обмежене в умовах небезпеки гнійно-запальних процесів.<br><br>
                  <div>
                    <img src="@/assets/surgery/eslan-micro.jpeg" alt="eslan micro" />
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
  name: 'EslanScreen'
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
