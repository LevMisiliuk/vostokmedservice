<template>
  <MqResponsive :target="['xs', 'sm']">
    <EducationScreenMobile />
  </MqResponsive>
  <MqResponsive :target="['md', 'lg', 'xl', 'xxl']">
    <EducationScreen />
  </MqResponsive>
</template>

<script>
import EducationScreen from '@/components/mainScreens/EducationScreen.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    EducationScreen,
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