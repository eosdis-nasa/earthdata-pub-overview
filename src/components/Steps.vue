<template>
  <div class="container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4">{{steps.heading}}</h1>
        <p v-for="(value, index) in steps.paragraphs" :key="index">{{value}}</p>
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
