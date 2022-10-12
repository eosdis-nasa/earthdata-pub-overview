<template>
  <div class="hero-callout">
    <div class="container-lg">
      <div class="header row pt-5">
        <h1 class="justify-content-left text-light display-5">NASA Earthdata Pub</h1>
        <div class="row pt-4 justify-content-left text-left h5 text-light">
          <p>Earthdata Pub is the easy, online place for NASA Earth science researchers to publish their data at a NASA Distributed Active Archive Center (DAAC)</p>
          </div>
      </div>
      <div class="row pt-4 justify-content-center cta">
        <div class="col-md-8 text-center">
          <OtherLink link_title="Get Started" link_url="daac/selection" link_text="Get Started" link_class="btn btn-lg btn-green text-white" />
          <router-link :to="{ name: 'Data Producer Resources' }" class="btn btn-lg btn-transparant text-white">Data Producer Resources</router-link>
        </div>
        <div class="row pt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>
<style scoped>
  .hero-callout .btn {
    margin-right: 15px;
  }
  .hero-callout {
    background-color: #2276ac;
  }
</style>