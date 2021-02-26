<template>
  <div class="nav container py-5 h-20 flex justify-between items-center">
    <div class="logo h-10 w-36">
      <img src="../assets/images/logo.svg" alt="likeit school logo">
    </div>
    <div class="nav__right flex">
      <div class="nav__links flex mr-11">
        <div class="nav__link underline-link">
          Главная
        </div>
        <div class="nav__link underline-link">
          О нас
        </div>
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
          Тарифы
        </div>
        <div class="nav__link underline-link">
          Отзывы
        </div>
        <div class="nav__link underline-link">
          FAQ
        </div>
        <div class="nav__link underline-link">
          Контакты
        </div>
      </div>
      <div class="nav__button">
        <a href="#" class="button button__primary">
          +7 (961) 204 36 09
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/precss/components/nav.pcss'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
export default {
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
