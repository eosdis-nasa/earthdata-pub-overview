<template>
  <div class="container-grid" :class="{'left-collapsed': leftCollapsed }" id='sidebar-container'>
    <Sidebar ref="sidebar" />
    <div class="right-content" v-if="data_publication_guidelines.paragraphs">
      <BreadCrumbs />
      <div class="data_publication_guidelines">
        <div class="mx-5">
          <div class="row pt-5 justify-content-center">
            <h1 class="display-4" v-if="data_publication_guidelines.heading">{{data_publication_guidelines.heading}}<hr></h1>
            <template v-for="(value, index) in data_publication_guidelines.paragraphs" :key="index">
              <h1 class="display-4" id="how" v-if="value.heading && value.heading=='How to Publish with Earthdata Pub'">{{value.heading}}<hr></h1>
              <h1 class="display-4" id="scope" v-else-if="value.heading && value.heading=='Data Scope and Acceptance Policy'">{{value.heading}}<hr></h1>
              <span class="display-4 main-width sections" v-else-if="value.heading && value.heading.indexOf(':') !==-1"><b>{{value.heading}}</b></span>
              <h5 v-else-if="value.heading"><b>{{value.heading}}</b><hr></h5>
              <Paragraph :text="value.text" />
              <List :list="value.list" />
              <template v-if="value.box_list">
                <span class="display-4 main-width"><hr></span>
                <div class="card-grid">
                  <template v-for="(box_item, box_index) in value.box_list" :key="box_index">
                    <BoxList v-bind:list="box_item"/>
                  </template>
                </div>
                <span class="display-4 main-width"><hr></span>
              </template> 
              <template v-if="value.step">
                <template v-for="(step_item, step_index) in value.step" :key="step_index">
                  <Step v-bind:step="step_item"/>
                </template>
              </template>
              <template v-if="value.icon">
                <div class="note">
                  <div class="icon_div">
                    <div class="icon_box">
                      <img :src="getImgUrl(value.icon)" class="icon" alt="note icon image">
                    </div>
                    <template v-if="value.icon_text">
                      <p class="icon_text">
                        <template v-if="value.icon == 'lightbulb.svg'">Tip:&nbsp;&nbsp;</template>
                        <template v-if="value.icon == 'sticky-note.svg'">Note:&nbsp;&nbsp;</template>
                        <template v-if="value.icon_text && value.icon_text.indexOf('<') !==-1">
                          <Rerender :html="value.icon_text" />  
                        </template>
                        <template v-else-if="value.icon_text">
                          {{value.icon_text}}
                        </template>
                      </p>
                      <template v-if="value.button && value.button.indexOf('<') !==-1">
                        <Rerender :html="value.button" />
                      </template>
                    </template>
                  </div>
                </div>
              </template>
              <template v-if="value.grouped_note">
                <div class="note group_template">
                  <div class="icon_div">
                    <template v-for="(group_item, group_index) in value.grouped_note" :key="group_index">
                      <div class="group">
                        <div class="icon_box">
                          <img :src="getImgUrl(group_item.icon)" class="icon" alt="grouped note icon image">
                        </div>
                        <template v-if="group_item.icon_text">
                          <p class="icon_text">
                            {{group_item.icon_text}}
                          </p>
                        </template>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
              <template v-if="value.button">
                <span class="display-4 main-width" ><hr></span>
                <div class="justify-content-center text-center last-button" v-if="value.button && value.button.indexOf('<') !==-1">
                  <Rerender :html="value.button" />
                </div>
                <span class="display-4 main-width" ><hr></span>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Rerender from './Rerender.vue';
import BoxList from './BoxList.vue';
import Step from './Step.vue';
import BreadCrumbs from './BreadCrumbs.vue';
import Sidebar from './Sidebar.vue';
import Paragraph from './Paragraph.vue';
import List from './List.vue';
export default {
  components: { 
    Rerender,
    BoxList,
    Step,
    BreadCrumbs,
    Sidebar,
    Paragraph,
    List
  },
  name: "DataPublicationGuidelines",
  data() {
    return {
      data_publication_guidelines: [],
      pic:null,
      leftCollapsed: false
    }
  },
  mounted() {
    this.data_publication_guidelines = require('@/assets/data_publication_guidelines.json');
    this.$watch(() => this.$refs.sidebar.collapsed, () => { this.leftCollapsed = this.$refs.sidebar.collapsed })
    // fetch(`${process.env.VUE_APP_API_ROOT}/pages/data_publication_guidelines`)
    /* fetch(`@/assets/data_publication_guidelines.json`)
      .then(response => response.json())
      .then(data => {
        this.data_publication_guidelines = data.content;
      })
      .then(() => this.onResize())
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      }) */
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
      let userAgent = navigator.userAgent;
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
  }
};
</script>
<style scoped>
  .data_publication_guidelines .main-width hr {
    margin-bottom:2rem;
  }
  .card-grid {
    margin-top:.75rem;
    margin-bottom:.5rem;
  }
  .card-grid .card:has(.icon_div) {
    margin-bottom:1.5rem;
    margin-top:1rem;
  }
  .data_publication_guidelines .card-grid {
    text-align: center;
    justify-content: space-evenly;
    grid-template-columns: auto auto;
  }
  .data_publication_guidelines .card-grid {
    text-align: center;
    justify-content: space-evenly;
    grid-template-columns: auto auto;
  }
  .data_publication_guidelines .card-grid .card:has(.icon_div) {
    padding-top:2rem;
  }
  h5 {
    margin-top:1rem;
  }
  .icon_div {
    border-radius: 8px;
    border: 1px solid #ebebeb;
    padding-left:20px;
    padding-top:10px;
    padding-bottom:10px;
    padding-right:20px;
    background-color:#ffffff;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .group_template .icon_div {
    display:block;
  }
  .group_template .icon_div .group {
    display:flex;
    align-items:center;
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
  .icon_box .span {
    max-width:90%
  }
  .note .icon_text {
    margin-left: 10px;
    width:95%;
  }
  p.icon_text {
    margin-bottom:unset!important;
    padding: 10px;
  }
  .data_publication_guidelines {
    margin-bottom:2rem;
  }
  .note {
    margin-bottom:1rem;
  }
  .note .icon_div {
    margin-top:1rem;
  }
  .sections {
    margin-bottom:1.75rem;
    margin-top:1.75rem;
  }
  .last-button {
    margin-bottom:1rem;
  }
  .data_publication_guidelines .card-grid .card.has-icon {
    padding-top: 2rem;
  }
</style>
