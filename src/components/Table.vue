<template>            
  <table v-if="table" class="table table-striped">
    <template v-if="table.caption">
      <caption>{{table.caption}}
      </caption>
    </template>
    <thead>
      <template v-if="table.headers">
        <Rerender :html="table.headers" />  
      </template>
      <template v-else-if="table.heading">
        <th v-for="(col, index) in table.heading" :key="index">
          <template v-if="col && col.indexOf('<') !==-1">
            <Rerender :html="col" />  
          </template>
          <template v-else-if="col">
            {{ col }}
          </template>
        </th>
      </template>
    </thead>
    <tbody>
      <tr v-for="(row, index) in table.rows" :key="index">
        <td v-for="(col, index) in row.columns" :key="index">
          <template v-if="col && col.indexOf('<') !==-1">
            <Rerender :html="col" />  
          </template>
          <template v-else-if="col">
            {{ col }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Rerender from './Rerender.vue';
export default {
  components: { 
    Rerender
  },
  name: "Table",
  props: ["table"]
}
</script>
<style scoped>
  
</style>