<template>
  <body>
    <h1>Sign up</h1>
    <div class="row">
      <a class="col s10 m11">
        <input class="form-control" placeholder="Add your Name"
         size="200" style="width:500px;">
        <div class ="underline"></div>
      </a>
      <a class="col s10 m11">
        <input class="form-control" placeholder="Email"
         size="200" style="width:500px;">
      </a>
      <a class="col s10 m11">
        <input class="form-control" placeholder="Password"
         size="200" style="width:500px;">
      </a>
      <a class="col s10 m11">
        <input class="form-control" placeholder="Confirmation"
         size="200" style="width:500px;">
      </a>
    </div>
    <router-link to="/">
      <div class="button_wrapper">
        <button v-model="newUser" class="btn btn-lg btn-primary">Create my account</button>
      </div>
    </router-link>
  </body>
</template>

<script>
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
