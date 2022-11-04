<template>
    <MqResponsive target="phone">
      <MainScreenMobile />
    </MqResponsive>
    <MqResponsive target="tablet">
    </MqResponsive>
    <MqResponsive target="laptop">
      <MainScreen />
    </MqResponsive>
</template>

<script>
import MainScreen from '@/components/mainScreens/MainScreen.vue';
import MainScreenMobile from '@/components/mobile/MainScreenMobile.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    MainScreen,
    MainScreenMobile,
    MqResponsive
  },
  setup() {
    onMounted(() => {
      updateBreakpoints({
        preset: "devices"
      })
    })

  }

}
</script>