<template>
  <div class="page course-page " :class="'course-page--' + (course && course.color) ">
    <div class="homepage-header__wrapper">
      <div class="homepage-header mt-20 container flex">
        <div class="homepage-header__left w-9/12">
          <div class="flex">
            <div class="button tag tag--1 mr-5">
              от {{ course.age && course.age.number }} лет
            </div>
            <div class="button tag tag--2">
              {{ course && course.level }}
            </div>
          </div>
          <h1 class="homepage-header__title">
            {{ course && course.title }}
          </h1>
          <p class="homepage-header__suptitle">
            {{ course && course.description }}
          </p>
          <button
            class="button button__primary button__primary--bigger text-xl mt-14"
          >
            Вводный урок
          </button>
        </div>
      </div>
    </div>
    <div class="goals pt-32 pb-24">
      <div class="container">
        <h2 class="section-title">
          Чему научим на курсе
        </h2>
        <div class="goals-inner mt-16">
          <div class="flex justify-center">
            <div class="goal-card goal-card--1 w-2/6 bg-white px-8 pb-12">
              <div class="line h-8 mb-10" />
              <h3
                class="text-gray-900 capitalize text-center text-2xl font-semibold tracking-wide mb-5"
              >
                сложное <br>
                простыми словами
              </h3>
              <p class="text-gray-700" style="font-size:18px">
                Тут нужно что-нибудь классное написать побольше о том. что за
                ступени отбора такие.
              </p>
            </div>
            <div class="goal-card goal-card--2 w-2/6 bg-white px-8 pb-12 ml-20">
              <div class="line h-8 mb-10" />
              <h3
                class="text-gray-900 capitalize text-center text-2xl font-semibold tracking-wide mb-5"
              >
                сложное <br>
                простыми словами
              </h3>
              <p class="text-gray-700" style="font-size:18px">
                Тут нужно что-нибудь классное написать побольше о том. что за
                ступени отбора такие.
              </p>
            </div>
          </div>
          <div class="flex justify-between mt-16 items-start">
            <div class="goal-card goal-card--3 w-2/6 bg-white px-8 pb-12">
              <div class="line h-8 mb-10" />
              <h3
                class="text-gray-900 capitalize text-center text-2xl font-semibold tracking-wide mb-5"
              >
                сложное <br>
                простыми словами
              </h3>
              <p class="text-gray-700" style="font-size:18px">
                Тут нужно что-нибудь классное написать побольше о том. что за
                ступени отбора такие.
              </p>
            </div>
            <div class="flex-grow flex justify-center">
              <img src="../../assets/images/icons/Sit.png" alt="">
            </div>
            <div class="goal-card goal-card--4 w-2/6 bg-white px-8 pb-12">
              <div class="line h-8 mb-10" />
              <h3
                class="text-gray-900 capitalize text-center text-2xl font-semibold tracking-wide mb-5"
              >
                сложное <br>
                простыми словами
              </h3>
              <p class="text-gray-700" style="font-size:18px">
                Тут нужно что-нибудь классное написать побольше о том. что за
                ступени отбора такие.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-work py-20">
      <div class="container">
        <div>
          Проектная работа: <span> на курсе ребята сформируют собственное портфолио с
            более чем 15 полноценными иллюстрациями
          </span>
        </div>
      </div>
    </div>
    <div class="suitable py-32">
      <div class="container">
        <h2 class="section-title ">
          Для кого подходит курс?
        </h2>
        <p class="section-subtitle">
          В нашем образовательном центре мы предоставляем множество преимуществ
          для успешного обучения ваших детей, помогая при этом развивать их
          аналитически.
        </p>
        <div class="suitable__inner mt-16 flex justify-between items-center">
          <div
            v-for="i in 4"
            :key="i"
            class="suitable__card flex flex-col items-center"
          >
            <div
              class="suitable__card__img w-24 h-24 flex justify-center items-center rounded-full mb-5"
            >
              <img src="../../assets/images/icons/creativity.svg" alt="">
            </div>
            <span
              class="text-center text-xl"
            >Для тех, кто хочет развивать креативность</span>
          </div>
        </div>
      </div>
    </div>
    <Program />
    <div class="works my-64">
      <div class="works-top container flex justify-between items-center">
        <div class="w-5/12">
          <h2 class="text-4xl font-semibold text-gray-900 tracking-wide mb-5">
            Работы Курса
          </h2>
          <p class="text-lg text-gray-500">
            В нашем образовательном центре мы предоставляем множество
            преимуществ для успешного обучения ваших детей, помогая при этом
            развивать их аналитически.
          </p>
        </div>
        <div class="works-top-right w-5/12 pt-12 px-8 pb-16 flex">
          <div class="works-top-right__img-wrapper w-1/2">
            <div
              class="works-top-img max-w-sm"
              :style="`background-image:url(${firstImageUrl})`"
              @click="openLightboxOnSlide(1)"
            />
          </div>
          <div class=" w-1/2">
            <div
              class="text-center mb-4 text-2xl font-semibold text-white pb-6 border-b border-gray-100 border-opacity-30"
            >
              Урок 5
            </div>
            <p class="text-white opacity-90">
              В нашем образовательном центре мы предоставляем множество
              преимуществ для успешного
            </p>
          </div>
        </div>
      </div>
      <div class="works-cards container flex justify-between">
        <div
          v-for="(i, index) in rowImages"
          :key="i"
          class="work-img"
          @click="openLightboxOnSlide(index + 2)"
        >
          <img :src="i" alt="">
        </div>
        <div class="work-card">
          <p class="text-center text-gray-600">
            Больше работ наших учеников, можно найти в группе ВКонтакте
          </p>
          <div class="flex justify-center mt-7">
            <a
              href="#"
              target="_blank"
              class="button button__primary button__primary--bigger"
            >
              Смотреть ещё
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="study-process mb-64">
      <div class="container">
        <h2 class="section-title ">
          Как проходит обучение?
        </h2>
        <p class="section-subtitle">
          В нашем образовательном центре мы предоставляем множество преимуществ
          для успешного обучения ваших детей, помогая при этом развивать их
          аналитиче
        </p>
        <div class="flex mt-20 justify-between">
          <div v-for="(i, index) in 4" :key="i" class="study-process__card">
            <div
              class="study-process__num"
              :class="'study-process__num--' + (index + 1)"
            >
              <img
                :src="
                  require('../../assets/images/icons/numbers/num-' +
                    (index + 1) +
                    '.svg')
                "
                alt=""
              >
            </div>
            <div class="text-gray-900 text-2xl font-semibold mt-6 mb-2">
              Вводная лекция с преподавателем
            </div>
            <p class="text-gray-500">
              Нужен только комютер и доступ к Интернету
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="course-stat py-20">
      <div class="container">
        <h2 class="section-title" style="color:#fff">
          что вас ждет на курсе?
        </h2>
        <div class="flex justify-between mt-14">
          <div v-for="i in 3" :key="i" class="course-stat__card pt-7 pb-5 px-8 bg-white rounded-3xl">
            <div class="course-stat__icon flex w-24 h-24 mx-auto">
              <img src="../../assets/images/icons/time.svg" alt="">
            </div>
            <div class="text-center text-gray-900 font-semibold tracking-wide text-2xl">
              24 уроков
            </div>
            <p class="text-gray-500 text-center">
              Тут нужно что-нибудь классное
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonials py-20">
      <div class="container">
        <h2 class="section-title">
          Отзывы
        </h2>
        <p class="section-subtitle">
          Те самые люди, которые позволяют нам быть теми, кем мы являемся!
        </p>
        <TestimonialSlider />
      </div>
    </div>
    <div class="callout py-28">
      <div class="container flex items-center justify-center">
        <div class="w-1/2 px-16">
          <div class="text-white">
            <h3 class="text-5xl font-semibold capitalize leading-snug mb-6">
              Начните свой путь <br>в LikeIT сегодня!
            </h3>
            <div class="callout-list pr-14">
              <div
                v-for="i in 3"
                :key="i"
                class="callout-list__item text-lg pl-8 relative"
              >
                Подберем учителя индивидуально с учетом уровня и темперамента
                ученика
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 px-16">
          <Form />
        </div>
      </div>
      <div class="callout__bottom container mt-32">
        <h2 class="text-center text-4xl text-white font-semibold tracking-wide mb-10 ">
          Как это работает?
        </h2>
        <div class="flex justify-between w-10/12 mx-auto items-start">
          <div class="w-1/4 flex flex-col items-center justify-center">
            <div class="callout__bottom__num">
              <span>1</span>
            </div>
            <div class="mt-3 text-lg text-white">
              Оставьте заявку
            </div>
          </div>
          <div class="w-1/4 flex flex-col items-center justify-center">
            <div class="callout__bottom__num">
              <span>2</span>
            </div>
            <div class="mt-3 text-lg text-white">
              Наш менеджер позвонит Вам
              с 9:00 до 21:00 по МСК или на следующий день, если заявка отправлена в ночное время
            </div>
          </div>
          <div class="w-1/4 flex flex-col items-center justify-center">
            <div class="callout__bottom__num">
              <span>3</span>
            </div>
            <div class="mt-3 text-lg text-white">
              Менеджер ответит на все Ваши вопросы, подберет оптимальный план обучения и назначит вводное занятие
            </div>
          </div>
        </div>
      </div>
    </div>
    <FsLightbox :slide="slide" :toggler="galleryVisible" :sources="images" />
  </div>
