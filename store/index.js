import https from 'https'
import axios from 'axios'

export const state = () => ({
  settings: {}
})

export const mutations = {
  FETCH_SETTINGS (state, settings) {
    state.settings = settings
  }
}
export const getters = {
  getSettings (state) {
    return state.settings
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    await instance.get('https://school.likeit.website/site-settings')
      .then((response) => {
        commit('FETCH_SETTINGS', response.data)
      })
  }
}
