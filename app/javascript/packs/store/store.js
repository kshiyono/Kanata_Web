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
    name: null,
    userId: null
  },

  // ログイン時 -> true / 未ログイン時 -> false
  // routerで非認証時はログイン画面に遷移させるために、デフォルトは Null とする。
  // vueインスタンス生成時に、ログイン時 -> true / 未ログイン時 -> false を明示的に更新。
  isLoggedIn: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
