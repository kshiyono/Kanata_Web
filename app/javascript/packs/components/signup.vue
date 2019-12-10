<template>
  <body>
    <div v-if="errors.length != 0">
      <ul v-for="e in errors" :key="e">
        <li><font color="red">{{ e }}</font></li>
      </ul>
    </div>
    <h1>Sign up</h1>
    <div class="row">
      <a class="col s10 m11">
        <input v-model="name" class="form-control" placeholder="Add your Name"
         size="200" style="width:500px;">
      </a>
      <a class="col s10 m11">
        <input v-model="email" class="form-control" placeholder="Email"
        type="email" size="200" style="width:500px;">
      </a>
      <a class="col s10 m11">
        <input v-model="password" class="form-control" placeholder="Password"
        type="password" size="200" style="width:500px;">
      </a>
      <a class="col s10 m11">
        <input v-model="password_confirmation" class="form-control" placeholder="Confirmation"
        type="password" size="200" style="width:500px;">
      </a>
    </div>
    <div class="button_wrapper">
      <button v-on:click="createUser" class="btn btn-lg btn-primary">Create my account</button>
    </div>
  </body>
</template>

<script>
import axios from 'axios';
import { csrfToken } from 'rails-ujs';

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

export default {
  data: () => ({
      name:                  '',
      email:                 '',
      password:              '',
      password_confirmation: '',
      errors:                ''
  }),
  methods: {
    createUser: function () {
      axios
      .post('/api/v1/users', { user: { name: this.name, email: this.email,
        password: this.password, password_confirmation:this.password_confirmation}})
      .then(response => {
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

h1, h2, h3, h4, h5, h6 {
  line-height: 1;
}

h1 {
  font-size: 3em;
  letter-spacing: -2px;
  margin-bottom: 30px;
  text-align: center;
}

a {
  text-align: center;
}

.button_wrapper {
  text-align: center;
}
</style>
