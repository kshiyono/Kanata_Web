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
                  <v-dialog v-model="showContent" width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn depressed rounded class="ma-2" outlined color="teal" v-on:click="openModal">
                        プロフィールを編集
                      </v-btn>
                    </template>
                    <v-toolbar dark color="secondary">
                      <v-btn icon dark v-on:click="closeModal">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-toolbar-title>プロフィールを編集</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn depressed rounded class="ma-2" outlined color="white" v-on:click="closeModal">
                        保存
                      </v-btn>
                    </v-toolbar>
                    <v-card>
                      <v-layout wrap justify-center>
                        <v-col cols="8" sm="8" md="8">
                          <v-text-field
                            v-model="name"
                            label="Update your Name"
                            color="teal"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="8" sm="8" md="8">
                          <v-text-field
                            v-model="email"
                            label="Email"
                            color="teal"
                            type="email"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="8" sm="8" md="8">
                          <v-text-field
                            v-model="password"
                            label="Password"
                            color="teal"
                            type="password"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="8" sm="8" md="8">
                          <v-text-field
                            v-model="password_confirmation"
                            label="Confirmation"
                            color="teal"
                            type="password"
                          ></v-text-field>
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

export default {
  data: () => ({
      showContent: false
  }),
  methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    }
  }
}
</script>

<style scoped>
</style>
