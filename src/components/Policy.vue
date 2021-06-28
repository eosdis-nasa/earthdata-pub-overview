// Policy.vue

<template>
  <div class="container">
    <div v-for="policyData in policyDataList" :key="policyData.id" class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h2 class="display-4">{{policyData.heading}}</h2>
        <p v-for="(value, index) in policyData.paragraphs" :key="index">{{value}}</p>
      </div>
      <ul>
        <li v-for="(item, index) in policyData.list" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Policy",
  data() {
    return {
      policyDataList: []
    };
  },
  mounted() {
    fetch("policy.json")
      .then(response => response.json())
      .then(data => (this.policyDataList = data));
  }
};
</script>
