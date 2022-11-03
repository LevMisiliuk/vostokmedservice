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
import ContactsScreen from '@/components/ContactsScreen.vue';

export default {
  components: {
    ContactsScreen
  }
}
</script>