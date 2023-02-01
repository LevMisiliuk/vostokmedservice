<template>
  <div class="suture-materials">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/surgery/`">
          {{ $t('main.cards.surgery.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">
            {{ $t('main.cards.surgery.links.blockedPlates') }}
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <p>Нерозсмоктуються</p>
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
  name: 'SutureMaterials',
  setup() {
    const sutureMaterialsCardsFirst = computed(() => [
      {
        title: 'уніфлекс',
        img: require('@/assets/surgery/uniflex.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/small-inserts-with-angular-stability`
      },
      {
        title: 'моноамід',
        img: require('@/assets/surgery/monoamide.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/special-inserts-with-angular-stability`
      },
      {
        title: 'монофіл',
        img: require('@/assets/surgery/monofil.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/inserts-with-angular-stability`
      },
      // {
      //   title: 'капрон',
      //   img: require('@/assets/surgery/capron.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'лавсан',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'капрогент',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'фторлін',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'шовк',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'фторекс',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },

      // {
      //   title: 'розсмоктуються',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'капрон',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'капрон',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'капрон',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
      // {
      //   title: 'капрон',
      //   img: require('@/assets/surgery/large-inserts-with-angular-stability.jpeg'),
      //   link: `/${i18n.global.locale.value}/catalog/surgery/blockedPlates/large-inserts-with-angular-stability`
      // },
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
}
</style>
