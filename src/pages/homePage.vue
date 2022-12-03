<template>
    <MqResponsive :target="['xs', 'sm']">
      <MainScreenMobile />
    </MqResponsive>
    <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
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
        preset: "bootstrap5"
      })
    })

  }

}
</script>