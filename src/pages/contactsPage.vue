<template>
  <MqResponsive :target="['xs', 'sm', 'md', 'xl', 'xxl']">
    <ContactsScreen />
  </MqResponsive>
</template>

<script>
import ContactsScreen from '@/components/mainScreens/ContactsScreen.vue';
import { MqResponsive } from "vue3-mq";
import { onMounted } from "vue";
import { updateBreakpoints } from "vue3-mq";

export default {
  components: {
    ContactsScreen,
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