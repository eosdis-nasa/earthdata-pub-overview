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
          <h1 class="display-4" v-if="value.heading">{{ value.heading }}
            <hr>
          </h1>
          <Paragraph :text="value.text" />
          <List :list="value.list" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import Paragraph from './Paragraph.vue';
import List from './List.vue';

export default {
  components: {
    Hero,
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
  }
};

</script>
<style scoped>
.home h1 {
  padding-top: 2rem;
}

.home h1:first-of-type {
  padding-top: 0;
}
</style>
