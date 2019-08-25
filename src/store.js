import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    window: {
      width: 0,
    },
    isLarge: 0
  },
  mutations: {
    SET_WIDTH(state, width) {
      state.window.width = width
    },
    SET_ISLARGE(state, isLarge) {
      state.isLarge = isLarge
    }
  },
  actions: {
    handResize({state, commit}) {
      commit('SET_WIDTH', window.innerWidth)
      // commit('SET_WIDTH', window.outerWidth)
      if(state.window.width > 900) {
        commit('SET_ISLARGE', true)
      } else {
        commit('SET_ISLARGE', false)
      }
      // console.log(state.window.width)
    }
  }
})
