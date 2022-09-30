<template>
  <div class="container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4" v-if="daacs.heading!==undefined">{{ daacs.heading }}<hr />
        </h1>
        <template v-for="(value, index) in daacs.paragraphs" :key="index">
          <p v-if="value.text !== undefined">
            <span v-html="value.text"></span>
          </p>
          <table v-if="daacs.table" class="table table-striped">
          <template v-if="daacs.table.caption">
            <caption>{{daacs.table.caption}}
            </caption>
          </template>
          <thead>
            <tr>
              <td v-for="(col, index) in daacs.table.heading" :key="index">
                {{ col }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in daacs.table.rows" :key="index">
              <td v-for="(col, index) in row.columns" :key="index">{{ col }}</td>
            </tr>
          </tbody>
        </table>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Daacs",
  props: ["daacs"],
};
</script>
