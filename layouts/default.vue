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
  },
  mounted () {
    (function (w, d, u) {
      const s = d.createElement('script'); s.async = true; s.src = u + '?' + (Date.now() / 60000 | 0)
      const h = d.getElementsByTagName('script')[0]; h.parentNode.insertBefore(s, h)
    })(window, document, 'https://cdn-ru.bitrix24.ru/b16923550/crm/site_button/loader_1_a0xwvi.js')
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
