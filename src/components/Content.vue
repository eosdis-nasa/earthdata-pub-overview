<template>
  <div>
    <Hero v-if="hero!==undefined" v-bind:hero="hero" />
    <Home v-if="home!==undefined" v-bind:home="home" />
    <!--<DataProducerResources v-if="data_producer_resources!==undefined" v-bind:data_producer_resources="data_producer_resources"/>
    <Publication v-if="publication!==undefined" v-bind:publication="publication"/>
    <Daacs v-if="daacs!==undefined" v-bind:daacs="daacs"/>
    <HowToUseEdpub v-if="how_to_use_edpub!==undefined" v-bind:how_to_use_edpub="how_to_use_edpub"/>-->
  </div>
</template>

<script>
//import Bubble from "./Bubble.vue";
import Hero from "./Hero.vue";
import Home from "./Home.vue";
/*import InfoBubble from "./InfoBubble.vue"
import DataProducerResources from "./DataProducerResources.vue";
import Publication from "./Publication.vue"
import Daacs from "./Daacs.vue"
import HowToUseEdpub from "./HowToUseEdpub.vue";*/

export default {
  name: "app",
  components: {
    Hero,
    Home,
    //InfoBubble
    //DataProducerResources,
    //Publication,
    //Daacs,
    //HowToUseEdpub
  },
  data() {
    return {
      hero: [],
      home: [],
      data_producer_resources: [],
      publication: [],
      daacs: [],
      how_to_use_edpub: []
    };
  },
  mounted() {
    window.content = this;
    console.log('content mounted')
    fetch(`${process.env.VUE_APP_API_ROOT}/pages`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        for (let ea in data){
          if(data[ea].page_key === 'home'){
            this.home = data[ea].content
          } else
          if(data[ea].page_key === 'data_producer_resources'){
            this.data_producer_resources = data[ea].content
          } else
          if(data[ea].page_key === 'publication'){
            this.publication = data[ea].content
          } else
          if(data[ea].page_key === 'daacs'){
            this.daacs = data[ea].content
          } else
          if(data[ea].page_key === 'how_to_use_edpub'){
            this.how_to_use_edpub = data[ea].content
          }
        }
      })
  }
};
</script>