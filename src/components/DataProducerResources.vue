<template>
  <div class="container">
    <div class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4" v-if="data_producer_resources.heading!==undefined">{{data_producer_resources.heading}}<hr></h1>
        <template v-for="(value, index) in data_producer_resources.paragraphs" :key="index">
          <p v-if="value.text !== undefined">
            <span v-html="value.text"></span>
            <ul v-if="value.list !== undefined">
              <li v-for="(item, list_index) in value.list" :key="list_index">{{item}}</li>
            </ul>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataProducerResources",
  props: ['data_producer_resources']
};
</script>
