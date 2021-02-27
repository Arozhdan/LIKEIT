<template>
  <div class="page homepage ">
    <div class="homepage-header__wrapper">
      <div class="homepage-header mt-32 container flex">
        <div class="homepage-header__left w-8/12">
          <p class="homepage-header__subtitle">
            онлайн-школа информационных технологий
          </p>
          <h1 class="homepage-header__title">
            Пусть ваш ребенок проведет время с пользой
          </h1>
          <p class="homepage-header__suptitle">
            Постройте своё, удобное для вас, расписание. <br>
            Больше не нужно подстраиваться под уроки!
          </p>
          <button
            href="#"
            class="button button__primary button__primary--bigger text-xl mt-9"
          >
            Начать учиться
          </button>
          <p class="homepage-header__links flex">
            LikeIT school в соц. сетях
            <img src="../assets/images/icons/vk.svg" alt="vk">
            <img src="../assets/images/icons/instagram.svg" alt="instagram">
          </p>
        </div>
      </div>
      <div class="advantages-wrapper">
        <div class="advantage-item">
          <div class="advantage-item-icon">
            <img src="../assets/images/icons/molecule1.svg" alt="molecule">
          </div>
          <h3 class="advantage-item-title">
            Индивидуальная программа
          </h3>
          <p class="advantage-text">
            Все уроки в NETschool прохоят индивидуально. Наша школа поможет вам
            составить индивидуальный план обучения с преподавателем.
          </p>
        </div>
        <div class="advantage-item">
          <div class="advantage-item-icon">
            <img src="../assets/images/icons/schedule.svg" alt="molecule">
          </div>
          <h3 class="advantage-item-title">
            Индивидуальная программа
          </h3>
          <p class="advantage-text">
            Все уроки в NETschool прохоят индивидуально. Наша школа поможет вам
            составить индивидуальный план обучения с преподавателем.
          </p>
        </div>
        <div class="advantage-item">
          <div class="advantage-item-icon">
            <img src="../assets/images/icons/wall-clock.svg" alt="molecule">
            <!-- <img src="../assets/img/clock.svg" alt="molecule"> -->
          </div>
          <h3 class="advantage-item-title">
            Индивидуальная программа
          </h3>
          <p class="advantage-text">
            Все уроки в NETschool прохоят индивидуально. Наша школа поможет вам
            составить индивидуальный план обучения с преподавателем.
          </p>
        </div>
        <div class="advantage-item">
          <div class="advantage-item-icon">
            <img src="../assets/images/icons/math.svg" alt="molecule">
          </div>
          <h3 class="advantage-item-title">
            Индивидуальная программа
          </h3>
          <p class="advantage-text">
            Все уроки в NETschool прохоят индивидуально. Наша школа поможет вам
            составить индивидуальный план обучения с преподавателем.
          </p>
        </div>
      </div>
    </div>
    <div class="benefits py-20 px-5 container">
      <h2 class="section-title">
        Что мы Вам даем?
      </h2>
      <p class="section-subtitle">
        В нашем образовательном центре мы предоставляем множество преимуществ
        для успешного обучения ваших детей, помогая при этом развивать их
        аналитический склад ума, тврочество и поддерживая интерес.
      </p>
      <div class="benefits__wrapper mt-32 flex justify-between flex-wrap">
        <div
          v-for="i in 6"
          :key="i"
          class="benefits__item w-4/12 flex justify-between"
        >
          <div class="benefits__item__left w-7/12">
            <h3 class="text-gray-900 font-semibold text-2xl">
              Персональный ментор
            </h3>
            <p class="mt-2 text-gray-700 text-lg pr-6">
              Нужен только компьютер и доступ к Интернету
            </p>
          </div>
          <div class="benefits__item__icon w-5/12 mt-4">
            <img
              src="../assets/images/icons/management.svg"
              alt="management icon"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="wellcome py-14">
      <div class="container wellcome-inner py-7 px-24 rounded-xl">
        <h3 class="mt-4 text-3xl font-semibold text-gray-900">
          Добро Пожаловать в LikeIT school!
        </h3>
        <p class="mt-6 text-gray-700 text-xl">
          В нашем образовательном центре мы предоставляем множество преимуществ
          для успешного обучения ваших детей, помогая при этом развивать их
          аналитический склад ума, тврочество и поддерживая интерес.
        </p>
        <div class="flex justify-center my-3">
          <button class="button button--secondary">
            Начать учиться
          </button>
        </div>
      </div>
    </div>
    <div class="about py-16">
      <h2 class="section-title">
        О нас
      </h2>
      <p class="section-subtitle">
        В LikeIT school наша миссия состоит в том, чтобы обеспечить превосходное
        качество в дошкольных учреждениях, детских садах, до и после школьных
        программ, а также в летних лагерях для семей, живущих в большей
        местности.
      </p>
      <p class="section-subtitle py-16">
        Здесь вы найдете исключительных учителей, учебную программу и учебную
        среду, которая побуждает детей учиться, играть и исследовать в
        безопасной, здоровой и благоприятной среде, способствующей творческому
        мышлению.
      </p>
    </div>
    <div class="courses py-28">
      <div class="container">
        <h2 class="font-semibold text-gray-900 text-4xl ml-16">
          Программы и курсы LikeIT school
        </h2>
        <div class="courses-wrapper flex justify-between flex-wrap mt-16">
          <CourseCard v-for="i in 6" :key="i" />
        </div>
      </div>
    </div>
    <div class="plank py-7">
      <div class="container flex items-center">
        <div class="text-white w-72 -mx-6">
          <img src="../assets/images/plank-doggy.png" alt="doggy">
        </div>
        <div>
          <h4 class="text-white text-3xl font-semibold">
            Затрудняетесь в выборе учебной программы?
          </h4>
          <p class="text-white mt-3 text-lg pr-24">
            Позвольте нашим профессионалам помочь Вам в выборе профиля для
            вашего ребенка!
          </p>
        </div>
        <div>
          <button class="button button--green">
            Бесплатная консультация
          </button>
        </div>
      </div>
    </div>
    <div class="teachers py-24">
      <h2 class="section-title">
        Преподаватели
      </h2>
      <p class="section-subtitle">
        Те самые люди, которые позволяют нам быть теми, кем мы являемся!
      </p>
      <div class="mt-16 container flex flex-wrap justify-between">
        <div
          class="teacher-card py-9 px-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition duration-300"
        >
          <div class="flex justify-end">
            <div class="w-16 h-16">
              <img src="../assets/images/icons/fingerprint.svg" alt="">
            </div>
          </div>
          <h4 class="text-gray-900 text-2xl font-semibold capitalize">
            сложное <br>
            простыми словами
          </h4>
          <p class="text-gray-700 mt-4">
            Тут нужно что-нибудь классное написать побольше о том. что за
            ступени отбора такие.
          </p>
        </div>
        <div
          class="teacher-card py-9 px-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition duration-300"
        >
          <div class="flex justify-end">
            <div class="w-16 h-16">
              <img src="../assets/images/icons/fingerprint.svg" alt="">
            </div>
          </div>
          <h4 class="text-gray-900 text-2xl font-semibold capitalize">
            сложное <br>
            простыми словами
          </h4>
          <p class="text-gray-700 mt-4">
            Тут нужно что-нибудь классное написать побольше о том. что за
            ступени отбора такие.
          </p>
        </div>
        <div
          class="teacher-card py-9 px-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition duration-300"
        >
          <div class="flex justify-end">
            <div class="w-16 h-16">
              <img src="../assets/images/icons/fingerprint.svg" alt="">
            </div>
          </div>
          <h4 class="text-gray-900 text-2xl font-semibold capitalize">
            сложное <br>
            простыми словами
          </h4>
          <p class="text-gray-700 mt-4">
            Тут нужно что-нибудь классное написать побольше о том. что за
            ступени отбора такие.
          </p>
        </div>
      </div>
      <div class="teachers-stat py-12 mt-24">
        <div class="container flex justify-around">
          <div class="w-1/4">
            <div class="text-white text-center font-semibold text-5xl">
              100+
            </div>
            <p class="text-center mt-2 text-white text-lg">
              учеников прошли <br>
              наши курсы
            </p>
          </div>
          <div class="w-1/4">
            <div class="text-white text-center font-semibold text-5xl">
              100+
            </div>
            <p class="text-center mt-2 text-white text-lg">
              учеников прошли <br>
              наши курсы
            </p>
          </div>
          <div class="w-1/4">
            <div class="text-white text-center font-semibold text-5xl">
              100+
            </div>
            <p class="text-center mt-2 text-white text-lg">
              учеников прошли <br>
              наши курсы
            </p>
          </div>
        </div>
      </div>
      <div class="slider pt-24 pb-12">
        <div class="container">
          <div class="py-11 bg-white shadow rounded-t-2xl">
            <h3
              class="slider__title text-center font-semibold text-2xl text-gray-900 capitalize"
            >
              Почему выбирают LikeIT school?
            </h3>
          </div>
          <Splide :options="sliderOptions">
            <SplideSlide>
              <div class="slider-body flex">
                <div class="w-1/2 slider-left px-16 pt-7 pb-20">
                  <div
                    class="flex justify-center uppercase text-xl text-gray-900 font-semibold"
                  >
                    САМостоятельно
                  </div>
                  <h4
                    class="text-center uppercase text-3xl text-gray-900 font-semibold mt-16 pt-9"
                  >
                    5 ступеней отбора Кадров
                  </h4>
                  <p
                    class="text-center  text-lg text-gray-900 font-semibold mt-5 px-10"
                  >
                    Тут нужно что-нибудь классное написать побольше о том. что
                    за ступени отбора такие.
                  </p>
                </div>
                <div class="w-1/2 slider-right px-16 pt-7 pb-20">
                  <div
                    class="flex justify-center uppercase text-xl text-white font-semibold"
                  >
                    <div class="logo h-10 w-36">
                      <img
                        src="../assets/images/logo.svg"
                        alt="likeit school logo"
                      >
                    </div>
                  </div>
                  <h4
                    class="text-center uppercase text-3xl text-white font-semibold mt-16 pt-9"
                  >
                    5 ступеней отбора Кадров
                  </h4>
                  <p
                    class="text-center  text-lg text-white font-semibold mt-5 px-10"
                  >
                    Тут нужно что-нибудь классное написать побольше о том. что
                    за ступени отбора такие.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="slider-body flex">
                <div class="w-1/2 slider-left px-16 pt-7 pb-20">
                  <div
                    class="flex justify-center uppercase text-xl text-gray-900 font-semibold"
                  >
                    САМостоятельно
                  </div>
                  <h4
                    class="text-center uppercase text-3xl text-gray-900 font-semibold mt-16 pt-9"
                  >
                    5 ступеней отбора Кадров
                  </h4>
                  <p
                    class="text-center  text-lg text-gray-900 font-semibold mt-5 px-10"
                  >
                    Тут нужно что-нибудь классное написать побольше о том. что
                    за ступени отбора такие.
                  </p>
                </div>
                <div class="w-1/2 slider-right px-16 pt-7 pb-20">
                  <div
                    class="flex justify-center uppercase text-xl text-white font-semibold"
                  >
                    <div class="logo h-10 w-36">
                      <img
                        src="../assets/images/logo.svg"
                        alt="likeit school logo"
                      >
                    </div>
                  </div>
                  <h4
                    class="text-center uppercase text-3xl text-white font-semibold mt-16 pt-9"
                  >
                    5 ступеней отбора Кадров
                  </h4>
                  <p
                    class="text-center  text-lg text-white font-semibold mt-5 px-10"
                  >
                    Тут нужно что-нибудь классное написать побольше о том. что
                    за ступени отбора такие.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="slider-body flex">
                <div class="w-1/2 slider-left px-16 pt-7 pb-20">
                  <div
                    class="flex justify-center uppercase text-xl text-gray-900 font-semibold"
                  >
                    САМостоятельно
                  </div>
                  <h4
                    class="text-center uppercase text-3xl text-gray-900 font-semibold mt-16 pt-9"
                  >
                    5 ступеней отбора Кадров
                  </h4>
                  <p
                    class="text-center  text-lg text-gray-900 font-semibold mt-5 px-10"
                  >
                    Тут нужно что-нибудь классное написать побольше о том. что
                    за ступени отбора такие.
                  </p>
                </div>
                <div class="w-1/2 slider-right px-16 pt-7 pb-20">
                  <div
                    class="flex justify-center uppercase text-xl text-white font-semibold"
                  >
                    <div class="logo h-10 w-36">
                      <img
                        src="../assets/images/logo.svg"
                        alt="likeit school logo"
                      >
                    </div>
                  </div>
                  <h4
                    class="text-center uppercase text-3xl text-white font-semibold mt-16 pt-9"
                  >
                    5 ступеней отбора Кадров
                  </h4>
                  <p
                    class="text-center  text-lg text-white font-semibold mt-5 px-10"
                  >
                    Тут нужно что-нибудь классное написать побольше о том. что
                    за ступени отбора такие.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <template #controls>
              <div class="splide__progress">
                <div class="splide__progress__bar" />
              </div>
              <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                  <img src="../assets//images/icons/left.svg" alt="#">
                </button>
                <button class="splide__arrow splide__arrow--next">
                  <img src="../assets//images/icons/right.svg" alt="#">
                </button>
              </div>
            </template>
          </Splide>
          <div class="flex justify-center mt-14">
            <div class="button button__primary button__primary--bigger">
              Начать учиться
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricing">
      <div class="container">
        <h2 class="font-semibold text-gray-900 text-4xl ml-16">
          Выберите подходящий План Занятий
        </h2>
        <div class="pricing-cards mt-20 pb-28 flex justify-between">
          <PriceCard v-for="i in 3" :key="i" />
        </div>
      </div>
    </div>
    <div class="testimonials py-14">
      <div class="container">
        <h2 class="section-title">
          Отзывы
        </h2>
        <p class="section-subtitle">
          Те самые люди, которые позволяют нам быть теми, кем мы являемся!
        </p>
        <Splide
          :options="testimonialOptions"
          class="testimonials-slider mt-24 mb-12"
        >
          <SplideSlide
            v-for="i in 4"
            :key="i"
            class="testimonials-card py-8 px-9 bg-white shadow-sm rounded-3xl"
          >
            <div class="flex justify-between items-center mb-10">
              <div class="flex items-center">
                <div v-for="i in 4" :key="i" class="w-5 h-5 mr-2">
                  <img src="../assets/images/icons/star.svg" alt="star">
                </div>
                <div class="w-5 h-5">
                  <img src="../assets/images/icons/star-half.svg" alt="">
                </div>
                <img src="" alt="">
              </div>
              <div class="text-red-400">
                2 дня назад
              </div>
            </div>
            <p class="text-gray-600 text-lg font-light mb-6">
              " Дочка с огромным удовольствием занимается с Эдуардом. Я думала,
              что её разочарует отсутствие компании сверстников, но ничего
              подобного нет и в помине. После каждого урока с радостью
              показывает мне, то что сделали за урок. Спасибо! "
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-12 h-12 mr-3">
                  <img src="../assets/images/icons/anonim.svg" alt="">
                </div>
                <div class="font-semibold text-gray-900">
                  Марина Кравец
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <div class="callout py-28">
      <div class="container flex items-center justify-center">
        <div class="w-1/2 px-16">
          <div class="text-white">
            <h3 class="text-5xl font-semibold capitalize leading-snug mb-6">
              Хотите Начать <br> Обучаться с Нами?
            </h3>
            <div class="callout-list">
              <div v-for="i in 3" :key="i" class="callout-list__item text-lg pl-8 relative">
                Подберем учителя индивидуально с учетом уровня и темперамента ученика
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 px-16">
          <div class="px-10 py-12 bg-white rounded-lg">
            <div class="w-32 h-32 mx-auto mb-6">
              <img src="../assets/images/icons/callout-phone.svg" alt="phone">
            </div>
            <div class="px-5 mb-8">
              <div class="text-center text-3xl text-gray-900 font-semibold mb-3">
                Начните свой путь в LikeIT уже сегодня!
              </div>
              <p class="text-lg text-center font-medium">
                Запишитесь на пробное занятие и дай своему ребенку возможность обучиться профессиям будущего.
              </p>
            </div>
            <button class="callout-button">
              Получить консультацию
            </button>
            <button class="callout-button--transparent">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="faq py-24">
      <div class="container">
        <h2 class="section-title">
          Часто задаваемые вопросы
        </h2>
        <p class="section-subtitle">
          Если есть вопрос, значит есть вопрос. Мы ответили на самые распространенные вопросы, чтобы Вы могли получить четкие ответы без промедлений.
        </p>
        <div class="faq-wrapper mt-20 flex justify-around items-start flex-wrap">
          <Collapse v-for="i in 6" :key="i" />
        </div>
      </div>
    </div>
    <div class="plank py-10 plank--promo">
      <div class="container flex items-center">
        <div class="text-white w-72 -mx-6">
          <img src="../assets/images/promo-doggy.png" alt="doggy">
        </div>
        <div>
          <h4 class="text-white text-3xl font-semibold">
            Промокод на скидку 15% на все курсы
          </h4>
          <p class="text-white mt-3 text-lg pr-24">
            Не упустите возможность получить максимальную выгоду. Назовите промокод нашему менеджеру и наслаждайтесь лучшими ценами!
          </p>
        </div>
        <div>
          <button class="button button--green button__primary--bigger text-white uppercase shadow">
            MARIALIKEIT
          </button>
        </div>
      </div>
    </div>
    <div class="reserve py-32">
      <div class="container flex items-center justify-center">
        <form class="form form--contacts bg-white rounded-xl py-11 px-10 w-4/12">
          <label>
            <span class="hidden"> Имя и возраст ребенка</span>
            <input class="py-4 px-6 border border-gray-400 text-gray-700 w-full rounded" placeholder="Возраст и Имя ребенка" type="text">
          </label>
          <label class="mt-5 block">
            <span class="hidden"> Телефон родителя</span>
            <input class="py-4 px-6 border border-gray-400 text-gray-700 w-full rounded" placeholder="Телефон родителя" type="text">
          </label>
          <label class="mt-5 block">
            <span class="hidden"> Имя и Отчество родителя</span>
            <input class="py-4 px-6 border border-gray-400 text-gray-700 w-full rounded" placeholder="Имя и Отчество родителя" type="text">
          </label>
          <CustomCheckbox class="mt-4 mb-7" />
          <button class="contacts-btn w-full">
            Оставить заявку
          </button>
        </form>
        <div class="w-4/12 ml-16">
          <div class="text-3xl font-semibold mb-6">
            Остались вопросы?
          </div>
          <div class="more-qestions">
            <div class="text-lg font-semibold mb-7 ">
              Оставьте заявку
            </div>
            <div class="mb-6">
              Наш менеджер позвонит Вам с 9:00 до 21:00 по МСК или на следующий день, если заявка отправлена в ночное время
            </div>
            <div>
              Менеджер ответит на все Ваши вопросы, ппожберет оптимальный план обучения и назначит вводное занятие
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import CustomCheckbox from '../components/CustomCheckbox.vue'
import Collapse from '../components/Collapse.vue'
import PriceCard from '../components/PriceCard.vue'
import CourseCard from '../components/CourseCard.vue'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '../assets/precss/components/homepage.pcss'
import '../assets/precss/components/benefitsSplide.pcss'
import '../assets/precss/components/price.pcss'
export default {
  components: { CourseCard, PriceCard, Collapse, CustomCheckbox, Footer },
  data () {
    return {
      sliderOptions: {
        gap: '2rem',
        type: 'loop'
      },
      testimonialOptions: {
        gap: '60px',
        perPage: 2,
        perMove: 1,
        pagination: false,
        type: 'loop',
        classes: {
          arrows: 'splide__arrows testimonial-arrows'
        }
      }
    }
  }
}
</script>
