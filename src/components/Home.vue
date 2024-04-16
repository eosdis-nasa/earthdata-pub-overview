<!-- eslint-disable vue/no-v-for-template-key -->
<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable max-len -->
<template>
  <Hero />
  <div class="home">
    <div class="mx-5">
      <div class="row pt-5 justify-content-center">
        <h1 class="display-4" v-if="home.heading">{{ home.heading }}
          <hr>
        </h1>
        <template v-for="(value, index) in home.paragraphs" :key="index">
          <span class="display-4 main-width"
            v-if="value.heading && (value.heading == 'Earthdata Pub Features' || value.heading == 'Earthdata Pub Process')">
            <hr>
          </span>
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
          <template v-if="value.three_columns">
            <span class="display-4 main-width">
              <hr>
            </span>
            <div class="home-bottom-grid ">
              <template v-for="(col, col_index) in value.three_columns" :key="col_index">
                <Paragraph v-if="col.text" :text="col.text" />
                <div v-else-if="col.image">
                  <img :src="getImgUrl(col.image)" :alt="col.image_alt_text">
                </div>
              </template>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import BoxList from './BoxList.vue';
import Paragraph from './Paragraph.vue';
import List from './List.vue';

export default {
  components: {
    Hero,
    BoxList,
    Paragraph,
    List
  },
  name: 'Home',
  data() {
    return {
      home: []
    };
  },
  mounted() {
    // eslint-disable-next-line global-require
    this.home = require('@/assets/home.json');
  },
  methods: {
    getImgUrl(pic) {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../assets/${pic}`);
    }
  }
};

</script>
<style scoped>
.home .card-grid .card {
  min-height: 11.75rem;
  margin-bottom: 1.5rem;
}

.home h1 {
  padding-top: 2rem;
}

.home h1:first-of-type {
  padding-top: 0;
}

.home-bottom-grid {
  display: inline-grid;
  grid-gap: 10px;

  grid-template-columns: 1fr 1fr auto;

  text-align: left;
  margin-top: 2rem;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.home-bottom-grid div {
  text-align-last: right;
}
</style>
