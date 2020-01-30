<template>
  <body>
    <v-app>
      <v-card height="800px" width="400px">
        <v-navigation-drawer
          absolute
          permanent
          left
          width="400px"
        >
          <template v-slot:prepend>
            <v-row align="center" justify="center">
              <v-img
                src="https://picsum.photos/id/11/500/300"
                lazy-src="https://picsum.photos/id/11/10/6"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="400"
                max-height="400"
              ></v-img>
            </v-row>
            <v-layout wrap justify-center>
              <v-list-item two-line>
                <v-list-item-avatar>
                  <img src="https://randomuser.me/api/portraits/women/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ $store.getters.getLoginUser.name }}</v-list-item-title>
                  <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>

                <v-row justify="center">
                  <v-dialog v-model="isUpdatePageShowlable" width="600">
                    <template v-slot:activator="{ on }">
                      <v-btn depressed rounded
                        class="ma-2"
                        outlined color="teal"
                        v-on:click="openModal"
                        v-show="isLoginUser">
                        プロフィールを編集
                      </v-btn>
                    </template>
                    <v-toolbar dark color="teal darken-2">
                      <v-btn icon dark v-on:click="closeModal">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-toolbar-title>プロフィールを編集</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn depressed rounded class="ma-2" outlined color="white" v-on:click="updateUserMst">
                        保存
                      </v-btn>
                    </v-toolbar>
                    <v-card color="white">
                      <v-layout wrap justify-center>
                        <v-col cols="8" sm="8" md="8">
                          <v-text-field
                            v-model="user.name"
                            label="お名前"
                            color="teal"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="8" sm="8" md="8">
                          <v-text-field
                            v-model="user.email"
                            label="メールアドレス"
                            color="teal"
                            type="email"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="8" sm="8" md="8">
                          <v-file-input
                            v-model="pictureIcon"
                            :rules="pictureRules"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="アイコン画像を選択"
                            prepend-icon="mdi-camera"
                            color="teal"
                            label="ユーザ画像"
                          ></v-file-input>
                        </v-col>

                        <v-col cols="8" sm="8" md="8">
                          <v-file-input
                            v-model="pictureBackground"
                            :rules="pictureRules"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="背景画像を選択"
                            prepend-icon="mdi-camera"
                            color="teal"
                            label="プロフィール画像"
                          ></v-file-input>
                        </v-col>

                      </v-layout>
                    </v-card>
                  </v-dialog>
                </v-row>

              </v-list-item>
            </v-layout>
          </template>
          <v-divider></v-divider>
        </v-navigation-drawer>
      </v-card>
    </v-app>
  </body>
</template>

<script>
import axios from 'axios';
import { csrfToken } from 'rails-ujs';

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()
const crypto = require('crypto')
crypto.getHashes()

export default {
  data: () => ({
      isUpdatePageShowlable: false,
      isLoginUser: false,
      user: {},
      pictureIcon: [],
      pictureBackground: [],
      pictureRules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
  }),
  methods:{
    openModal: function(){
      this.isUpdatePageShowlable = true
    },
    closeModal: function(){
      this.isUpdatePageShowlable = false
    },
    updateUserMst: function(){
      // console.log(this.pictureIcon)
      // console.log(this.pictureBackground)
      // console.log([this.pictureIcon, this.pictureBackground])
      // axios
      // .put(`/api/v1/users/${this.$route.params.id}.json`,
      //    { user: { id_digest: this.$store.getters.getLoginUser.id_digest,
      //      name: this.user.name, email: this.user.email,
      //      pictures: [this.pictureIcon, this.pictureBackground] }})
      // .then(response => {

      //     let loginUser = response.data;

      //     // ユーザがログイン情報を保持する場合、VuexのActionでログインユーザ情報をlocalStorageに格納
      //     if (this.saveLogin)
      //       this.$store.dispatch('saveLoginToLocalStorage', loginUser)

      //     // sessionStorageとStoreにログインユーザ情報を格納
      //     this.$store.dispatch('saveLoginToSessionStorage', loginUser)
      //     this.$store.dispatch('saveLoginToStore', loginUser)

      //     this.$router.push({ name: 'UserDetalePage', params: { id: loginUser.id } });

      //     this.isUpdatePageShowlable = false
      // })
      // .catch(error => {
      //   console.error(error);
      //   if (error.response) {
      //     console.log(error.response.data);
      //     console.log(error.response.status);
      //     console.log(error.response.statusText);
      //     console.log(error.response.headers);
      //   } else if (error.request) {
      //     console.log(error.request);
      //   } else {
      //     console.log('Error', error.message);
      //   }
      //   console.log(error.config);
      // });
    },
  },

  // マウント時ログインユーザを取得
  mounted () {
    axios
    .get(`/api/v1/users/${this.$route.params.id}.json`)
    .then( response => {
      this.user = response.data
      this.isLoginUser = this.user.id == this.$store.getters.getLoginUser.userId
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
}
</script>

<style scoped>
</style>
