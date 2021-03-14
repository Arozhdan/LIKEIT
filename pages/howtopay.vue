<template>
  <div class="howtopay pt-32">
    <div class="header container mb-20">
      <h2 class="section-title">
        {{ data.page_title }}
      </h2>
      <p class="section-subtitle w-4/12">
        {{ data.page_subtitle }}
      </p>
    </div>
    <div class="howtopay__body container">
      <div v-for="item in data.block" :key="item.id" class="howtopay__item flex mt-36 justify-between items-center">
        <div class="w-5/12">
          <h2 class="capitalize font-semibold text-4xl">
            {{ item.title }}
          </h2>
          <div class="howtopay__body__text mt-5 text-gray-500" v-html="item.body" />
          <div v-if="item.important" class="howtopay__body__important mt-7 flex items-center">
            <div class=" inline-block py-1 px-5 text-white font-semibold howtopay__body__tag mr-5">
              ВАЖНО
            </div>
            <p class="howtopay__body__important-text" :inner-html.prop="item.important_text | nl2br">
              При покупке любого пакета занятий,
              Вы получаете скидку 100% на вводный урок.
            </p>
          </div>
        </div>
        <div class="w-6/12">
          <img class="shadow-md" :src="api_url + item.image.url" alt="">
        </div>
      </div>
    </div>
    <div class="my-48 container flex flex-col items-center">
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
  </div>
</template>

<script>
import '../assets/precss/components/howtopay.pcss'
export default {
  name: 'Howtopay',
  async asyncData ({ $strapi }) {
    const data = await $strapi.find('howtopay')
    return { data }
  },
  data: () => ({
    api_url: process.env.strapiBaseUri
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
  }
}
</script>
