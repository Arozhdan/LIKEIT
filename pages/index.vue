<template>
  <keep-alive>
    <div class="page homepage ">
      <div class="homepage-header__wrapper">
        <div class="homepage-header mt-28 mb-36 container flex">
          <div class="homepage-header__left w-9/12">
            <h1 class="homepage-header__title">
              {{ homepage.page_title }}
            </h1>
            <p class="homepage-header__suptitle w-5/12">
              {{ homepage.page_subtitle }}
            </p>
            <button
              class="button button__primary button__primary--bigger text-xl mt-9"
            >
              Вводный урок
            </button>
          </div>
        </div>
        <div class="advantages-wrapper">
          <div
            v-for="adv in homepage.advantages"
            :key="adv.id"
            class="advantage-item"
          >
            <div class="advantage-item-icon">
              <img :src="api_url + adv.icon.url" alt="molecule">
            </div>
            <h3 class="advantage-item-title mt-5">
              {{ adv.title }}
            </h3>
          </div>
        </div>
      </div>
      <div class="welcome py-14">
        <div class="container welcome-inner py-7 px-24 rounded-xl">
          <h3 class="mt-4 text-3xl font-semibold text-gray-900">
            Добро Пожаловать в LikeIT school!
          </h3>
          <p class="mt-6 text-gray-700 text-xl">
            В нашем образовательном центре мы предоставляем множество преимуществ
            для успешного обучения ваших детей, помогая при этом развивать их
            аналитический склад ума, тврочество и поддерживая интерес.
          </p>
          <div class="flex justify-center mt-8 mb-2">
            <button class="button button--secondary">
              Начать учиться
            </button>
          </div>
        </div>
      </div>
      <div class="about py-16">
        <h2 class="section-title">
          О нас
        </h2>
        <p class="section-subtitle">
          В LikeIT school наша миссия состоит в том, чтобы обеспечить превосходное
          качество в дошкольных учреждениях, детских садах, до и после школьных
          программ, а также в летних лагерях для семей, живущих в большей
          местности.
        </p>
        <p class="section-subtitle py-10">
          Здесь вы найдете исключительных учителей, учебную программу и учебную
          среду, которая побуждает детей учиться, играть и исследовать в
          безопасной, здоровой и благоприятной среде, способствующей творческому
          мышлению.
        </p>
      </div>
      <div class="courses py-28">
        <div class="container">
          <h2 class="font-semibold text-gray-900 text-4xl ml-16">
            Программы и курсы LikeIT school
          </h2>
          <div class="courses-wrapper flex justify-between flex-wrap mt-16">
            <CourseCard v-for="course in courses.courses" :key="course.id" :content="course" />
          </div>
        </div>
      </div>
      <div class="benefits py-20 px-5 container">
        <h2 class="section-title">
          Что мы Вам даем?
        </h2>
        <p class="section-subtitle">
          В нашем образовательном центре мы предоставляем множество преимуществ
          для успешного обучения ваших детей, помогая при этом развивать их
          аналитический склад ума, тврочество и поддерживая интерес.
        </p>
        <div class="benefits__wrapper mt-32 flex justify-between flex-wrap">
          <div
            v-for="benefit in homepage.benefits"
            :key="benefit.id"
            class="benefits__item w-4/12 flex justify-between"
          >
            <div class="benefits__item__left w-7/12">
              <h3 class="text-gray-900 font-semibold text-2xl">
                {{ benefit.titile }}
              </h3>
              <p class="mt-2 text-gray-700 text-lg pr-6">
                {{ benefit.text }}
              </p>
            </div>
            <div class="benefits__item__icon w-5/12 mt-4">
              <img
                :src="api_url + benefit.icon.url"
                :alt="benefit.icon.alternativeText"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="plank py-10 plank--promo">
        <div class="container flex items-center">
          <div class="text-white w-72 -mx-6">
            <img src="../assets/images/promo-doggy.png" alt="doggy">
          </div>
          <div>
            <h4 class="text-white text-3xl font-semibold">
              Промокод на скидку 15% на все курсы
            </h4>
            <p class="text-white mt-3 text-lg pr-24">
              Не упустите возможность получить максимальную выгоду. Назовите
              промокод нашему менеджеру и наслаждайтесь лучшими ценами!
            </p>
          </div>
          <div>
            <button
              class="button button--green button__primary--bigger text-white uppercase shadow"
            >
              MARIALIKEIT
            </button>
          </div>
        </div>
      </div>
      <div class="teachers pt-24">
        <h2 class="section-title">
          Преподаватели
        </h2>
        <p class="section-subtitle">
          Те самые люди, которые позволяют нам быть теми, кем мы являемся!
        </p>
        <div class="mt-16 container flex flex-wrap justify-between">
          <div
            v-for="info in homepage.teacher_info"
            :key="info.id"
            class="teacher-card py-9 px-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div class="flex justify-end">
              <div class="w-16 h-16">
                <img src="../assets/images/icons/fingerprint.svg" alt="">
              </div>
            </div>
            <h4
              class="text-gray-900 text-2xl font-semibold capitalize"
              :inner-html.prop="info.title | nl2br"
            />
            <p class="text-gray-700 mt-4">
              Тут нужно что-нибудь классное написать побольше о том. что за
              ступени отбора такие.
            </p>
          </div>
        </div>
        <div class="teachers-stat py-12 mt-24">
          <div class="container flex justify-around">
            <div
              v-for="stat in homepage.teacher_stat"
              :key="stat.id"
              class="w-1/4"
            >
              <div class="text-white text-center font-semibold text-5xl">
                {{ stat.data }}
              </div>
              <p class="text-center mt-3 w-7/12 mx-auto text-white text-lg">
                {{ stat.item }}
              </p>
            </div>
          </div>
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
      <div id="testimonials" class="testimonials py-14">
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
      <div class="faq py-24">
        <div class="container">
          <h2 class="section-title">
            Часто задаваемые вопросы
          </h2>
          <p class="section-subtitle">
            Если есть вопрос, значит есть вопрос. Мы ответили на самые
            распространенные вопросы, чтобы Вы могли получить четкие ответы без
            промедлений.
          </p>
          <div
            class="faq-wrapper mt-20 flex justify-around items-start flex-wrap"
          >
            <Collapse v-for="i in homepage.faq" :key="i.id" :content="i" />
          </div>
        </div>
      </div>
    </div>
  </keep-alive>
</template>
<script>
import Form from '../components/Form.vue'
import TestimonialSlider from '../components/TestimonialSlider.vue'
import Collapse from '../components/Collapse.vue'
import CourseCard from '../components/CourseCard.vue'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '../assets/precss/components/homepage.pcss'
import '../assets/precss/components/benefitsSplide.pcss'
import '../assets/precss/components/price.pcss'
export default {
  components: {
    CourseCard,
    Collapse,
    TestimonialSlider,
    Form
  },
  async asyncData ({ $strapi }) {
    const homepage = await $strapi.$homepage.find()
    const prices = await $strapi.$prices.find()
    const courses = await $strapi.graphql({
      query: `
        query{
          courses{
            id
            title
            description
            color
            category{
              name
            }
            age{
              number
            }
          }
        }`
    })
    return { homepage, prices, courses }
  },
  data () {
    return {
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
  head () {
    return {
      title: this.homepage.seo ? this.homepage.seo.seo_title + ' | ' + this.$store.getters.getSettings.Name : this.$store.getters.getSettings.Name,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.homepage.page_title || ''
        }
      ]
    }
  }
}
</script>
