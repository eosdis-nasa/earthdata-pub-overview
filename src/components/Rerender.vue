<template class='popper'>
  <component :is="compiled"></component>
</template>

<script>
import {compile} from 'vue/dist/vue.esm-bundler';
export default {
  name: "Rerender",
  props: ["html"],
  mounted() {
    this.compiled = compile(this.html)
  },
  computed: {
  },
  data(){
    return {
      compiled: null
    }
  }
};
</script>
<style>
</style>