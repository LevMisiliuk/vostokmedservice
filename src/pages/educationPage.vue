<template>
  <MqResponsive target="phone">
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop">
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
        preset: "devices"
      })
    })

  }
}
</script>