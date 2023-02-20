<template>
  <div class="catalog">
    <div class="container">
      <MainHeader />
      <div class="catalog__inner">
        <div class="catalog__links">
          <PrimaryLink
            :linkTitle="$t('main.certificates.links.traumatology')"
            :path="`/${$i18n.locale}/catalog/traumatology`"
            :blueArrow="true"
            arrowPosition="bottom"
          />
          <PrimaryLink
            :linkTitle="$t('main.catalog.links.surgery')"
            :path="`/${$i18n.locale}/catalog/surgery`"
            :blueArrow="true"
            arrowPosition="bottom"
          />
          <PrimaryLink
            :linkTitle="$t('main.catalog.links.neurosurgery')"
            :path="`/${$i18n.locale}/catalog/neurosurgery`"
            :blueArrow="true"
            arrowPosition="bottom"
          />
          <PrimaryLink
            :linkTitle="$t('main.catalog.links.toolsAndEquipment')"
            :path="`/${$i18n.locale}/catalog/tools-and-equipment`"
            :blueArrow="true"
            arrowPosition="bottom"
          />
        </div>
        <div class="catalog__block">
          <h2 class="catalog__block-title">
            {{ $t('main.catalog.block.title') }}
          </h2>
          <div class="catalog__block-btns">
            <el-button @click="downloadPDF(catalogueRus, $t('main.catalog.block.button-1'))" class="button-download-pdf">
              {{ $t('main.catalog.block.button-1') }}
            </el-button>
            <el-button @click="downloadPDF(newTraumatologyCatalogue, $t('main.catalog.block.button-2'))" class="button-download-pdf">
              {{ $t('main.catalog.block.button-2') }}
            </el-button>
            <el-button @click="downloadPDF(Catalogue_2009_vostok, $t('main.catalog.block.button-3'))" class="button-download-pdf">
              {{ $t('main.catalog.block.button-3') }}
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import axios from 'axios'
import catalogueRus from '@/assets/pdf/catalogue-rus.pdf'
import newTraumatologyCatalogue from '@/assets/pdf/new-traumatology-catalogue.pdf'
import Catalogue_2009_vostok from '@/assets/pdf/Catalogue_2009_vostok.pdf'

export default {
  name: 'CatalogScreen',
  methods: {
    downloadPDF (url, name) {
      axios
        .get(url, { responseType: 'blob' })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', `${name}.pdf`)
          document.body.appendChild(link)
          link.click()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  setup () {
    return {
      catalogueRus,
      newTraumatologyCatalogue,
      Catalogue_2009_vostok
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  .button-download-pdf {
    width: 530px;
    height: 48px;
    text-align: center;
    margin: 0;
    border: 2px solid #00aeef;
    border-radius: 16px;
    margin-bottom: 30px;
  }
  &__inner {
    display: flex;
  }

  &__block-title {
    color: $primary-blue;
    margin-bottom: 40px;
  }

  &__links {
    display: flex;
    flex-direction: column;

    margin-right: 100px;
  }

  &__block-btns {
    display: flex;
    flex-direction: column;
  }
}
</style>
