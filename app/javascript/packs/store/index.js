import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  loginUser: {
    id_digest: localStorage.getItem('saveLoginUser').id_digest,
    remember_digest: localStorage.getItem('saveLoginUser').remember_digest,
    userId: null
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
