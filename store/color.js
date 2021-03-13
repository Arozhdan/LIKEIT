
export const state = () => ({
  color: ''
})

export const mutations = {
  SET_COLOR (state, color) {
    state.color = color
  }
}
export const getters = {
  getColor (state) {
    return state.color
  }
}
export const actions = {
  colorUpdate ({ commit }, color) {
    commit('SET_COLOR', color)
  }
}
