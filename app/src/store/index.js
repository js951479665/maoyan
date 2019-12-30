import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    list: [],
    city: '成都'
  },
  mutations: {
    vuextab(state, v) {
      if (v === 1) {
        state.list = state.data.filter(item => !item.globalReleased)
      } else {
        state.list = state.data.filter(item => item.globalReleased)
      }

    }

  },
  actions: {
    data(state) {
      axios.get('/data').then(res => {
        state.state.data = res.data.movieList
        state.state.list = state.state.data.filter(item => item.globalReleased)
      })
    }
  },
  modules: {
  }
})
