<template>
  <div class="container">
    <div v-for="data in publication" :key="data.id" class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4">{{data.heading}}</h1>
        <p v-for="(value, index) in data.paragraphs" :key="index">{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publication",
  props: ['publication']
};
</script>
