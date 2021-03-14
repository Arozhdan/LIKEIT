<template>
  <div class="footer pt-11 pb-6">
    <div class="footer__body container">
      <div class="footer__left">
        <div class="logo h-10 w-36">
          <img src="../assets/images/logo.svg" alt="likeit school logo">
        </div>
        <p class="text-sm text-white mt-8">
          Онлайн-школа информационных технологий
        </p>
        <a class="mt-10 block text-white font-semibold" href="tel:+77777777">+7 (961) 204 36 09
          <span class="block text-xs font-light">по России бесплатно</span>
        </a>
        <a class="flex items-center mt-4  mb-11" href="#">
          <div class=" h-5 w-5 mr-2 rounded-full bg-gray-200 flex items-center justify-center">
            <span class="" style="font-size:10px">🔥</span>
          </div>
          <div class=" text-red-400 inline-block border-b border-red-400 border-dashed">Горячая линия</div>
        </a>
        <div>
          <a href="mailto:halala30@gmail.com" class=" text-blue-300 font-semibold text-lg">info@likeitschool.ru</a>
          <div class="flex items-center mt-2">
            <a href="#" class="block mr-3 w-5 h-5 opacity-80 transition duration-300 hover:opacity-100">
              <img src="../assets/images/icons/telegram.svg" alt="">
            </a>
            <a href="#" class="block mr-3 w-5 h-5 opacity-80 transition duration-300 hover:opacity-100">
              <img src="../assets/images/icons/whatsapp.svg" alt="">
            </a>
            <a href="#" class="block mr-3 w-5 h-5 opacity-80 transition duration-300 hover:opacity-100">
              <img src="../assets/images/icons/vk.svg" alt="">
            </a>
            <a href="#" class="block w-5 h-5 opacity-80 transition duration-300 hover:opacity-100">
              <img src="../assets/images/icons/instagram.svg" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="footer__center  flex flex-col justify-between h-full">
        <div class="text-white">
          <span class="block mb-3 text-white font-semibold text-lg">Программы</span>
          <ul class="list-disc flex flex-col max-h-52 flex-wrap">
            <li class="ml-7 font-light">
              Разработка сайтов
            </li>
            <li class="ml-7 font-light">
              Python
            </li>
            <li class="ml-7 font-light">
              Графический дизайн
            </li>
            <li class="ml-7 font-light">
              Java
            </li>
            <li class="ml-7 font-light">
              Игры на Scratch
            </li>
          </ul>
        </div>
        <div class="mt-10 text-white">
          <span class="block mb-3 text-white font-semibold text-lg">Полезные ссылки</span>
          <ul class="list-disc ">
            <li class="ml-7 font-light">
              Как оплатить занятия
            </li>
            <li class="ml-7 font-light">
              Памятка для первого урока
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__right h-full flex flex-col justify-between border-l-2 border-gray-400 border-solid pl-20">
        <a href="#" class="text-white font-semibold text-lg transition duration-300 hover:text-red-400">О нас</a>
        <a href="#" class="text-white font-semibold text-lg transition duration-300 hover:text-red-400">Преподаватели</a>
        <a href="#" class="text-white font-semibold text-lg transition duration-300 hover:text-red-400">Записаться</a>
        <a href="#" class="text-white font-semibold text-lg transition duration-300 hover:text-red-400">Отзывы</a>
        <a href="#" class="text-white font-semibold text-lg transition duration-300 hover:text-red-400">FAQ</a>
      </div>
    </div>
    <div class="footer__copy container flex mt-20 justify-between text-sm">
      <div class="text-white">
        Copyright © LikeIT School 2021 All rights reserved
      </div>
      <div class="text-white opacity-75 flex">
        <span class="block">Разработка и продвижение сайта - NewFormat Media</span>
        <span class="block ml-11">  Политика конфиденциальности</span>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/precss/components/footer.pcss'
export default {

}
</script>
