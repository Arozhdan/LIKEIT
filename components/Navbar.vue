<template>
  <div class="nav py-5 h-20 " :class="{'course-nav':navProg, 'dark-nav': darkNav}">
    <div class="container flex justify-between items-center">
      <nuxt-link :to="{name:'index'}" class="logo h-10 w-36">
        <img v-if="!darkNav" src="../assets/images/logo.svg" alt="likeIT school logo">
        <img v-else src="../assets/images/icons/logo--black.svg" alt="likeIT school logo">
      </nuxt-link>
      <div class="nav__right flex">
        <div v-if="!navProg" class="nav__links flex mr-11">
          <div class="nav__link nav__link--programs">
            Программы
            <div class="nav__link__popup flex justify-between flex-wrap">
              <div class="nav__link__popup__group">
                <div class="nav__link__popup__title flex">
                  <img src="../assets/images/icons/vector.svg" alt="design">
                  <span class="block ml-1">Дизайн</span>
                </div>
                <div class="nav__link__popup__courses">
                  <div class="nav__link__popup__course">
                    Графический дизайн
                  </div>
                  <div class="nav__link__popup__course">
                    Вебдизайн
                  </div>
                </div>
              </div>
              <div class="nav__link__popup__group">
                <div class="nav__link__popup__title flex">
                  <img src="../assets/images/icons/vector.svg" alt="design">
                  <span class="block ml-1">Дизайн</span>
                </div>
                <div class="nav__link__popup__courses">
                  <div class="nav__link__popup__course">
                    Графический дизайн
                  </div>
                  <div class="nav__link__popup__course">
                    Вебдизайн
                  </div>
                </div>
              </div>
              <div class="nav__link__popup__group">
                <div class="nav__link__popup__title flex">
                  <img src="../assets/images/icons/vector.svg" alt="design">
                  <span class="block ml-1">Дизайн</span>
                </div>
                <div class="nav__link__popup__courses">
                  <div class="nav__link__popup__course">
                    Графический дизайн
                  </div>
                  <div class="nav__link__popup__course">
                    Вебдизайн
                  </div>
                </div>
              </div>
              <div class="nav__link__popup__group">
                <div class="nav__link__popup__title flex">
                  <img src="../assets/images/icons/vector.svg" alt="design">
                  <span class="block ml-1">Дизайн</span>
                </div>
                <div class="nav__link__popup__courses">
                  <div class="nav__link__popup__course">
                    Графический дизайн
                  </div>
                  <div class="nav__link__popup__course">
                    Вебдизайн
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="nav__link underline-link">
            Отзывы
          </div>
          <div class="nav__link underline-link">
            FAQ
          </div>
          <div class="nav__link nav__link--programs">
            Перед уроком
            <div class="nav__link__popup nav__link__popup--tiny flex justify-between flex-wrap">
              <div class="nav__link__popup__group">
                <div class="nav__link__popup__title flex">
                  <img src="../assets/images/icons/vector.svg" alt="design">
                  <span class="block ml-1">Полезные ссылки</span>
                </div>
                <div class="nav__link__popup__courses">
                  <nuxt-link to="/howtopay" class="nav__link__popup__course block">
                    Как оплатить занятия
                  </nuxt-link>
                  <nuxt-link to="/start" class="nav__link__popup__course block">
                    Памятка для первого урока
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="nav__links flex mr-11">
          <nuxt-link to="/" class="nav__link underline-link">
            Чему научим
          </nuxt-link>
          <div class="nav__link underline-link">
            Программа курса
          </div>
          <div class="nav__link nav__link--start underline-link">
            Начать учиться
          </div>
        </div>
        <div class="nav__button">
          <a href="tel:420776077103" class="button button__primary  contact-btn" :class="'contact-btn--'+ contactBtnColor">
            +7 (961) 204 36 09
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/precss/components/nav.pcss'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
export default {
  computed: {
    navProg () {
      return this.$route.name === 'программы-course'
    },
    darkNav () {
      return this.$route.name === 'howtopay' || this.$route.name === 'start'
    },
    contactBtnColor () {
      if (this.$store.getters['color/getColor']) {
        return this.$store.getters['color/getColor']
      }
      return ''
    }
  },
  mounted () {
    gsap.registerPlugin(ScrollTrigger)
    this.navLinks()
  },
  methods: {
    navLinks () {
      const navLinks = gsap.utils.toArray('.underline-link')
      navLinks.forEach((link) => {
        link.addEventListener('mouseleave', () => {
          link.classList.add('underline-link--out')
          setTimeout(() => {
            link.classList.remove('underline-link--out')
          }, 300)
        })
      })
    }
  }
}
</script>
