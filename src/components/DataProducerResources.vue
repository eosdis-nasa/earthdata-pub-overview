<!-- eslint-disable vue/no-v-for-template-key -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <BreadCrumbs />
  <div class="producer">
    <div class="mx-5">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4" v-if="data_producer_resources.heading !== undefined">{{ data_producer_resources.heading }}
          <hr>
        </h1>
        <template v-for="(value, index) in data_producer_resources.paragraphs" :key="index">
          <h1 class="display-4" v-if="value.heading">{{ value.heading }}
            <hr>
          </h1>
          <Paragraph :text="value.text" />
          <List :list="value.list" />
          <template v-if="value.box_list">
            <div class="card-grid">
              <template v-for="(box_item, box_index) in value.box_list" :key="box_index">
                <BoxList v-bind:list="box_item" />
              </template>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import BoxList from './BoxList.vue';
import BreadCrumbs from './BreadCrumbs.vue';
import Paragraph from './Paragraph.vue';
import List from './List.vue';

export default {
  components: {
    BoxList,
    BreadCrumbs,
    Paragraph,
    List
  },
  name: 'DataProducerResources',
  data() {
    return {
      data_producer_resources: []
    };
  },
  mounted() {
    // eslint-disable-next-line global-require
    this.data_producer_resources = require('@/assets/data_producer_resources.json');
  }
};
</script>
<style scoped>
.producer h1 {
  padding-top: 1rem;
}

.producer .card-grid .card {
  min-height: 9.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.25rem;
}

.producer {
  margin-bottom: 3rem;
}

.producer .card-grid .card.has-icon {
  padding-top: 3rem;
}
</style>
