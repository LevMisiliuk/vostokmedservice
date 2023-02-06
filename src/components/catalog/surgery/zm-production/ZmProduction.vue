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
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">
            Продукція компанії ЗМ
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Продукція компанії ЗМ</h2>
            <div class="suture-materials__cards">
              <a
                v-for="card in sutureMaterialsCardsFirst"
                :key="card"
                class="suture-materials__card"
                :href="card.link"
              >
                <img :src="card.img" alt="" class="suture-materials__card-img" />
                <div class="suture-materials__card-title">
                  {{ card.title }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'ZmProduction',
  setup() {
    const sutureMaterialsCardsFirst = computed(() => [
      {
        title: 'Скотчкаст Плюс',
        img: require('@/assets/surgery/scotchcast-plus.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/scotchkast-plus`
      },
      {
        title: 'Софткаст',
        img: require('@/assets/surgery/softcast.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/softcast`
      },
      {
        title: 'Айобан',
        img: require('@/assets/surgery/ayoban.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/ayoban`
      },
      {
        title: 'Кобан',
        img: require('@/assets/surgery/coban.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/coban`
      },
      {
        title: 'Пластирний шкірний шов',
        img: require('@/assets/surgery/plaster-skin-suture.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/plaster-skin-suture`
      },
      {
        title: 'Медіпор',
        img: require('@/assets/surgery/medipore.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/medipore`
      },
      {
        title: 'Транспор',
        img: require('@/assets/surgery/transpor.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/transpor`
      },
      {
        title: 'Дюрапор',
        img: require('@/assets/surgery/durapore.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'Медіпор плюс Пад',
        img: require('@/assets/surgery/medipore-plus-pad.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'Тегадерм',
        img: require('@/assets/surgery/tegaderm.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'Мікрофом',
        img: require('@/assets/surgery/microfom.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      }
    ])


    return {
      sutureMaterialsCardsFirst
    }
  }
}
</script>

<style lang="scss" scoped>
.suture-materials {
  &__inner {
    display: flex;
  }

  &__cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
