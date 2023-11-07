<template>            
  <p v-if="text && text.indexOf('<') !==-1">
    <Rerender :html="text" />
  </p>
  <p v-else-if="text">{{text}}</p>
</template>
<script>
import Rerender from './Rerender.vue';
export default {
  components: { 
    Rerender
  },
  name: "Paragraph",
  props: ["text"]
};
</script>
<style scoped>
</style>