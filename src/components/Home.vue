<template>
  <div class="home container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4" v-if="home.heading">{{home.heading}}<hr></h1>
        <template v-for="(value, index) in home.paragraphs" :key="index">
          <h1 class="display-4 main-width" v-if="value.heading && (value.heading=='Earthdata Pub Features' || value.heading=='Earthdata Pub Process')"><hr></h1>
          <h1 class="display-4" v-if="value.heading">{{value.heading}}<hr></h1>
          <p v-if="value.text && value.text.indexOf('<') !==-1">
            <Rerender :html="value.text" />
          </p>
          <p v-else-if="value.text">{{value.text}}</p>
          <ul v-if="value.list">
            <li v-for="(item, list_index) in value.list" :key="list_index">{{item}}</li>
          </ul>
          <template v-if="value.box_list">
            <div class="card-grid">
              <template v-for="(box_item, box_index) in value.box_list" :key="box_index">
                <BoxList v-bind:list="box_item"/>
              </template>
            </div>
          </template>
          <table v-if="value.table!== undefined" class="table table-striped">
            <template v-if="value.caption"><caption>{{value.caption}}</caption></template>
            <thead>
              <tr>
                <th v-for="(col, index) in value.table.heading" :key="index">
                  {{ col }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in value.table.rows" :key="index">
                <td v-for="(col, index) in row.columns" :key="index">{{ col }}</td>
              </tr>
            </tbody>
          </table>
        </template>
        <h1 class="display-4 main-width"><hr></h1>
        <div class="home-bottom-grid ">
          <div>
            <p>Earthdata Pub is a set of tools to help you publish your Earth Science data with a NASA DAAC.</p>
            <p> If you are ready to submit your information for consideration, start here.</p>
          </div>
          <div class="col-md-8 text-center">
            <a class="btn btn-lg btn-green text-white include-icon" :href="formsDaacSelection" role="button">Get Started<img src="../assets/ic_arrow_up.png" alt="Home Form Screenshot Image" /></a>
          </div>
          <div><img src="../assets/home_screenshots.png" alt="Home Form Screenshot Image" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rerender from './Rerender.vue';
import BoxList from './BoxList.vue';
export default {
  components: { 
    BoxList,
    Rerender
  },
  name: "Home",
  props: ['home'],
  mounted() {
    window.home = this;
    console.log('home mounted')
  },
  computed: {
    formsDaacSelection() {
      return `${process.env.VUE_APP_FORMS_ROOT}/daacs/selection`;
    },
  },
};

</script>
