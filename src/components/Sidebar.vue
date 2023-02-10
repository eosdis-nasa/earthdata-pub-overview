<template>
  <div class="left-content" :class="{ collapsed }" id="sidebar">
    <button type="button" class="btn expand_collapse text-white" aria-label="expand window" @click="toggleCollapseExpand" id='expand-window-button'>
      <i v-if="!collapsed" class="fa fa-caret-left" id='caret'></i>
      <i v-else class="fa fa-caret-right" id='caret'></i>
    </button>
    <div class="sidebar_links" :class="{'collapsed':collapsed}" id='sidebar-links'>
      <div class="heading">
        <router-link :to="{ name: 'Data Producer Resources' }" class="text-white">Data Producer Resources</router-link>
      </div>
      <div class="links_block">
        <template v-if="this.$route.name == 'Data Publication'">
          <router-link :to="{ name: 'Data Publication' }" class="text-white active">What is Data Publication</router-link>
        </template>
        <template v-else>
          <router-link :to="{ name: 'Data Publication' }" class="text-white">What is Data Publication</router-link>
        </template>
        <template v-if="this.$route.name == 'What is a NASA DAAC'">
          <router-link :to="{ name: 'What is a NASA DAAC' }" class="text-white active">What is a NASA DAAC</router-link>
        </template>
        <template v-else>
          <router-link :to="{ name: 'What is a NASA DAAC' }" class="text-white">What is a NASA DAAC</router-link>
        </template>
        <template v-if="this.$route.name == 'How To Use Earthdata Pub'">
          <router-link :to="{ name: 'How To Use Earthdata Pub' }" class="text-white active">How To Use Earthdata Pub</router-link>
        </template>
        <template v-else>
          <router-link :to="{ name: 'How To Use Earthdata Pub' }" class="text-white">How To Use Earthdata Pub</router-link>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  mounted() {
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapseExpand (){
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style scoped>
  .left-content{
    position:relative;
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
    background-color:#1E6B9D;
  }
  .sidebar_links .heading a {
    text-decoration:none;
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