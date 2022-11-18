<template class="accordian">            
  <div class="eui-accordion">
    <header class="eui-accordion__header">
      <h6 class="accordian_header" :id="`${header.toLowerCase().replace(/ /g,'_')}_heading`" @click="toggleAccordian(`${header.toLowerCase().replace(/ /g,'_')}`)">
        {{header}}
        <i class="eui-icon eui-fa-chevron-circle-down"></i>
        <div class="eui-accordion__icon" tabindex="0">
          <span class="eui-sr-only">
            Toggle {{header}}
          </span>
        </div>
        <div class="eui-accordion__body hidden" :id="`${header.toLowerCase().replace(/ /g,'_')}`">
          <br>
          <span v-if="body.indexOf('<') !==-1">
            <Rerender :html="body" />
          </span>
          <span v-else>{{body}}</span>
        </div>
      </h6>
    </header>
  </div>
</template>
<script>
import Rerender from './Rerender.vue';
export default {
  components: { 
    Rerender,
  },
  name: "Accordian",
  props: ["header", "body"],
  methods: {
    toggleAccordian(id) {
      let icon_element = document.querySelectorAll(`#${id}_heading i`)[0]
      let lid = document.getElementById(id)
      if (lid !== null && lid!==undefined) {
        if(lid.classList.contains('active')){
          lid.classList.remove('active')
          lid.classList.add('hidden')
          if (icon_element !==undefined && icon_element.classList !== undefined) {
            icon_element.classList.remove('eui-fa-chevron-circle-up')
            icon_element.classList.add('eui-fa-chevron-circle-down')
          }
        } else {
          lid.classList.remove('hidden')
          lid.classList.add('active')
          if (icon_element !==undefined && icon_element.classList !== undefined) {
            icon_element.classList.remove('eui-fa-chevron-circle-down')
            icon_element.classList.add('eui-fa-chevron-circle-up')
          }
        }
      }
    }
  }
};
</script>
<style scoped>
  .eui-sr-only,
  .hidden {
    display:none;
  }
  .accordian_header {
    background: #F2FAFF 0% 0% no-repeat padding-box;
    border: 1px solid #195983;
    padding: 0.35rem;
    border-radius: 8px;
    border: 1px solid #ebebeb;
    padding-left:20px;
    padding-top:10px;
    padding-bottom:10px;
    margin-top: 1.75rem;
    margin-bottom:1rem;
    background-color:#ffffff;
    display:block;
    cursor:pointer;
    width:100%;
  }
  .accordian_header i {
    float:right;
    padding-right:20px;
    padding-top:3px;
  } 
  .eui-accordion__body {
    font-weight:normal;
  }
</style>