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

          <v-list>
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
              @click=""
            >
              <v-list-item-title>
                <router-link :to="menuItem.path" class="blue-grey--text">{{ menuItem.title }}</router-link>
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
    menuItems: [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'User',
        disabled: true,
        path: '/users',
      },
      {
        title: 'Group',
        disabled: true,
        path: '/group',
      },
      {
        title: 'Help',
        disabled: true,
        path: '/help',
      },
    ],

  }),

  computed: {
    getLoginUser: function(){
      return this.$store.state.loginUser
    }
  },

  methods: {
    // Logout処理は、local/sessionStorageをactionからmutation経由で削除。
    // DBトークンも削除するよう、リクエストを発行。
    logout: function () {
      axios
      .delete('/api/v1/logout', { data: { user: {
        id_digest: this.$store.state.loginUser.id_digest,
        remember_digest: this.$store.state.loginUser.remember_digest
        }}
      })
      .then(response => {

        // ログアウト時には、Webストレージの中身を削除
        this.$store.dispatch('deleteLoginFromLocalStorage')
        this.$store.dispatch('deleteLoginFromSessionStorage')

        // ログアウト時には、Storeのログインユーザを空にする
        this.$store.dispatch('deleteLoginFromStore')
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
    }
    // TODO:リロード時(どこで定義？)、localStorageと認証し、sessionStorageを作成。
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