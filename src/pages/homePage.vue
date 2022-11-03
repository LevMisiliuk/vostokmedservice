<template>
    <MqResponsive target="phone">
      
    </MqResponsive>
    <MqResponsive target="tablet">
    </MqResponsive>
    <MqResponsive target="laptop+">
      <MainScreen />
    </MqResponsive>
</template>

<script>
import MainScreen from '@/components/MainScreen.vue';

export default {
  components: {
    MainScreen
  }
}
</script>