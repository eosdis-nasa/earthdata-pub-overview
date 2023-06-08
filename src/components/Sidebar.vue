<template>
  <div class="left-content" :class="{ collapsed }" id="sidebar">
    <button type="button" class="btn expand_collapse text-white" aria-label="expand window" @click="toggleCollapseExpand" id='expand-window-button'>
      <i v-if="!collapsed" class="fa fa-caret-left" id='caret'></i>
      <i v-else class="fa fa-caret-right" id='caret'></i>
    </button>
    <div class="sidebar_links" :class="{'collapsed':collapsed}" id='sidebar-links'>
      <div class="links_block navbar-nav">
        <template v-if="this.$route.name == 'Getting Started'">
          <template v-for="(link, index) in getStartedLinks" :key="index">
            <a :title=link.properName :href=link.link>{{link.properName}}</a>
          </template>
        </template>
        <template v-else>
          <template v-for="(link, index) in getPublicationLinks" :key="index">
            <a :title=link.properName :href=link.link>{{link.properName}}</a>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      collapsed: false
    }
  },
  computed: {
    getStartedLinks() {
      const items = require(`@/assets/getting_started.json`);
      return this.getLinks(items)
    },
    getPublicationLinks() {
      const items = require(`@/assets/data_publication_guidelines.json`);
      return this.getLinks(items)
    }
  },
  mounted() {
    localStorage.removeItem('overview-version')
  },
  methods: {
    toggleCollapseExpand (){
      this.collapsed = !this.collapsed
    },
    getLinks(items) {
      const paragraphs = items.paragraphs
      let tmpArray = []
      for (const ea in paragraphs) {
        if (paragraphs[ea].heading && paragraphs[ea].heading.indexOf('<') !==-1 && paragraphs[ea].heading.match(/id/g)) {
          const properName = paragraphs[ea].heading.split('>')[1].split('<')[0]
          const link = paragraphs[ea].heading.replace(/'/g,'').split('id=')[1].split('>')[0]
          tmpArray.push({link: `#${link}`, properName: properName});
        }
      }
      return tmpArray
    }
  }
}
</script>
<style scoped>
  .left-content{
    position:relative;
  }
  .links_block a:visited, a:link {
    color:unset;
  }
  .links_block .heading,
  .links_block .heading a {
    background-color:#1e6b9d!important;
    padding:initial;
    color:white;
  }
  .links_block .heading,
  .links_block .heading span {
    background-color:#1e6b9d!important;
    padding:initial;
    color:white;
  }
  .expand_collapse {
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    border: 2px solid white;
    background: #2275AA 0% 0% no-repeat padding-box;
    padding:0;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    position: absolute;
    top:-20px;
    left: 225px;
    font-size:20px;
    padding-top:3px;
    padding-right:3px;
    z-index: 1;
  }
  .left-content.collapsed {
    width: 0px;
  }
  .collapsed .expand_collapse {
    left:0px;
  }
  .expand_collapse:hover {
    background: #195983 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
  }
  .collapsed .sidebar_links {
    width: 0px;
    overflow: hidden;
  }
  .fa.fa-caret-left {
    color:white;
  }
  .fa.fa-caret-right {
    padding-left:5px;
  }
  .sidebar_links .heading {
    padding-left:1rem;
    padding-top:1rem;
    padding-bottom:1rem;
    font-size:larger;
    background-color:#1e6b9d!important;
    color:black;
  }
  .sidebar_links .heading a {
    text-decoration:none;
  }
  .sidebar_links {
    top: 0;
    position: -webkit-sticky;
    position: sticky;
  }
  .links_block {
    padding-bottom:2rem;
  }
  .links_block a {
    padding: 1rem;
    padding-left:2rem;
    background-color:#074872;
    text-align:left;
    width:100%;
    text-decoration: none;
    display: inline-block;
    line-height: 1.5;
    vertical-align: middle;
    cursor: pointer;
    text-underline-offset: .5rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .links_block a:hover {
    text-decoration: underline!important;
    text-underline-offset: .5rem;
  }
  .links_block .router-link-active {
    text-decoration: underline!important;
    text-underline-offset: .5rem;
  }
</style>