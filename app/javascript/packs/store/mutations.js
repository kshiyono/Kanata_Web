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
}