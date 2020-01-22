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
                <router-link to="/users/:user.id/edit">
                  <v-btn depressed rounded class="ma-2" outlined color="teal">
                    Edit Profile
                  </v-btn>
                </router-link>
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
  data: function () {
    return {
      // user: {},
    }
  },
  // mounted () {
  //   axios
  //     .get(`/api/v1/users/${this.$route.params.id}.json`)
  //     .then(response => (this.user = response.data))
  // }
}
</script>

<style scoped>
</style>
