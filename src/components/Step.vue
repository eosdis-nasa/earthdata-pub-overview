
<template>
  <div>
    <div class="container-lg">
      <div class="row step-grid">
        <div class="number_div">
          <template v-if="step.number"><span class="number">{{step.number}}</span></template>
        </div>
        <div class="data_div">
          <template class="heading" v-if="step.heading"><p><b>{{step.heading}}</b></p></template>
          <Paragraph :text="step.text" />
          <template v-if="step.icon">
            <div class="icon_div">
              <div class="icon_box">
                <img :src="getImgUrl(step.icon)" class="icon" alt="step icon image">
              </div>
              <template v-if="step.icon_text">
                <span class="icon_text">
                  <template v-if="step.icon == 'lightbulb.svg'">Tip: </template>
                  {{step.icon_text}}
                </span>
                <template v-if="step.button && step.button.indexOf('<') !==-1">
                  <Rerender :html="step.button" />
                </template>
              </template>
            </div>
          </template>
          <template v-if="step.accordian_header && step.accordian_body">
            <Accordian :header="step.accordian_header" :body="step.accordian_body"/>
          </template>
          <template v-if="step.image && step.image_alt_text">
            <img :src="getImgUrl(step.image)" class="step_image" :alt="step.image_alt_text">
          </template>
        </div>
      </div>
    </div>
  </div>
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
  name: "Step",
  props: ['step'],
  data() {
    return {
      pic:null
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic);
    }
  },
  mounted() {
  },
};
</script>
<style scoped>
  .number_div {
    background: #2276AC 0% 0% no-repeat padding-box;
    border: 1px solid #195983;
    width: 3.75rem!important;
    height: 3.75rem;
    border-radius:50%;
    padding:.5rem;
    text-align: center;
  }
  .number {
    font: normal normal normal 32px/43px Open Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
  }
  .icon {
    color: #2276AC;
    width: 1rem;
  }
  .icon_div {
    border-radius: 8px;
    border: 1px solid #ebebeb;
    padding-left:20px;
    padding-top:10px;
    padding-bottom:10px;
    margin-top: 1.5rem;
    margin-bottom:.75rem;
    background-color:#ffffff;
    display:flex;
    align-items: center;
  }
  .icon_box {
    background: #F2FAFF 0% 0% no-repeat padding-box;
    border: 1px solid #195983;
    width: 2.5rem!important;
    height: 2.5rem;
    border-radius: 50%;
    padding: 0.35rem;
    text-align: center;
  }
  .icon_text {
    margin-left:20px;
  }
  .icon_div a {
    margin-left:20px;
  }
  .step_image {
    border: 1px solid #ebebeb;
    border-radius: 8px;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .step-grid {
    display: inline-grid;
    grid-gap: 10px;
    justify-content: space-evenly;
    grid-template-columns: auto auto;
    margin-bottom:1rem;
  }
  .step-grid .card:has(.icon_div) {
    min-height:8em;
    padding-top:3rem;
  }
</style>