<template>
  <div class="start-page">
    <div class="start-page__header py-32">
      <div class="container flex justify-between items-center">
        <div class="w-1/2">
          <h1 class="text-gray-900 font-semibold text-5xl capitalize">
            {{ data.page_title }}
          </h1>
          <p class="text-gray-500 w-4/5 mt-4 text-lg" :inner-html.prop="data.page_subtitle | nl2br" />
        </div>
        <div class="w-1/2">
          <img class="mx-auto" src="../assets/images/icons/comp.svg" alt="">
        </div>
      </div>
    </div>
    <div class="before-lesson container flex justify-center pb-28">
      <div class="w-10/12">
        <div v-for="i in data.intro" :key="i.id" class="before-lesson__item">
          <h4 class="text-gray-900 font-semibold text-3xl pb-4 border-b">
            {{ i.title }}
          </h4>
          <p class="text-gray-500 text-lg mt-4" :inner-html.prop="i.subtitle | nl2br" />
        </div>
      </div>
    </div>
    <div class="start-instructions container pt-28 pb-48">
      <h2 class="section-title">
        Памятка для Первого урока
      </h2>
      <p class="section-subtitle w-5/12">
        Наши занятия проходят на платформе Zoom. Для удобства мы создали краткую инструкцию по установке и настройке программы.
      </p>
      <div class="start-instructions__switcher flex justify-center items-center mt-16 mb-12">
        <div class="text-gray-700 text-lg mr-10">
          Инструкция для:
        </div>
        <div class="start-instructions__switcher__item" :class="{'start-instructions__switcher__item--selected': selectedOS==='mac' }" @click="selectedOS='mac'">
          MacOS
        </div>
        <div class="start-instructions__switcher__item" :class="{'start-instructions__switcher__item--selected' : selectedOS==='windows' }" @click="selectedOS='windows'">
          Windows
        </div>
      </div>
      <div v-if="selectedOS === 'mac'" class="start--body">
        <div v-for="(item, index) in data.mac" :key="item" class="start__item  mt-36">
          <div class="start__item__inner flex justify-between items-center">
            <div class="w-5/12">
              <h2 class="capitalize font-semibold text-4xl">
                {{ item.title }}
              </h2>
              <div class="start__body__text mt-5 text-gray-500" v-html="item.body" />
              <div v-if="index === 0" class="start__btn-wrapper mt-7">
                <a class="start__btn" href="#">Скачать Zoom</a>
              </div>
            </div>
            <div class="w-6/12">
              <img class="start__item__img" :src="api_url + item.image.url" alt="">
            </div>
          </div>
          <div v-if="item.additional.length" class="w-11/12 mx-auto flex-col items-center my-40 start-instructions__switcher__item-wrapper ">
            <div v-for="(i, ind) in item.additional" :key="i.id" class="flex justify-between items-center start__item__additional">
              <div class="start__item__additional__num">
                {{ ind+1 }}
              </div>
              <div class="w-5/12">
                <h2 class="capitalize font-semibold text-4xl" style="color: #7B64A5">
                  {{ i.title }}
                </h2>
                <div class="start__body__text mt-5 text-gray-500" :inner-html.prop="i.subtitle | nl2br" />
              </div>
              <div class="w-5/12">
                <img class="start__item__img" :src="api_url + i.image.url" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="start--body">
        <div v-for="(item, index) in data.windows" :key="item" class="start__item  mt-36">
          <div class="start__item__inner flex justify-between items-center">
            <div class="w-5/12">
              <h2 class="capitalize font-semibold text-4xl">
                {{ item.title }}
              </h2>
              <div class="start__body__text mt-5 text-gray-500" v-html="item.body" />
              <div v-if="index === 0" class="start__btn-wrapper mt-7">
                <a class="start__btn" href="#">Скачать Zoom</a>
              </div>
            </div>
            <div class="w-6/12">
              <img class="start__item__img" :src="api_url + item.image.url" alt="">
            </div>
          </div>
          <div v-if="item.additional.length" class="w-11/12 mx-auto flex-col items-center my-40 start-instructions__switcher__item-wrapper ">
            <div v-for="(i, ind) in item.additional" :key="i.id" class="flex justify-between items-center start__item__additional">
              <div class="start__item__additional__num">
                {{ ind+1 }}
              </div>
              <div class="w-5/12">
                <h2 class="capitalize font-semibold text-4xl" style="color: #7B64A5">
                  {{ i.title }}
                </h2>
                <div class="start__body__text mt-5 text-gray-500" :inner-html.prop="i.subtitle | nl2br" />
              </div>
              <div class="w-5/12">
                <img class="start__item__img" :src="api_url + i.image.url" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" pb-40 container flex flex-col items-center">
      <h4 class="text-2xl text-gray-900 font-semibold mb-4">
        Желаем успехов :)
      </h4>
      <p class="text-gray-600 text-center text-lg">
        Остались вопросы? Напишие нам, и мы постараемся <br> оперативно помочь Вам!
      </p>
      <div class="mt-8">
        <a href="#" class="social-btn social-btn--tg">Telegram</a>
        <a href="#" class="social-btn social-btn--wp ml-6">WhatsApp</a>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/precss/components/start.pcss'
export default {
  name: 'Start',
  async asyncData ({ $strapi }) {
    const data = await $strapi.find('start')
    return { data }
  },
  data: () => ({
    api_url: process.env.strapiBaseUri,
    selectedOS: 'mac'
  }),
  head () {
    return {
      title: this.data.seo ? this.data.seo.seo_title + ' | ' + this.$store.getters.getSettings.Name : this.$store.getters.getSettings.Name,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data.page_title || ''
        }
      ]
    }
  },
  mounted () {
    navigator.appVersion.includes('Win') && (this.selectedOS = 'windows')
    navigator.appVersion.includes('Mac') && (this.selectedOS = 'mac')
  }
}
</script>
