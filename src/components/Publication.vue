<template>
  <div class="container-grid">
    <Sidebar />
    <div class="right-content" v-if="publication.paragraphs">
      <BreadCrumbs />
      <div class="publication">
        <div class="mx-5">
          <div class="row pt-5 justify-content-center">
            <h1 class="display-4" v-if="publication.heading">{{publication.heading}}<hr></h1>
            <template v-for="(value, index) in publication.paragraphs" :key="index">
              <h1 class="display-4" v-if="value.heading">{{value.heading}}<hr></h1>
              <Paragraph :text="value.text" />
              <div v-if="value.image && value.image_alt_text">
                <img :src="getImgUrl(value.image)" v-bind="pic" :alt="value.image_alt_text">
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
      pic:null
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic);
    }
  },
  mounted() {
    fetch(`${process.env.VUE_APP_API_ROOT}/pages/publication`)
      .then(response => response.json())
      .then(data => {
        this.publication = data.content;
      })
  },
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