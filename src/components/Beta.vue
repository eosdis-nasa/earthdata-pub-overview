<template>
  <div id="app">
    <Testing />
    <Daacs />
    <Policy />
  </div>
</template>

<script>
import Daacs from "./Daacs.vue";
import Policy from "./Policy.vue";
import Testing from "./Testing.vue";

export default {
  name: "app",
  components: {
    Daacs,
    Policy,
    Testing,
  },
};
</script>