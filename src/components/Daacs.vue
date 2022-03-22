<template>
  <div class="container">
    <div v-for="data in daacs" :key="data.id" class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4">{{data.heading}}</h1>
        <p v-for="(value, index) in data.paragraphs" :key="index">{{value}}</p>
      </div>
      <table class="table table-striped">
        <caption>{{data.table.caption}}</caption>
        <thead>
          <tr>
            <td v-for="(col, index) in data.table.header" :key="index">{{col}}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in data.table.rows" :key="index">
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
  props: ['daacs']
};
</script>
