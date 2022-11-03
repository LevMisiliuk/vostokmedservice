<template>
  <MqResponsive target="phone">
    
  </MqResponsive>
  <MqResponsive target="tablet">
  </MqResponsive>
  <MqResponsive target="laptop+">
    <ContactsScreen />
  </MqResponsive>
</template>

<script>
import ContactsScreen from '@/components/mainScreens/ContactsScreen.vue';

export default {
  components: {
    ContactsScreen
  }
}
</script>