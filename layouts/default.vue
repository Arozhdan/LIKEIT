<template>
  <div>
    <!-- <VueCustomScrollbar class="scroll-area" :settings="settings"> -->
    <Navbar />
    <Nuxt />
    <!-- </VueCustomScrollbar> -->
  </div>
</template>
<script>
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  data () {
    return {
      settings: {
        suppressScrollX: false,
        wheelSpeed: 0.6,
        swipeEasing: true,
        wheelPropagation: true

      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.scroll-area {
  position: relative;
  margin: auto;
  width: 100vw;
  height: 100vh;
}
</style>
