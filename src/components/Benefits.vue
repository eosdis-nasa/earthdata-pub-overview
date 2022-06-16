<template>
  <div class="container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4">{{benefits.heading}}</h1>
        <p v-for="(value, index) in benefits.paragraphs" :key="index">{{value}}</p>
      </div>
      <ul>
        <li v-for="(item, index) in benefits.list" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Benefits",
  props: ['benefits']
};
</script>
<style scoped>
  .container {
    margin-bottom:4rem;
  }
</style>