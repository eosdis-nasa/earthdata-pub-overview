<template>
  <div class="container-grid">
    <Sidebar />
    <div class="right-content" v-if="daacs.paragraphs">
      <BreadCrumbs />
      <div class="daacs">
        <div class="mx-5">
          <div class="row pt-5 justify-content-center">
            <h1 class="display-4" v-if="daacs.heading!==undefined">{{ daacs.heading }}<hr /></h1>
            <template v-for="(value, index) in daacs.paragraphs" :key="index">
              <h1 class="display-4" v-if="value.heading">{{value.heading}}<hr></h1>
              <Paragraph :text="value.text" />
              <Table :table="value.table" />
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
import Table from './Table.vue';
import Paragraph from './Paragraph.vue';

export default {
  components: { 
    BreadCrumbs,
    Sidebar,
    Table,
    Paragraph
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
    margin-bottom:2.5rem;
  }
  .daacs h1{
    padding-top:1rem;
  }
  .daacs h1:first-of-type{
    padding-top:0;
  }
</style>
