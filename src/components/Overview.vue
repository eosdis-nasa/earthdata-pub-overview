// Overview.vue

<template>
  <div class="container">
    <h1>Earthdata Pub Overview</h1>
    <button v-on:click="getOverviewData">Get DAACs List</button>
    <div v-for="overviewData in overviewDataList" :key="overviewData.id" class="overview-data">
      <h2>{{overviewData.heading}}</h2>
      <p v-for="(value, index) in overviewData.paragraphs" :key="index">{{value}}</p>
      <table>
        <caption>{{overviewData.table.caption}}</caption>
        <thead>
          <tr>
            <th>NASA DAAC</th>
            <th>Scientific Disciplines</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in overviewData.table.rows" :key="index">
            <td>{{row.columns[0]}}</td>
            <td>{{row.columns[1]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  data() {
    return {
      overviewDataList: []
    };
  },
  methods: {
    getOverviewData() {
      fetch("overview.json")
        .then(response => response.json())
        .then(data => (this.overviewDataList = data));
    }
  }
};
</script>
