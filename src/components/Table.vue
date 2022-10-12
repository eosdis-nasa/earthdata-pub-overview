<template>            
  <table v-if="table" class="table table-striped">
    <template v-if="table.caption">
      <caption>{{table.caption}}
      </caption>
    </template>
    <thead>
      <tr>
        <th v-for="(col, index) in table.heading" :key="index">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in table.rows" :key="index">
        <td v-for="(col, index) in row.columns" :key="index">{{ col }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "Table",
  props: ["table"]
};
</script>