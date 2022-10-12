<template>
  <ul v-if="list">
    <template v-for="(item, list_index) in list" :key="list_index">
      <template v-if="item.indexOf('<') !==-1">
        <li><Rerender :html="item" /></li> 
      </template>
      <template v-else> 
        <li>{{item}}</li>
      </template>
    </template>
  </ul>
</template>
<script>
import Rerender from './Rerender.vue';
export default {
  components: { 
    Rerender
  },
  name: "List",
  props: ["list"]
};
</script>
<style scoped>
  ul {
    list-style: none;
  }
  ul li {
    line-height: 25px;
  }
  ul li:before {
    content: "•";
    font-size: 220%;
    padding-right: .5em;
    padding-left:.5em;
    vertical-align:bottom;
  }
</style>