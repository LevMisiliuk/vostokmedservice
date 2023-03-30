<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="gynecologicalChairElectricDriveData[0].image"
          :title="gynecologicalChairElectricDriveData[0].title"
          :subtitle="gynecologicalChairElectricDriveData[0].subtitle"
          :productsParams="gynecologicalChairElectricDriveData[0].productsParams"
      />
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const gynecologicalChairElectricDriveData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairElectricDrive'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairElectricDrive.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-electricdrive.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairElectricDrive.dataLeft1'),
            data: "550–1300",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairElectricDrive.dataLeft2'),
            data: "	600",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairElectricDrive.dataLeft3'),
            data: "0-90",
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairElectricDrive.dataLeft4'),
            data: "600",
          }
        ]
      }
    ])
    return {
      gynecologicalChairElectricDriveData,
    }
  }
}
</script>

<style lang="scss">
.default_mobile {
  &__card {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
}
.mobile__wrapper {
  .card {
    display: flex;
    flex-direction: column;
    min-width: 1vw !important;
    z-index: 0;
    margin: 0px 16px 40px 16px
  }

  .card__product-info-structure {
    display: flex;
    flex-direction: column;
    color: rgb(27, 28, 30);
  }

  .card__product-image {
    max-width: 100% !important;
  }

  .card__product-info {
    padding: 0px;
  }

  .card__product-data {
    text-align: right;
  }
}

</style>
