export default {
    saveLoginToLocalStorage ({ commit }, loginUser) {

        // ローカルストレージにログイン情報を保存
        localStorage.setItem('saveLoginUser_Kanata', JSON.stringify({
            id_digest: loginUser.id_digest,
            remember_digest: loginUser.remember_digest
        }))
    },

    saveLoginToSessionStorage ({ commit }, loginUser) {

        // セッションストレージにログイン情報を保存
        sessionStorage.setItem('saveLoginUser_Kanata', JSON.stringify({
            id_digest: loginUser.id_digest,
            remember_digest: loginUser.remember_digest
        }))

        // VuexのStoreにログイン情報を保存
        commit('loginUser', loginUser)
    }
}