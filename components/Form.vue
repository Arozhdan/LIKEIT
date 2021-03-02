/* eslint-disable no-undef */
<template>
  <div class="reserve py-32">
    <div class="container flex items-center justify-center">
      <div class="w-4/12">
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component is="script" data-b24-form="inline/9/yhuw9v" data-skip-moving="true">
          (function (w, d, u) {
          const s = d.createElement('script')
          s.async = true
          s.src = u + '?' + ((Date.now() / 180000) | 0)
          const h = d.getElementsByTagName('script')[0]
          h.parentNode.insertBefore(s, h)
          })(
          window,
          document,
          'https://cdn-ru.bitrix24.ru/b16923550/crm/form/loader_9.js'
          )
        </component>
      </div>
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
export default {
}
</script>
<style lang="postcss">
.b24-form-wrapper {
  border-radius: 10px;
}
.b24-form-sign {
  display: none;
}
.b24-form-wrapper.b24-form-border-bottom,
.b24-form-header {
  border-bottom: unset !important;
}
.b24-form-header-title,
.b24-form-field-agreement-link,
.b24-form-header-description,
.b24-form-control,
.b24-form-control-label,
.b24-form-control-alert-message,
.b24-form-success-text p {
  font-family: "Poppins", sans-serif !important;
}
.b24-form-control {
  background-color: #fff !important;
  resize: none !important;
}
.b24-form-control-select-label,
.b24-form-control:focus + .b24-form-control-label,
.b24-form-control-not-empty + .b24-form-control-label {
  font-size: 8px !important;
}
.b24-form-control-alert-message {
  border-radius: 0 7px 6px 7px;
  padding: 4px 6px 4px 22px;
  font-size: 12px;
  font-family: "Poppins", sans-serif !important;
  color: #fff;
}
.b24-form-btn {
  border-radius: 25px !important;
  background: linear-gradient(225deg, #69d2e7 0%, #1cb3d1 100%);
}
.b24-form-header {
  padding: 40px 31px 5px !important;
}
.b24-form-content {
  padding: 14px 31px 40px !important;
}
</style>
