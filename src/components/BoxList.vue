<template>
  <a :href="list.box_link || 'javascript:{}'" :title="`${list.text} link`" class="box_link">
    <div class="card" style="width: 18rem;">
      <template v-if="list.icon">
        <div class="icon_div">
          <img :src="getImgUrl(list.icon)" class="icon" alt="box icon image">
        </div>
      </template>
      <div class="card-body">
        <h5 class="card-title" v-if="list.heading">{{list.heading}}<hr></h5>
        <h6 class="card-subtitle mb-2 text-muted" v-if="list.subtitle">{{list.subtitle}}</h6>
        <p class="card-text" v-if="list.text && list.text.indexOf('<') !==-1">
          <Rerender :html="list.text" />
        </p>
        <p v-else-if="list.text">{{list.text}}</p>
      </div>
    </div>
  </a>
</template>
<script>
import Rerender from './Rerender.vue';
export default {
  components: { 
    Rerender
  },
  name: "BoxList",
  props: ['list'],
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
  }
}
</script>
<style scoped>
  .card {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #70707040;
    border-radius: 8px;
    opacity: 1;
  }
</style>