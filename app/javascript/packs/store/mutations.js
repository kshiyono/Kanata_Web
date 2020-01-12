export default {
    loginUser (state, payload) {
      state.loginUser = {
        id_digest: payload.id_digest,
        remember_digest: payload.remember_digest,
        userId: payload.id
      }

      state.isLoggedIn = true
    }
}