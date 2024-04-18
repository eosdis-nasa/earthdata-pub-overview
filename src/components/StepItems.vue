<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable max-len -->
<template>
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
  <Paragraph :text="step.text" />
  <template v-if="step.accordian_header && step.accordian_body">
    <Accordian :header="step.accordian_header" :body="step.accordian_body" />
  </template>
  <template v-if="step.paragraph">
    <Paragraph :text="step.paragraph" />
  </template>
  <template v-if="step.icon">
    <div class="icon_div">
      <div class="icon_box">
        <img :src="getImgUrl(step.icon)" class="icon" alt="step icon image">
      </div>
      <template v-if="step.icon_text">
        <span class="icon_text">
          <template v-if="step.icon == 'lightbulb.svg'"><span class="tip">Tip:&nbsp;&nbsp;</span></template>
          <template v-else-if="step.icon == 'sticky-note.svg'"><span
              class="sticky-note">Note:&nbsp;&nbsp;</span></template>
          <template v-if="step.icon_text && step.icon_text.indexOf('<') !== -1">
            <Rerender :html="step.icon_text" />
          </template>
          <template v-else>
            {{ step.icon_text }}
          </template>
        </span>
        <template v-if="step.button && step.button.indexOf('<') !== -1">
          <Rerender :html="step.button" />
        </template>
      </template>
    </div>
  </template>
  <template v-if="step.image && step.image_alt_text">
    <img :src="getImgUrl(step.image)" class="step_image" :alt="step.image_alt_text">
  </template>
</template>
<script>
import Rerender from './Rerender.vue';
import Accordian from './Accordian.vue';
import Paragraph from './Paragraph.vue';

export default {
  components: {
    Rerender,
    Accordian,
    Paragraph
  },
  name: 'StepItems',
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
.icon {
  color: #2276AC;
  width: initial !important;
}

.icon_div {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.icon_box {
  background: #F2FAFF 0% 0% no-repeat padding-box;
  border: 1px solid #195983;
  width: 2.5rem !important;
  height: 2.5rem;
  border-radius: 50%;
  padding: 0.35rem;
  text-align: center;
}

.icon_text {
  margin-left: 20px;
}

.icon_div a {
  margin-left: 20px;
}

.step_image {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
