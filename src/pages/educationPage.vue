<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop+">
    <EducationScreen />
  </MqResponsive>
</template>

<script>
import EducationScreen from '@/components/mainScreens/EducationScreen.vue';

export default {
  components: {
    EducationScreen
  }
}
</script>