<template>
    <div class="card" :class="{'has-icon': list.icon}" style="width: 18rem;">
      <template v-if="list.icon">
        <div class="icon_div">
          <img :src="getImgUrl(list.icon)" class="icon" alt="box icon image">
        </div>
      </template>
      <div class="card-body">
        <template v-if="list.link_name">
          <router-link :to="{ name: list.link_name }" :title="list.link_title">{{list.link_text}}
            <Card :list=list />
          </router-link>
        </template>
        <template v-else-if="list.box_link">
          <a :href="list.box_link || 'javascript:{}'" :title="`${list.text} link`" class="box_link">
            <Card :list=list />
          </a>
        </template>
        <template v-else>
          <Card :list=list />
        </template>
      </div>
    </div>
</template>
<script>
import Card from './Card.vue';
export default {
  components: { 
    Card
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
  computed: {
    
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