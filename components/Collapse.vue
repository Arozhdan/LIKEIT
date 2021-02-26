<template>
  <div class="collapse pl-4 pr-16 py-8 rounded-lg bg-white shadow-sm max-w-xl hover:shadow-lg transition duration-300 cursor-pointer" :class="{'is-collapsed':collapsed}" @click="collapsed=!collapsed">
    <div class="font-medium text-lg text-gray-700">
      Как проходит обучение? Можно ли родителям присутствовать на вводном уроке?
    </div>
    <p v-if="!collapsed" class="text-gray-500 mt-4">
      Тут всякие вещи умные напишем, на вопросы ответим, все расскажем так, чтобы понятно и ясно было даже ребенку. Надо нам для этого очень хорошо продумать концепцию!
    </p>
    <div class="w-4 h-4 collapse-arrow">
      <img src="../assets/images/icons/down.svg" alt="arrow">
    </div>
  </div>
</template>
<script>
import '../assets/precss/components/collapse.pcss'
export default {
  data () {
    return {
      collapsed: true
    }
  }
}
</script>
