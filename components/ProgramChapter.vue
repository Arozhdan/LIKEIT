<template>
  <div class="program__chapter">
    <div class="program__chapter-title cursor-pointer" @click="toggleShow">
      Введение в дизайн. Практика и инструменты
    </div>
    <transition name="lessons">
      <div v-if="showLesson" class="program__lessons-wrapper">
        <div v-for="i in 2" :key="i" class="program__lesson">
          <div class="text-lg text-gray-900">
            Зона ответственности дизайнера.
          </div>
          <div class="text-gray-400 text-lg tracking-wider text-center">
            1 ДЗ
          </div>
          <div class="text-gray-400 text-lg tracking-wider text-center">
            1 практика
          </div>
          <div class="text-purple-400 text-lg tracking-wider text-center">
            1 урок
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showLesson: this.open || false
    }
  },
  methods: {
    toggleShow () {
      this.showLesson = !this.showLesson
    }
  }
}
</script>
