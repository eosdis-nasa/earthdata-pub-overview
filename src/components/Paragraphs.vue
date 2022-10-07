<template>
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4" v-if="heading">{{heading}}<hr></h1>
        <template v-for="(value, index) in paragraphs" :key="index">
          <h1 class="display-4" v-if="value.heading">{{value.heading}}<hr></h1>
          <!-- Text -->
          <p v-if="value.text && value.text.indexOf('<') !==-1">
            <Rerender :html="value.text" />
          </p>
          <p v-else-if="value.text">{{value.text}}</p>
          <!-- Images -->
          <div v-if="value.image && value.image_alt_text">
            <img :src="getImgUrl(value.image)" v-bind="pic" :alt="value.image_alt_text">
          </div>
          <!-- Lists -->
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
          <!-- Box Lists -->
          <template v-if="value.box_list">
            <div class="card-grid">
              <template v-for="(box_item, box_index) in value.box_list" :key="box_index">
                <BoxList v-bind:list="box_item"/>
              </template>
            </div>
          </template>
          <!-- Tables -->
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
      </div>
    </div>
</template>

<script>
import Rerender from './Rerender.vue';
import BoxList from './BoxList.vue';
export default {
  components: { 
    Rerender,
    BoxList
  },
  name: "Publication",
  props: ["heading","paragraphs"],
  data() {
    return {
      pic:null
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic);
    }
  }
};
</script>
