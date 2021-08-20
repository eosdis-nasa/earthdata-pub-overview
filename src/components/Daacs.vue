<template>
  <div class="container">
    <div v-for="daacsData in daacsDataList" :key="daacsData.id" class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h2 class="display-4">{{daacsData.heading}}</h2>
        <p v-for="(value, index) in daacsData.paragraphs" :key="index">{{value}}</p>
      </div>
      <table class="table table-striped">
        <caption>{{daacsData.table.caption}}</caption>
        <thead>
          <tr>
            <td v-for="(col, index) in daacsData.table.header" :key="index">{{col}}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in daacsData.table.rows" :key="index">
            <td v-for="(col, index) in row.columns" :key="index">{{col}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Daacs",
  data() {
    return {
      daacsDataList: []
    };
  },
  mounted() {
    fetch("daacs.json")
      .then(response => response.json())
      .then(data => (this.daacsDataList = data));
  }
};
</script>
