<template>
  <div class="container-grid"  :class="{'left-collapsed': leftCollapsed }" id='sidebar-container'>
    <Sidebar ref="sidebar" />
    <div class="right-content" v-if="daacs.paragraphs">
      <BreadCrumbs />
      <div class="daacs">
        <div class="mx-5">
          <div class="row pt-5 justify-content-center">
            <h1 class="display-4" v-if="daacs.heading!==undefined">{{ daacs.heading }}<hr /></h1>
            <template v-for="(value, index) in daacs.paragraphs" :key="index">
              <h1 class="display-4" v-if="value.heading">{{value.heading}}<hr></h1>
              <Paragraph :text="value.text" />
              <Table :table="value.table" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from './BreadCrumbs.vue';
import Sidebar from './Sidebar.vue';
import Table from './Table.vue';
import Paragraph from './Paragraph.vue';

export default {
  components: { 
    BreadCrumbs,
    Sidebar,
    Table,
    Paragraph
  },
  name: "Daacs",
  data() {
    return {
      daacs: [],
      leftCollapsed: false
    }
  },
  mounted() {
    this.daacs = require('@/assets/daacs.json');
    this.$watch(() => this.$refs.sidebar.collapsed, () => { this.leftCollapsed = this.$refs.sidebar.collapsed })
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  methods: {
    collapseWindow(){
      if (document.getElementById('sidebar') !== null && document.getElementById('sidebar').classList !== null && document.getElementById('sidebar').classList.contains('collapsed')) {
        const link = document.getElementById('expand-window-button');
        for(var i = 0; i < 1; i++)
          link.click();
      }
    },
    expandWindow(){
      if (document.getElementById('sidebar') !== null && document.getElementById('sidebar').classList !== null && !document.getElementById('sidebar').classList.contains('collapsed')) {
        const link = document.getElementById('expand-window-button');
        for(var i = 0; i < 1; i++)
          link.click();
      }
    },
    onResize() {
      let isFullscreen = window.outerWidth == screen.width && window.outerHeight == screen.height
      let firefoxWidthProperty = isFullscreen ? window.outerWidth : window.innerWidth
      let windowWidth = this.fnBrowserDetect() === 'firefox' ? firefoxWidthProperty : window.innerWidth
      this.pageOffset = windowWidth > 1450 ? ((windowWidth - 1450) / 2).toString() : "0"
      if (windowWidth < 1280) {
        this.expandWindow()
      } else {
        this.collapseWindow()
      }
    },
    fnBrowserDetect(){
      let brands = '';
      if (navigator.userAgentData === undefined) {
        brands = navigator.userAgent
      } else {
        brands = navigator.userAgentData.brands
      }
      let userAgent = '';
      if (navigator.userAgentData === undefined) {
        userAgent = navigator.userAgent
      } else {
        for (let ea in brands){
          userAgent += `${brands[ea].brand} ${brands[ea].version}, `
        }
      }
      let browserName;
      
      if(userAgent.match(/chrome|chromium|crios/i)){
          browserName = "chrome";
        }else if(userAgent.match(/firefox|fxios/i)){
          browserName = "firefox";
        }  else if(userAgent.match(/safari/i)){
          browserName = "safari";
        }else if(userAgent.match(/opr\//i)){
          browserName = "opera";
        } else if(userAgent.match(/edg/i)){
          browserName = "edge";
        }else{
          browserName="No browser detection";
        }
      return browserName;
    }
  }
};
</script>
<style scoped>
  table{
    width:90%;
    margin-bottom:2.5rem;
  }
  .daacs h1{
    padding-top:1rem;
  }
  .daacs h1:first-of-type{
    padding-top:0;
  }
</style>
