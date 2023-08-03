<template>
  <div class="container-grid" :class="{'left-collapsed': leftCollapsed }" id='sidebar-container'>
    <Sidebar ref="sidebar" />
    <div class="right-content" v-if="publication.paragraphs">
      <BreadCrumbs />
      <div class="publication">
        <div class="mx-5">
          <div class="row pt-5 justify-content-center">
            <h1 class="display-4" v-if="publication.heading">{{publication.heading}}<hr></h1>
            <template v-for="(value, index) in publication.paragraphs" :key="index">
              <h3 v-if="value.heading">{{value.heading}}<hr></h3>
              <Paragraph :text="value.text" />
              <div v-if="value.image && value.image_alt_text">
                <a target="_blank" :href="getImgUrl(value.image)" :title="value.image_alt_text"><img :src="getImgUrl(value.image)" v-bind="pic" :alt="value.image_alt_text"></a>
              </div>
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
import Paragraph from './Paragraph.vue';
export default {
  components: { 
    BreadCrumbs,
    Sidebar,
    Paragraph
  },
  name: "Publication",
  data() {
    return {
      publication: [],
      pic:null,
      leftCollapsed: false
    }
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
    },
    getImgUrl(pic) {
      return require('../assets/'+pic);
    }
  },
  mounted() {
    this.publication = require('@/assets/publication.json');
    this.$watch(() => this.$refs.sidebar.collapsed, () => { this.leftCollapsed = this.$refs.sidebar.collapsed; })
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  }
};
</script>
<style scoped>
  div.publication {
    margin-bottom:1.5rem;
  }
  .publication img {
    margin-top:2rem;
    margin-bottom:2rem;
    max-width:100%;
    max-height:100%;
  }
  .publication h1{
    padding-top:1rem;
  }
  .publication h1:first-of-type{
    padding-top:0;
  }
</style>