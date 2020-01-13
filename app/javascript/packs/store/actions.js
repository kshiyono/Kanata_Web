export default {
    saveLoginToLocalStorage ({ commit }, loginUser) {

        // ローカルストレージにログイン情報を保存
        localStorage.setItem('LoginUser_Kanata', JSON.stringify({
            id_digest: loginUser.id_digest,
            remember_digest: loginUser.remember_digest
        }))
    },

    saveLoginToSessionStorage ({ commit }, loginUser) {

        // セッションストレージにログイン情報を保存
        sessionStorage.setItem('LoginUser_Kanata', JSON.stringify({
            id_digest: loginUser.id_digest,
            remember_digest: loginUser.remember_digest
        }))
    },

    saveLoginToStore ({ commit }, loginUser) {

        // VuexのStoreにログイン情報を保存
        commit('login', loginUser)
    },

    deleteLoginFromLocalStorage ({ commit }) {

        // ローカルストレージのログイン情報を削除
        localStorage.removeItem('LoginUser_Kanata')
    },

    deleteLoginFromSessionStorage ({ commit }) {

        // セッションストレージのログイン情報を削除
        sessionStorage.removeItem('LoginUser_Kanata')
    },

    deleteLoginFromStore ({ commit }) {

        // VuexのStoreのログイン情報を削除
        commit('logout')
    },
}