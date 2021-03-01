<template>
  <div>
    <label class="checkbox-wrapper">
      Принимаю <a href="" class="underline">условия соглашения</a> и
      <a class="underline" href="#"> политики конфиденциальности</a>
      <input type="checkbox" @click="$emit('switched')">
      <span class="checkmark" :class="{'error':status}" />
    </label>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['status']
}
</script>
<style lang="postcss" scoped>
$orange: #fb6138;
.checkbox-wrapper {
  @apply block relative pl-6 cursor-pointer;
  user-select: none;
}

.checkbox-wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 5px;
  left: 0;
  height: 15px;
  width: 15px;
  background: rgba(196, 196, 196, 0.3);
  border-radius: 3px;
}
.error {
  background: #fff;
  border: 2px solid $orange;
}

/* On mouse-over, add a grey background color */
.checkbox-wrapper:hover input ~ .checkmark {
  background-color: $orange;
}

/* When the checkbox is checked, add a blue background */
.checkbox-wrapper input:checked ~ .checkmark {
  background-color: #1cb3d1;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-wrapper input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-wrapper .checkmark:after {
  left: 5px;
  top: 2px;
  width: 5px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
