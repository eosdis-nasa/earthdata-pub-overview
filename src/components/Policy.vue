<template>
  <div class="container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4">{{policy.heading}}</h1>
        <p v-for="(value, index) in policy.paragraphs" :key="index">{{value}}</p>
      </div>
      <ul>
        <li v-for="(item, index) in policy.list" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Policy",
  props: ['policy']
};
</script>
