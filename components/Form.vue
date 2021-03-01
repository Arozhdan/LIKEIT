/* eslint-disable no-undef */
<template>
  <div class="reserve py-32">
    <div class="container flex items-center justify-center">
      <form
        class="form form--contacts bg-white rounded-xl py-11 px-10 w-4/12"
      >
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
        <button class="contacts-btn w-full" @click.prevent="submitApplication">
          Оставить заявку
        </button>
      </form>
      <div class="w-4/12 ml-16">
        <div class="text-3xl font-semibold mb-6">
          Остались вопросы?
        </div>
        <div class="more-qestions">
          <div class="text-lg font-semibold mb-7">
            Оставьте заявку
          </div>
          <div class="mb-6">
            Наш менеджер позвонит Вам с 9:00 до 21:00 по МСК или на следующий
            день, если заявка отправлена в ночное время
          </div>
          <div>
            Менеджер ответит на все Ваши вопросы, ппожберет оптимальный план
            обучения и назначит вводное занятие
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, alpha } from 'vuelidate/lib/validators'
import CustomCheckbox from './CustomCheckbox.vue'
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
      alpha,
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
    async submitApplication () {
      if (!this.termsAgreed) {
        this.termsError = true
      } else if (this.$v.parentName.invalid || this.$v.childName.invalid || this.$v.phone.invalid) {
        return ''
      } else {
        await this.$strapi.$leads.create({ student_name: this.childName, parent_name: this.parentName, parent_phone: this.phone })
      }
    },
    status (validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    }
  }
}
</script>
