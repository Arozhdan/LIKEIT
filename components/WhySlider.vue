<template>
  <Splide
    :options="sliderOptions"
    @splide:mounted="onMounted"
  >
    <SplideSlide v-for="item in slides" :key="item.id">
      <div class="slider-body flex">
        <div class="w-1/2 slider-left px-16 pt-7 pb-20">
          <div
            class="flex justify-center uppercase text-xl text-gray-900 font-semibold"
          >
            САМостоятельно
          </div>
          <h4
            class="text-center uppercase text-3xl text-gray-900 font-semibold mt-16 pt-9"
          >
            {{ item.cons_title }}
          </h4>
          <p
            class="text-center  text-lg text-gray-900 font-semibold mt-5 px-10"
          >
            Тут нужно что-нибудь классное написать побольше о том. что за
            ступени отбора такие.
          </p>
        </div>
        <div class="w-1/2 slider-right px-16 pt-7 pb-20">
          <div
            class="flex justify-center uppercase text-xl text-white font-semibold"
          >
            <div class="logo h-10 w-36">
              <img src="../assets/images/logo.svg" alt="likeit school logo">
            </div>
          </div>
          <h4
            class="text-center uppercase text-3xl text-white font-semibold mt-16 pt-9"
          >
            5 ступеней отбора Кадров
          </h4>
          <p class="text-center  text-lg text-white font-semibold mt-5 px-10">
            Тут нужно что-нибудь классное написать побольше о том. что за
            ступени отбора такие.
          </p>
        </div>
      </div>
    </SplideSlide>
    <template #controls>
      <div class="splide__progress">
        <div class="splide__progress__bar" />
      </div>
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <img src="../assets//images/icons/left.svg" alt="#">
        </button>
        <button class="splide__arrow splide__arrow--next">
          <img src="../assets//images/icons/right.svg" alt="#">
        </button>
      </div>
    </template>
  </Splide>
</template>
<script>
export default {
  data () {
    return {
      sliderOptions: {
        gap: '2rem',
        type: 'loop'
      },
      slides: []
    }
  },
  async beforeMount () {
    const temp = await this.$strapi.graphql({
      query: `
            query {
             homepage {
                why_us{
                  cons
                  pros
                  cons_title
                  pros_title
                }
             }
            }
         `
    })
    this.slides = temp.homepage.why_us
  },
  methods: {
    onMounted (splide) {
      setTimeout(() => {
        splide.refresh()
      }, 1000)
    }
  }
}
</script>
