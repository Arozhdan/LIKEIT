import Vue from 'vue'

Vue.filter('nl2br', (value) => {
  return nl2br(value)
})
function nl2br (str, isXhtml) {
  const breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br ' + '/>' : '<br>'
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2')
}
