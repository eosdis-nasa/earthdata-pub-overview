<template>
  <div class="hero-callout" style="background-color: #2276ac">
    <div class="container-lg">
      <div class="header row pt-5">
        <h1 class="justify-content-left text-light display-5">NASA Earthdata Pub</h1>
        <div class="row pt-4 justify-content-left text-left h5 text-light">
          <p>Earthdata Pub is the easy, online place for NASA Earth science researchers to publish their data at a NASA Distributed Active Archive Center (DAAC)</p>
          </div>
      </div>
      <div class="row pt-4 justify-content-center cta">
        <div class="col-md-8 text-center">
          <a class="btn btn-lg btn-green text-white" :href="formsDaacSelection" role="button">Get Started</a>
          <a class="btn btn-lg btn-transparant text-white" href="/" role="button">Data Producer Resources</a>
        </div>
        <div class="row pt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["hero"],
  computed: {
    dashboardRoot() {
      return process.env.VUE_APP_DASHBOARD_ROOT;
    },
    formsDaacSelection() {
      return `${process.env.VUE_APP_FORMS_ROOT}/daacs/selection`;
    },
  },
};
</script>
