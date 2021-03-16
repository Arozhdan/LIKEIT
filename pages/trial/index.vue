<template>
  <div class="trial pt-28 pb-36">
    <div class="container">
      <h1 class="text-gray-900 font-semibold text-4xl capitalize text-center mb-10">
        Оплата вводного урока
      </h1>
      <div class="trial__card w-10/12 mx-auto shadow-md transition duration-300 hover:shadow-lg">
        <h2 class="text-gray-900 font-semibold text-3xl mb-5">
          Вводное занятие индивидуально с преподавателем
        </h2>
        <p class="text-gray-500  text-lg">
          На вводном занятии уроке дети познакомятся с преподавателем и попробуют формат. Для продолжения обучения нужно приобрести пакет занятий, после урока наш менеджер свяжется с Вами, расскажет, как это сделать и даст дальнейшие инструкции .
        </p>
        <div class="howtopay__body__important mt-7 flex items-center">
          <div class=" inline-block py-1 px-5 text-white font-semibold howtopay__body__tag mr-5">
            ВАЖНО
          </div>
          <p class="howtopay__body__important-text">
            При покупке любого пакета занятий, стоимость вводного урока вычитается
            из стоимости пакета, поэтому занятие будет для Вас совершенно бесплатным.
          </p>
        </div>
        <div class="flex justify-between mt-10 items-center">
          <div class="trial__btns flex items-center items-center">
            <nuxt-link to="/trial/payment" class="trial__btn">
              Приобрести
            </nuxt-link>
            <a href="#" class="trial__btn">Подробнее</a>
          </div>
          <div class="text-3xl font-semibold text-green-500 tracking-wide">
            1000 ₽
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/precss/components/trial.pcss'
import '~/assets/precss/components/howtopay.pcss'
export default {
  name: 'Trial'
}
</script>
