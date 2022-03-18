<template>
  <div>
    <Daacs v-bind:daacs="daacs" />
    <Publication v-bind:publication="publication"/>
    <Steps v-bind:steps="steps" />
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

export default {
  name: "app",
  components: {
    Benefits,
    Daacs,
    Policy,
    Publication,
    Steps,
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
    fetch(`${process.env.VUE_APP_API_ROOT}/pages`)
        .then(response => response.json())
        .then(data => {
          this.benefits = data.find(page => {
            return page.page_key === 'benefits'
          }).content;
          this.daacs = data.find(page => {
            return page.page_key === 'daacs'
          }).content;
          this.policy = data.find(page => {
            return page.page_key === 'policy'
          }).content;
          this.publication = data.find(page => {
            return page.page_key === 'publication'
          }).content;
          this.steps = data.find(page => {
            return page.page_key === 'steps'
          }).content;
        })
  }
};
</script>