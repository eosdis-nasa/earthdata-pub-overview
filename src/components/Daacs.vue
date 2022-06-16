<template>
  <div class="container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4">{{daacs.heading}}</h1>
        <p v-for="(value, index) in daacs.paragraphs" :key="index">{{value}}</p>
      </div>
      <table v-if="daacs.table" class="table table-striped">
        <caption>{{daacs.table.caption}}</caption>
        <thead>
          <tr>
            <td v-for="(col, index) in daacs.table.header" :key="index">{{col}}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in daacs.table.rows" :key="index">
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
