<template>
  <div id="app">
    <Testing />
    <Daacs v-bind:daacs="daacs"/>
    <Publication v-bind:publication="publication"/>
    <Steps v-bind:steps="steps"/>
    <Policy v-bind:policy="policy"/>
    <Benefits v-bind:benefits="benefits"/>
  </div>
</template>

<script>
import Benefits from "./Benefits.vue";
import Daacs from "./Daacs.vue";
import Policy from "./Policy.vue";
import Publication from "./Publication.vue"
import Steps from "./Steps.vue"
import Testing from "./testing/Testing.vue";

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
  data() {
    return {
      benefits: [],
      daacs: [],
      policy: [],
      publication: [],
      steps: []
    };
  },
  mounted() {
    fetch(`${process.env.VUE_APP_API_ROOT}/overview`)
        .then(response => response.json())
        .then(data => {
          this.benefits = data.find(page => {
            return page.page_name === 'benefits'
          }).content;
          this.daacs = data.find(page => {
            return page.page_name === 'daacs'
          }).content;
          this.policy = data.find(page => {
            return page.page_name === 'policy'
          }).content;
          this.publication = data.find(page => {
            return page.page_name === 'publication'
          }).content;
          this.steps = data.find(page => {
            return page.page_name === 'steps'
          }).content;
        })
  }
};
</script>