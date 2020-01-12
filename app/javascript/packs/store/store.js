import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  // ログインユーザ
  loginUser: {
    id_digest: null,
    remember_digest: null,
    userId: null
  },

  // ログインしている場合true
  isLoggedIn: false
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
