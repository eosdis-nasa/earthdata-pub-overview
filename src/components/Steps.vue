<template>
  <div class="container">
    <div v-for="data in steps" :key="data.id" class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h2 class="display-4">{{data.heading}}</h2>
        <p v-for="(value, index) in data.paragraphs" :key="index">{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  props: ['steps']
};
</script>
