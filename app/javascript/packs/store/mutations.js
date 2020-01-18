export default {
    login (state, payload) {
      state.loginUser = {
        id_digest: payload.id_digest,
        remember_digest: payload.remember_digest,
        userId: payload.id
      }

      state.isLoggedIn = true
    },

    logout (state) {
      state.loginUser = {
        id_digest: null,
        remember_digest: null,
        userId: null
      }

      state.isLoggedIn = false
    },

    // ログインしていない場合、明示的に state.isLoggedIn を False に更新
    // routerによる認証確認を有効(非認証時はログイン画面に遷移)にするため。
    notlogin (state) {
      state.isLoggedIn = false
    },
}