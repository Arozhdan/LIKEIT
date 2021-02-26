<template>
  <div
    class="price-card bg-white rounded-3xl pt-5 px-9 pb-11 shadow-sm hover:shadow-lg transition duration-300"
    @mouseenter="initAnim"
    @mouseleave="revertAnim"
  >
    <div class="price-card__inner">
      <div
        class="text-lg font-semibold uppercase text-center h-7 mb-14 text-white"
      >
        6 занятий
      </div>
      <p class="price-card__subtitle text-center text-lg text-gray-500 mb-8">
        <b class="block text-gray-600">Запишитесь сегодня </b>
        консультацию и получите цену
      </p>
      <div
        class="text-red-400 text-5xl font-semibold text-center border-b-2 pb-9 mb-9"
      >
        6 500 ₽
      </div>
      <ul class="price-card__list">
        <li>Вечный доступ к материалам</li>
        <li>Длительность урока - 1 час</li>
        <li>Возможность выбрать преподавателя</li>
        <li>Возможность записи урока</li>
      </ul>
      <div class="flex justify-center mt-10">
        <div class="price-card__button">
          Приобрести
        </div>
      </div>
    </div>
    <div class="price-card__copy">
      <div class="text-lg font-semibold uppercase text-center h-7 mb-14">
        6 занятий
      </div>
      <p class="text-center text-lg text-gray-500 mb-8">
        <b class="block text-gray-600">Запишитесь сегодня </b>
        консультацию и получите цену
      </p>
      <div
        class="text-red-400 text-5xl font-semibold text-center border-b-2 pb-9 mb-9"
      >
        6 500 ₽
      </div>
      <ul class="price-card__list">
        <li>Вечный доступ к материалам</li>
        <li>Длительность урока - 1 час</li>
        <li>Возможность выбрать преподавателя</li>
        <li>Возможность записи урока</li>
      </ul>
      <div class="flex justify-center mt-10">
        <div class="price-card__button">
          Приобрести
        </div>
      </div>
    </div>
    <div class="price-card__mask" />
  </div>
</template>
<script>
import { gsap } from 'gsap/dist/gsap.js'
export default {
  mounted () {
    gsap.set(['.price-card__mask'], {
      yPercent: -90
    })
  },
  methods: {
    initAnim (e) {
      const mask = e.target.querySelector('.price-card__mask')
      gsap.to(mask, {
        duration: 1,
        ease: 'power4.inOut',
        yPercent: 0
      })
    },
    revertAnim (e) {
      const mask = e.target.querySelector('.price-card__mask')
      gsap.to(mask, {
        duration: 1,
        ease: 'power4.inOut',
        yPercent: -90
      })
    }
  }
}
</script>
