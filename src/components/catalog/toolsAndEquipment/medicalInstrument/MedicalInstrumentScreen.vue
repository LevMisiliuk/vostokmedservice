<template>
  <ToolsAndEquipmentLayuot>
    <div class="medical-instruments__container">
      <el-button class="button-download-pdf">
        {{ $t('main.carts.toolsAndEquipment.medicalInstrument.links.medicalInstrumentButton') }}
      </el-button>
    </div>
  </ToolsAndEquipmentLayuot>
</template>

<script>

export default {
  setup() {


    return {
    }
  }
}
</script>

<style lang="scss">
.tools-equipment-layuot__block {
  width: 100%;
}

.medical-instruments {
  &__container {
    width: 100%;
    display: flex;
    justify-content: center;

    .button-download-pdf {
      width: 530px;
      height: 48px;
      text-align: center;
      margin: 0;
      border: 2px solid #00aeef;
      border-radius: 16px;
      margin-bottom: 30px;
    }
  }
}
</style>