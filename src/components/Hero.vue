<!-- eslint-disable max-len -->
<template>
  <div class="hero-callout">
    <div class="container-lg">
      <div class="header row pt-5">
        <div class="row pt-4 justify-content-left text-left h3 text-light">
          <p>Earthdata Pub is the one-stop shop for researchers who want to publish their Earth Science data at a NASA
            Distributed Active Archive Center (DAAC)</p>
        </div>
      </div>
      <div class="row pt-4 justify-content-center cta">
        <div class="col-md-8 text-center">
          <router-link title="Get Started" class="btn btn-lg btn-green text-white" :to="{ name: 'Getting Started' }">Get
            Started</router-link>
        </div>
        <div class="row pt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
  }
};
</script>
<style scoped></style>
