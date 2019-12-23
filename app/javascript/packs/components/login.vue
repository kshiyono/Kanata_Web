<template>
  <body>
    <v-app>
      <div v-if="errors.length != 0">
        <ul v-for="e in errors" :key="e">
          <v-layout wrap justify-center>
            <v-col cols="7" sm="7" md="7">
              <v-alert
                border="right"
                colored-border
                type="error"
                elevation="2"
              >
                {{ e }}
              </v-alert>
            </v-col>
          </v-layout>
        </ul>
      </div>

      <br>
      <br>

      <form>
        <v-layout wrap justify-center>
          <v-col cols="5" sm="5" md="5">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3 teal--text">Kanata</div>
            </v-row>
          </v-col>
        </v-layout>
          <v-container fluid>
            <v-layout wrap justify-center>
              <v-flex xs12 sm6 md6 text-center my-5>
                <v-card
                  class="mx-auto"
                  color="#E8F5E9"
                  width="500"
                  outlined
                >
                  <br>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="blue-grey--text headline">Login</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-layout wrap justify-center>

                    <v-col cols="10" sm="10" md="10">
                      <v-text-field
                        v-model="email"
                        label="Add your Email"
                        outlined
                        color="teal"
                        type="email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="10" sm="10" md="10">
                      <v-text-field
                        v-model="password"
                        label="Password"
                        outlined
                        color="teal"
                        type="password"
                      ></v-text-field>
                    </v-col>
                  </v-layout>

                  <v-divider ></v-divider>

                  <br>
                  <router-link to="/signup" class="blue-grey--text">
                    <div>
                      New user? Create your account!
                      <v-icon>mdi-account</v-icon>
                    </div>
                  </router-link>
                  <br>

                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </v-layout wrap justify-center>
      </form>

        <v-divider></v-divider>

        <v-layout wrap justify-center>
          <v-flex xs12 sm12 md12 text-center my-5>
            <v-btn v-on:click="loginUser" x-large depressed rounded class="ma-2" outlined color="teal">
              Login
            </v-btn>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
    </v-app>
  </body>
</template>

<script>
import axios from 'axios';
import { csrfToken } from 'rails-ujs';

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

export default {
  data: () => ({
      email:                 '',
      password:              '',
      errors:                ''
  }),
  methods: {
    loginUser: function () {
      axios
      .post('/api/v1/login', { user: { email: this.email, password: this.password }})
      .then(response => {

          let user = response.data;
          this.$router.push({ name: 'UserDetalePage', params: { id: user.id } });
      })
      .catch(error => {
        console.error(error);
        if (error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
      });
    }
  }
}
</script>

<style scoped>
</style>
