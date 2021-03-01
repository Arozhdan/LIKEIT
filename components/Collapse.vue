<template>
  <div class="collapse pl-4 pr-16 py-8 rounded-lg bg-white shadow-sm max-w-xl hover:shadow-lg transition duration-300 cursor-pointer" :class="{'is-collapsed':collapsed}" @click="collapsed=!collapsed">
    <div class="font-medium text-lg text-gray-700">
      {{ content.question }}
    </div>
    <p v-if="!collapsed" class="text-gray-500 mt-4">
      {{ content.answer }}
    </p>
    <div class="w-4 h-4 collapse-arrow">
      <img src="../assets/images/icons/down.svg" alt="arrow">
    </div>
  </div>
</template>
<script>
import '../assets/precss/components/collapse.pcss'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['content'],
  data () {
    return {
      collapsed: true
    }
  }
}
</script>
