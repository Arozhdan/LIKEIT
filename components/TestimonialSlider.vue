<template>
  <Splide
    :options="testimonialOptions"
    class="testimonials-slider mt-24 mb-12"
    @splide:mounted="onMounted"
  >
    <SplideSlide
      v-for="testimonial in testimonials"
      :key="testimonial.id"
      class="testimonials-card py-8 px-9 bg-white shadow-sm rounded-3xl"
    >
      <div class="flex justify-between items-center mb-10">
        <div class="flex items-center">
          <div v-for="i in stars(testimonial.rate)" :key="i" class="w-5 h-5 mr-2">
            <img src="../assets/images/icons/star.svg" alt="star">
          </div>
          <div v-if="halfStar(testimonial.rate)" class="w-5 h-5">
            <img src="../assets/images/icons/star-half.svg" alt="">
          </div>
          <img src="" alt="">
        </div>
        <div class="text-red-400">
          {{ published(testimonial.publication_day||testimonial.published_at) }}
          {{ dayEnding(published(testimonial.publication_day||testimonial.published_at)) }} назад
        </div>
      </div>
      <p class="text-gray-600 text-lg font-light mb-6">
        " {{ testimonial.text }} "
      </p>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="w-12 h-12 mr-3 rounded-full overflow-hidden">
            <img v-if="testimonial.avatar.url" :src="api_url+testimonial.avatar.url" alt="">
            <img v-else src="../assets/images/icons/anonim.svg" alt="">
          </div>
          <div class="font-semibold text-gray-900">
            {{ testimonial.name }}
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>
<script>
export default {
  data () {
    return {
      testimonials: [],
      error: null,
      api_url: process.env.strapiBaseUri,
      testimonialOptions: {
        gap: '60px',
        perPage: 2,
        perMove: 1,
        pagination: false,
        type: 'loop',
        classes: {
          arrows: 'splide__arrows testimonial-arrows'
        }
      }
    }
  },
  async beforeMount () {
    try {
      this.testimonials = await this.$strapi.$testimonials.find()
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    onMounted (splide) {
      setTimeout(() => {
        splide.refresh()
      }, 1000)
    },
    stars (num) {
      return Math.floor(num)
    },
    halfStar (num) {
      return num > Math.floor(num)
    },
    published (startDate) {
      const start = new Date(startDate)
      const end = Date.now()
      let dayCount = 0
      // eslint-disable-next-line no-unmodified-loop-condition
      while (end > start) {
        dayCount++
        start.setDate(start.getDate() + 1)
      }
      return dayCount
    },
    dayEnding (num) {
      num = num + ''
      if (+num === 1) { return 'день' }
      if (num[num.length - 1] === '1' && +num > 19) { return 'день' }
      if (+num[num.length - 1] > 1 && +num[num.length - 1] < 5) { return 'дня' }
      return 'дней'
    }
  }
}
</script>
