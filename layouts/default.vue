<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '~/components/Footer'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
export default {
  components: { Navbar, Footer },
  data: () => ({
    color: ''
  }),
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
