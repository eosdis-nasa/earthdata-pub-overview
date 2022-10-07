<template>
  <div class="container-grid">
    <Sidebar />
    <div class="right-content">
      <BreadCrumbs />
      <div class="daacs">
        <div class="mx-5">
          <div class="row pt-5 justify-content-center">
            <h1 class="display-4" v-if="daacs.heading!==undefined">{{ daacs.heading }}<hr /></h1>
            <template v-for="(value, index) in daacs.paragraphs" :key="index">
              <h1 class="display-4" v-if="value.heading"><br>{{value.heading}}<hr></h1>
              <p v-if="value.text && value.text.indexOf('<') !==-1">
                <Rerender :html="value.text" />
              </p>
              <p v-else-if="value.text">{{value.text}}</p>
              <table v-if="value.table" class="table table-striped">
              <template v-if="value.table.caption">
                <caption>{{value.table.caption}}
                </caption>
              </template>
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
      </div>
    </div>
  </div>
</template>

<script>
import Rerender from './Rerender.vue';
import BreadCrumbs from './BreadCrumbs.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: { 
    Rerender,
    BreadCrumbs,
    Sidebar
  },
  name: "Daacs",
  data() {
    return {
      daacs: []
    }
  },
  mounted() {
    fetch(`${process.env.VUE_APP_API_ROOT}/pages/daacs`)
      .then(response => response.json())
      .then(data => {
        this.daacs = data.content;
      })
  },
};
</script>
<style scoped>
  table{
    width:90%;
    margin-bottom:3rem;
  }
</style>
