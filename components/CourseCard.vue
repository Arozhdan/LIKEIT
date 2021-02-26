<template>
  <div class="services-item-persp gradient-blue">
    <div class="services-item services-item__1">
      <div class="services-item-top">
        <div class="services-top-left">
          <img src="../assets/images/icons/vector.svg" alt="">
          <span class="services-top-category">design </span>
        </div>
        <span class="services-top-right">от 12 лет</span>
      </div>
      <h4 class="services-item-title">
        figma
      </h4>
      <p class="services-item-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <nuxt-link
        tag="button"
        to="/programs/"
        class="btn btn__services btn__services__1 rounded-3xl"
      >
        Подробнее
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import '../assets/precss/components/course-card.pcss'
export default {
  mounted () {
    const cards = document.querySelectorAll('.services-item-persp')
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i]
      card.addEventListener('mousemove', rotate)
      card.addEventListener('mouseout', clearRotate)
    }
    function rotate () {
      const cardItem = this.querySelector('.services-item')
      const halfHeight = cardItem.offsetHeight / 2
      const halfWidth = cardItem.offsetWidth / 2

      cardItem.style.transform =
        'rotateX(' +
        -(event.offsetY - halfHeight) / 30 +
        'deg) rotateY(' +
        (event.offsetX - halfWidth) / 30 +
        'deg)'
    }
    function clearRotate () {
      const cardItem = this.querySelector('.services-item')
      cardItem.style.transform = 'rotate(0)'
    }
  }

}
</script>