</template>
<script>
import TestimonialSlider from '../../components/TestimonialSlider.vue'
import Program from '../../components/Program.vue'
import '~/assets/precss/components/course-page.pcss'
import Form from '~/components/Form'

export default {
  components: {
    Form,
    Program,
    TestimonialSlider
  },
  async asyncData ({ route, $strapi }) {
    const temp = await $strapi.find('courses', [['title', route.params.course]])
    const course = temp[0]
    return { course }
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      galleryVisible: false,
      slide: 1,
      images: []
    }
  },
  computed: {
    firstImageUrl () {
      return typeof this.course.gallery !== 'undefined' ? this.api_url + this.course.gallery[0].url : ''
    },
    rowImages () {
      const resultArray = []
      if (typeof this.course.gallery !== 'undefined') {
        this.course.gallery.forEach((item) => {
          resultArray.push(this.api_url + item.formats.square300x300.url)
        })
        resultArray.shift()
      }
      return resultArray
    }
  },
  mounted () {
    if (typeof this.course.gallery !== 'undefined') {
      this.course.gallery.forEach((item) => {
        this.images.push(this.api_url + item.url)
      })
    }
    if (this.course) {
      this.updColor()
    }
  },
  methods: {
    updColor () {
      this.$store.dispatch('color/colorUpdate', this.course.color)
    },
    openLightboxOnSlide (number) {
      if (this.course) {
        this.slide = number
        this.galleryVisible = !this.galleryVisible
      }
    }
  }
}
</script>
