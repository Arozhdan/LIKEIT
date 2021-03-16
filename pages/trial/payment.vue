<template>
  <div class="payment-page py-24">
    <div class="container">
      <div class="flex items-start justify-between">
        <div class="payment-card py-7 px-9 bg-white shadow-sm transition duration-300 hover:shadow-md flex items-center justify-between">
          <div class="flex items-center ">
            <div class="payment-card__img rounded-full w-16 h-16 mr-11" style="background-image: url('https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');" />
            <div class="payment-card__body">
              <h5 class="text-gray-900 text-lg font-semibold">
                Вводное занятие индивидуально с преподавателем
              </h5>
              <p class="mt-1 text-gray-500">
                Вводное занятие индивидуально с преподавателем
              </p>
            </div>
          </div>
          <span class="block text-gray-900 text-lg font-semibold whitespace-nowrap pl-5">
            1000 ₽
          </span>
        </div>
        <div class="payment-side px-5 py-6 bg-white shadow-sm">
          <h4 class="text-gray-900 text-lg font-semibold">
            Всего к оплате
          </h4>
          <div class="flex justify-between items-center mt-2">
            <div class="text-gray-800 font-light tracking-wide">
              Всего к оплате
            </div>
            <div class="text-gray-800 font-light tracking-wide">
              1000 ₽
            </div>
          </div>
          <div v-if="setDescount" class="flex justify-between items-center mt-2">
            <div class="text-gray-800 font-light tracking-wide">
              Промокод
            </div>
            <div class="text-gray-800 font-light tracking-wide">
              - {{ discountPromo.discount }} % ( {{ price*discountPromo.discount/100 }} ₽)
            </div>
          </div>

          <label class="block mb-6 w-full ">
            <span class="invisible">промокод</span>
            <input v-model.trim="inputPromo" class="promocode w-full border rounded focus:border-gray-700" type="text" placeholder="Промокод">
          </label>
          <div class="flex justify-between items-center mt-2 pt-5 border-t">
            <div class="text-gray-800 font-semibold text-xl tracking-wide">
              Итого
            </div>
            <div class="text-gray-800 font-semibold text-xl tracking-wide">
              {{ calcTotal }}
            </div>
          </div>
          <button class="button button--green w-full mt-8" style="width: 100%;">
            Оплатить {{ calcTotal }} ₽
          </button>
          <div class="payment-side__inner mt-8">
            <div class="text-center text-gray-900 font-semibold text-lg">
              Оплачивает другой человек?
            </div>
            <p class="text-center text-gray-500 font-light mt-3">
              Скопируйте и поделитесь ссылкой для оплаты с другим человеком
            </p>
            <input id="copyID" class="copy-link bg-white p-4 border rounded mt-10 font-light text-gray-500 overflow-auto w-full" readonly :value="'https://likeitschoo.ru'+ this.$route.fullPath ">
            <button class="button button__primary w-full mt-8" style="width: 100%;" @click="copyLink">
              Скопировать
            </button>
          </div>
          <p class="text-sm font-light text-gray-500 text-center mt-4">
            Нажимая Оплатить, вы принимаете <a class="underline" href="#">условия соглашения</a> и <a class="underline" href="#">политики конфиденциальности</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/precss/components/payment-page.pcss'
export default {
  name: 'Payment',
  data: () => ({
    price: 1000,
    inputPromo: '',
    discountPromo: {
      code: 'MARIIA',
      discount: 15
    }
  }),
  computed: {
    setDescount () {
      return this.inputPromo === this.discountPromo.code
    },
    calcTotal () {
      return this.setDescount ? this.price - this.price * this.discountPromo.discount / 100 : this.price
    }
  },
  methods: {
    copyLink () {
      const copyText = document.getElementById('copyID')
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand('copy')
    }
  }
}
</script>
