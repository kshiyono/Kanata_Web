<template>
  <div>
    <v-app-bar
      color="gray"
      dark
    >

    <v-btn class="ma-2" outlined fab color="teal">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-btn>

      <router-link to="/" class="white--text">
        <v-toolbar-title>&nbsp;&nbsp;&nbsp;Kanata / your task manager</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <router-link to="/login" v-if="!$store.state.isLoggedIn">
        <v-btn x-large depressed rounded class="ma-2" outlined color="teal">
          Login
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/" v-if="$store.state.isLoggedIn">
        <v-btn v-on:click="logout" x-large depressed rounded class="ma-2" outlined color="teal">
          Logout
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>

      <v-btn class="ma-2" outlined fab color="teal">
        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list v-if="!$store.state.isLoggedIn">
            <v-list-item
              v-for="(menuItem, index) in menuItemsIsNotLoggedIn"
              :key="index"
              @click=""
            >
              <v-list-item-title>
                <router-link :to= "{ name: menuItem.name }" class="blue-grey--text">{{ menuItem.title }}</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>

          <v-list v-if="$store.state.isLoggedIn">
            <v-list-item
              v-for="(menuItem, index) in menuItemsIsLoggedIn"
              :key="index"
              @click=""
            >
              <v-list-item-title>
                <router-link :to= "{ name: menuItem.name, params: { id: $store.state.loginUser.userId }}" class="blue-grey--text">{{ menuItem.title }}</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>

        </v-menu>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
import axios from 'axios';
import { csrfToken } from 'rails-ujs';

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()
const crypto = require('crypto')
crypto.getHashes()

export default {
  data: () => ({

    // 未ログイン時のメニュー表示内容一覧
    menuItemsIsNotLoggedIn: [
      {
        title: 'Home',
        name: 'Home'
      },
      {
        title: 'Help',
        name: 'Help'
      },
    ],

    // ログイン時のメニュー表示内容一覧
    menuItemsIsLoggedIn: [
      {
        title: 'Home',
        name: 'Home'
      },
      {
        title: 'Your Page',
        name: 'UserDetalePage',

      },
      {
        title: 'Group',
        name: 'Group'
      },
      {
        title: 'Help',
        name: 'Help'
      },
    ],
  }),

  // リロード時のログイン判定
  // Localstorage -> サーバリクエスト後、SessionStorage/Store登録
  // SessionStorage -> サーバリクエスト後、Store登録
  created () {

    // SessionStorageにログインユーザが存在する場合、リクエスト〜Store登録〜リターン
    if (sessionStorage.getItem('LoginUser_Kanata')) {
      this.loginFromSessionStorage()
      return
    }

    // LocalStorageにログインユーザが存在する場合、リクエスト〜SessionStorage/Store登録〜リターン
    if (localStorage.getItem('LoginUser_Kanata')) {
      this.loginFromLocalStorage()
      return
    }

    // 上記以外の場合、ログインしていないため、明示的に isLoggedIn を False に更新
    // routerによる認証確認を有効(非認証時はログイン画面に遷移)にするため。
    this.notLogin()
  },

  methods: {

    // Logout処理 ->
    // local/sessionStorageをactionからmutation経由で削除。
    // DBトークンも削除するよう、リクエストを発行。
    logout: function () {
      axios
      .delete('/api/v1/logout', { data: { user: {
          id_digest: this.$store.state.loginUser.id_digest,
          remember_digest: this.$store.state.loginUser.remember_digest
        }}
      })
      .then(response => {
        this.deleteWebStorage()
      })
      .catch(error => {
        console.error(error);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    },

    // WebストレージとStoreのログイン情報を削除。
    deleteWebStorage: function () {
        // ログアウト時には、Webストレージの中身を削除
        this.$store.dispatch('deleteLoginFromLocalStorage')
        this.$store.dispatch('deleteLoginFromSessionStorage')

        // ログアウト時には、Storeのログインユーザを空にする
        this.$store.dispatch('deleteLoginFromStore')
    },

    // ローカルストレージを利用したログイン自動認証
    loginFromLocalStorage: function () {

      axios
      .post('/api/v1/auth', { user:
          JSON.parse(localStorage.getItem('LoginUser_Kanata'))
      })
      .then(response => {

          let loginUser = response.data;

          // sessionStorageとStoreにログインユーザ情報を格納
          this.$store.dispatch('saveLoginToSessionStorage', loginUser)
          this.$store.dispatch('saveLoginToStore', loginUser)
      })
      .catch(error => {
        console.error(error);
        if (error.response.status == 401){
          this.errors = error.response.data.errors;
        }
      })
    },

    // セッションストレージを利用したログイン自動認証
    loginFromSessionStorage: function () {

      axios
      .post('/api/v1/auth', { user:
          JSON.parse(sessionStorage.getItem('LoginUser_Kanata'))
      })
      .then(response => {

          let loginUser = response.data;

          // Storeにログインユーザ情報を格納
          this.$store.dispatch('saveLoginToStore', loginUser)
      })
      .catch(error => {
        console.error(error);
        if (error.response.status == 401){
          this.errors = error.response.data.errors;
        }
      })
    },

    // ログインしていない場合、明示的に非認証
    // routerによる認証確認を有効(非認証時はログイン画面に遷移)にするため。
    notLogin: function () {
      this.$store.dispatch('notLogin')
    }
  }
}
</script>

<style>
a {
  color: white;
  text-decoration: none;
  font-family: "游ゴシック","arial unicode ms",sans-serif;
}
</style>