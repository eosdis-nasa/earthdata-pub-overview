<template>
  <div id="app">
    <Testing />
    <Daacs />
    <Publication />
    <Steps />
    <Policy />
    <Benefits />
  </div>
</template>

<script>
import Benefits from "./Benefits.vue";
import Daacs from "./Daacs.vue";
import Policy from "./Policy.vue";
import Publication from "./Publication.vue"
import Steps from "./Steps.vue"
import Testing from "./Testing.vue";

export default {
  name: "app",
  components: {
    Benefits,
    Daacs,
    Policy,
    Publication,
    Steps,
    Testing,
  },
};
</script>