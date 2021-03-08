<template>
  <div class="container">
    <div class="program pt-12 px-16 w11/12 max-w-5xl mx-auto rounded-3xl shadow-md overflow-hidden">
      <h3 class="text-center uppercase text-gray-900 font-semibold text-2xl tracking-wide mb-8">
        программа курса
      </h3>
      <ProgramChapter v-for="i in 5" :key="i" :open="i === 1 ? true : false" />
    </div>
  </div>
</template>
<script>
import ProgramChapter from './ProgramChapter.vue'
import '../assets/precss/components/program.pcss'
export default {
  components: { ProgramChapter }

}
</script>
