<template>
  <div class="container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4">{{publication.heading}}</h1>
        <p v-for="(value, index) in publication.paragraphs" :key="index">{{value}}</p>
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
