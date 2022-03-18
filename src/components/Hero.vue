<template>
  <div class="hero-callout" style="background-color: #2276ac">
    <div class="container-lg">
      <div class="row pt-5">
        <h1 class="text-center text-light display-5">Earthdata Pub helps you publish your NASA data</h1>
        <div class="row pt-4 justify-content-center text-center h5 text-white-50">
          <ul class="list-inline text-center">
            <li class="list-inline-item h5 text-white-50">1. Create new requests</li>
            <li class="list-inline-item h5 text-white-50">2. Provide metadata</li>
            <li class="list-inline-item h5 text-white-50">3. Track publication status</li>
            <li class="list-inline-item h5 text-white-50">4. Communicate with DAAC staff</li>
          </ul>
          </div>
      </div>
      <div class="row pt-4 justify-content-center cta">
        <div class="col-md-8 text-center">
          <a class="btn btn-lg btn-success text-white" href="/" role="button">Data Producer Resources</a>        
          <a class="btn btn-lg btn-danger text-white" :href="formsRoot" role="button">New Request</a>
          <a class="btn btn-lg btn-info text-white" :href="dashboardRoot" role="button">Dashboard</a>
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
    formsRoot() {
      return process.env.VUE_APP_FORMS_ROOT;
    },
  },
};
</script>
