<template>
  <div @click="scrollToTop()" :class="['back-to-top-btn', { 'go-top': isTop }]">
    <button type="button" class="btn btn-to-top text-white" aria-label="Scroll to Top">
      <img :src="getImgUrl('ic_arrow_up.svg')" class="icon" alt="back to top button image"><span
        class="btn-to-top-text">TOP</span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      isTop: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    getImgUrl(pic) {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../assets/${pic}`);
    }
  },
  mounted() {
    const that = this;
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isTop = true;
      } else {
        that.isTop = false;
      }
    });
  }
};
</script>
<style scoped>
.back-to-top-btn {
  position: fixed;
  cursor: pointer;
  bottom: -100px;
  right: 20px;
  color: #ffffff;
  z-index: 4;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  border-radius: 50%;
  font-size: 22px;
  transition: .6s;
  overflow: hidden;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  width: 80px;
  height: 80px;
  scroll-behavior: unset;
  border: 1px solid #70707040;
  background: #FFFFFF 0% 0% no-repeat padding-box;
}

.back-to-top-btn i {
  position: absolute;
  right: 0;
  left: 0;
  top: 45%;
  transform: translateY(-45%);
  text-align: center;
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
}

.back-to-top-btn.go-top {
  opacity: 1;
  visibility: visible;
  bottom: 50px;
}

.back-to-top-btn:hover {
  color: #ffffff;
  transition: .6s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  transform: translateY(-5px);
}
</style>
