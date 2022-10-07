<template>
  <Hero/>
  <div class="home container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4" v-if="home.heading">{{home.heading}}<hr></h1>
        <template v-for="(value, index) in home.paragraphs" :key="index">
          <span class="display-4 main-width" v-if="value.heading && (value.heading=='Earthdata Pub Features' || value.heading=='Earthdata Pub Process')"><hr></span>
          <h1 class="display-4" v-if="value.heading">{{value.heading}}<hr></h1>
          <p v-if="value.text && value.text.indexOf('<') !==-1">
            <Rerender :html="value.text" />
          </p>
          <p v-else-if="value.text">{{value.text}}</p>
          <template v-if="value.list">
            <ul>
              <template v-for="(item, list_index) in value.list" :key="list_index">
                <template v-if="item.indexOf('<') !==-1">
                  <li><Rerender :html="item" /></li> 
                </template>
                <template v-else> 
                  <li>{{item}}</li>
                </template>
              </template>
            </ul>
          </template>
          <template v-if="value.box_list">
            <div class="card-grid">
              <template v-for="(box_item, box_index) in value.box_list" :key="box_index">
                <BoxList v-bind:list="box_item"/>
              </template>
            </div>
          </template> 
        </template>
        <span class="display-4 main-width"><hr></span>
        <div class="home-bottom-grid ">
          <div>
            <p>Earthdata Pub is a set of tools to help you publish your Earth Science data with a NASA DAAC.</p>
            <p> If you are ready to submit your information for consideration, start here.</p>
          </div>
          <div class="col-md-8 text-center">
            <a class="btn btn-lg btn-green text-white include-icon" :href="formsDaacSelection" role="button">Get Started<img src="../assets/ic_arrow_up.png" alt="Home Form Screenshot Image" /></a>
          </div>
          <div><img src="../assets/img_edpub_form_types_300.png" alt="Home Form Screenshot Image" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import Rerender from './Rerender.vue';
import BoxList from './BoxList.vue';
export default {
  components: { 
    Hero,
    BoxList,
    Rerender
  },
  name: "Home",
  data() {
    return {
      home: []
    }
  },
  mounted() {
    fetch(`${process.env.VUE_APP_API_ROOT}/pages/home`)
      .then(response => response.json())
      .then(data => {
        this.home = data.content;
      })
  },
  computed: {
    formsDaacSelection() {
      return `${process.env.VUE_APP_FORMS_ROOT}/daacs/selection`;
    },
  },
};

</script>
