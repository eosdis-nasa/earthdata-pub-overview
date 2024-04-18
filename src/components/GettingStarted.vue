<!-- eslint-disable max-len -->
<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="container-grid" :class="{ 'left-collapsed': leftCollapsed }" id='sidebar-container'>
    <Sidebar ref="sidebar" />
    <div class="right-content" v-if="getting_started.paragraphs">
      <div class="getting_started">
        <div class="mx-5">
          <div class="row pt-5 justify-content-center">
            <template v-if="getting_started.heading && getting_started.heading.indexOf('<') !== -1">
              <Rerender :html="getting_started.heading" />
            </template>
            <template v-else-if="getting_started.heading">
              {{ getting_started.heading }}
            </template>
            <template v-for="(value, index) in getting_started.paragraphs" :key="index">
              <template v-if="value.heading && value.heading.indexOf('<') !== -1">
                <Rerender :html="value.heading" />
              </template>
              <template v-else-if="value.heading">
                {{ value.heading }}
              </template>
              <Paragraph :text="value.text" />
              <List :list="value.list" />
              <template v-if="value.box_list">
                <span class="display-4 main-width">
                  <hr>
                </span>
                <div class="card-grid">
                  <template v-for="(box_item, box_index) in value.box_list" :key="box_index">
                    <BoxList v-bind:list="box_item" />
                  </template>
                </div>
                <span class="display-4 main-width">
                  <hr>
                </span>
              </template>
              <template v-if="value.step">
                <template v-for="(step_item, step_index) in value.step" :key="step_index">
                  <Step v-bind:step="step_item" />
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
                        <template v-if="value.icon_text && value.icon_text.indexOf('<') !== -1">
                          <Rerender :html="value.icon_text" />
                        </template>
                        <template v-else-if="value.icon_text">
                          {{ value.icon_text }}
                        </template>
                      </p>
                      <template v-if="value.button && value.button.indexOf('<') !== -1">
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
                            {{ group_item.icon_text }}
                          </p>
                        </template>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
              <template v-if="value.button">
                <span class="display-4 main-width">
                  <hr>
                </span>
                <div class="justify-content-center text-center last-button"
                  v-if="value.button && value.button.indexOf('<') !== -1">
                  <Rerender :html="value.button" />
                </div>
                <span class="display-4 main-width">
                  <hr>
                </span>
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
import Sidebar from './Sidebar.vue';
import Paragraph from './Paragraph.vue';
import List from './List.vue';

export default {
  components: {
    Rerender,
    BoxList,
    Step,
    Sidebar,
    Paragraph,
    List
  },
  name: 'GettingStarted',
  data() {
    return {
      getting_started: [],
      pic: null,
      leftCollapsed: false
    };
  },
  mounted() {
    // eslint-disable-next-line global-require
    this.getting_started = require('@/assets/getting_started.json');
    // eslint-disable-next-line max-len
    this.$watch(() => this.$refs.sidebar.collapsed, () => { this.leftCollapsed = this.$refs.sidebar.collapsed; });
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  methods: {
    collapseWindow() {
      if (document.getElementById('sidebar') !== null && document.getElementById('sidebar').classList !== null && document.getElementById('sidebar').classList.contains('collapsed')) {
        const link = document.getElementById('expand-window-button');
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 1; i++) link.click();
      }
    },
    expandWindow() {
      if (document.getElementById('sidebar') !== null && document.getElementById('sidebar').classList !== null && !document.getElementById('sidebar').classList.contains('collapsed')) {
        const link = document.getElementById('expand-window-button');
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 1; i++) link.click();
      }
    },
    onResize() {
      // eslint-disable-next-line max-len, no-restricted-globals
      const isFullscreen = window.outerWidth === screen.width && window.outerHeight === screen.height;
      const firefoxWidthProperty = isFullscreen ? window.outerWidth : window.innerWidth;
      const windowWidth = this.fnBrowserDetect() === 'firefox' ? firefoxWidthProperty : window.innerWidth;
      this.pageOffset = windowWidth > 1450 ? ((windowWidth - 1450) / 2).toString() : '0';
      if (windowWidth < 1280) {
        this.expandWindow();
      } else {
        this.collapseWindow();
      }
    },
    fnBrowserDetect() {
      let brands = '';
      if (navigator.userAgentData === undefined) {
        brands = navigator.userAgent;
      } else {
        brands = navigator.userAgentData.brands;
      }
      let userAgent = '';
      if (navigator.userAgentData === undefined) {
        userAgent = navigator.userAgent;
      } else {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const ea in brands) {
          userAgent += `${brands[ea].brand} ${brands[ea].version}, `;
        }
      }
      let browserName;

      if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = 'chrome';
      } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = 'firefox';
      } else if (userAgent.match(/safari/i)) {
        browserName = 'safari';
      } else if (userAgent.match(/opr\//i)) {
        browserName = 'opera';
      } else if (userAgent.match(/edg/i)) {
        browserName = 'edge';
      } else {
        browserName = 'No browser detection';
      }
      return browserName;
    },
    getImgUrl(pic) {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../assets/${pic}`);
    }
  }
};
</script>
<style scoped>
.getting_started .main-width hr {
  margin-bottom: 2rem;
}

.getting_started h1.display-4,
.getting_started h2.display-4,
.getting_started h3 {
  margin-top: 1rem;
}

.getting_started .card-grid {
  margin-top: .75rem;
  margin-bottom: .5rem;
}

.getting_started .card-grid {
  text-align: center;
  justify-content: space-evenly;
  grid-template-columns: auto auto;
}

h5 {
  margin-top: 1rem;
}

.icon_div {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  width: 100%;
}

.group_template .icon_div {
  display: block;
}

.group_template .icon_div .group {
  display: flex;
  align-items: center;
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

.note .icon_text {
  margin-left: 10px;
  width: 95%;
}

.getting_started p.icon_text {
  margin-bottom: unset !important;
  padding: 10px;
}

.getting_started {
  margin-bottom: 2rem;
}

.getting_started .note {
  margin-bottom: 1rem;
}

.getting_started .note .icon_div {
  margin-top: 1rem;
}

.last-button {
  margin-bottom: 1rem;
}
</style>
