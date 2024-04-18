<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="steps">
    <div>
      <div class="number_div" v-if="step.number">
        <template v-if="step.number"><span class="number">{{ step.number }}</span></template>
      </div>
      <template v-if="step.paragraphs">
        <div class="data_div">
          <template v-if="step.heading">
            <template v-if="step.heading && step.heading.indexOf('<') !== -1">
              <p><b>
                  <Rerender :html="step.heading" />
                </b></p>
            </template>
            <template v-else-if="step.heading">
              <p><b>{{ step.heading }}</b></p>
            </template>
          </template>
          <template v-for="(step_item, index) in step.paragraphs" :key="index">
            <StepItems v-bind:step="step_item" />
          </template>
        </div>
      </template>
      <template v-else>
        <div class="data_div">
          <StepItems v-bind:step="step" />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import Rerender from './Rerender.vue';
import StepItems from './StepItems.vue';

export default {
  components: {
    Rerender,
    StepItems
  },
  name: 'Step',
  props: ['step'],
  data() {
    return {
      pic: null
    };
  },
  methods: {
    getImgUrl(pic) {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../assets/${pic}`);
    }
  },
  mounted() {
  }
};
</script>
<style scoped>
.number_div {
  background: #2276AC 0% 0% no-repeat padding-box;
  border: 1px solid #195983;
  width: 3.75rem !important;
  height: 3.75rem;
  border-radius: 50%;
  padding: .5rem;
  text-align: center;
}

.data_div {
  margin-top: -3.75rem;
  margin-left: 3.75rem;
  padding-left: .5rem;
}

.number {
  font: normal normal normal 32px/43px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

.data_div> :last-child {
  margin-bottom: 1rem;
}

.data_div,
.data_div p,
.data_div div {
  margin-bottom: 1rem;
}

.steps {
  margin-top: 1rem;
}
</style>
