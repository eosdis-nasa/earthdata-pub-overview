<template>
  <div class="container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4" v-if="how_to_use_edpub.heading!==undefined">{{how_to_use_edpub.heading}}</h1>
        <p v-for="(value, index) in how_to_use_edpub.paragraphs" :key="index">{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToUseEdpub",
  props: ['how_to_use_edpub']
};
</script>
