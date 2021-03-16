/* eslint-disable no-undef */
<template>
  <form
    class="form form--contacts bg-white rounded-xl py-11 px-10 w-10/12"
    @submit.prevent="submitForm"
  >
    <div class="text-center text-gray-900 font-semibold text-lg mb-8">
      Заполните форму, и мы свяжемся
      с Вами в ближайшее время
    </div>
    <label>
      <span class="hidden"> Имя и возраст ребенка</span>
      <input
        v-model="$v.childName.$model"
        class="py-4 px-6 border border-gray-400 text-gray-700 w-full rounded"
        placeholder="Возраст и Имя ребенка"
        type="text"
        :class="status($v.childName)"
      >
    </label>
    <label
      class="
            mt-5
            block"
    >
      <span class="hidden"> Телефон родителя</span>
      <input
        v-model="$v.phone.$model"
        class="py-4 px-6 border border-gray-400 text-gray-700 w-full rounded"
        placeholder="Телефон родителя"
        type="tel"
        :class="status($v.phone)"
      >
    </label>
    <label class="mt-5 block">
      <span class="hidden"> Имя и Отчество родителя</span>
      <input
        v-model="$v.parentName.$model"
        class="py-4 px-6 border border-gray-400 text-gray-700 w-full rounded"
        placeholder="Имя и Отчество родителя"
        type="text"
        :class="status($v.parentName)"
      >
    </label>
    <CustomCheckbox
      class="mt-4 mb-7"
      :status="termsError"
      @switched="toggleAgree"
    />
    <button class="contacts-btn w-full">
      Отправить
    </button>
  </form>
</template>
<script>
import { required, minLength, alpha } from 'vuelidate/lib/validators'
// import Bitrix from '@2bad/bitrix'
import CustomCheckbox from './CustomCheckbox.vue'
// const bitrix = Bitrix('https://PORTAL_NAME.bitrix24.ru/rest', 'ACCESS_TOKEN')

export default {
  components: { CustomCheckbox },
  data () {
    return {
      termsAgreed: false,
      termsError: false,
      childName: null,
      parentName: null,
      phone: null
    }
  },
  validations: {
    childName: {
      required,
      minLength: minLength(2)
    },
    parentName: {
      alpha,
      required,
      minLength: minLength(2)
    },
    phone: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    toggleAgree () {
      this.termsAgreed = !this.termsAgreed
      this.termsError = false
    },
    status (validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    },
    submitForm () {

    }
  }
}
</script>
