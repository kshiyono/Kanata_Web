<template>
  <body>
    <div class="center jumbotron">
      <h1>Welcome to the Kanata</h1>

      <h2>
        This is the home page for the Kanata
      </h2>

      <router-link to="/signup">
        <button class="btn btn-lg btn-primary">sigh up now!!</button>
      </router-link>
    </div>
  </body>
</template>

<script>
</script>

<style scoped>
.title {
  float: left;
  margin-right: 10px;
  font-size: 1.7em;
  color: #fff;
  letter-spacing: -1px;
  padding-top: 9px;
  font-weight: bold;
}

body {
  padding-top: 60px;
}

section {
  overflow: auto;
}

textarea {
  resize: vertical;
}

.center {
  text-align: center;
}

.center h1 {
  margin-bottom: 10px;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1;
}

h1 {
  font-size: 3em;
  letter-spacing: -2px;
  margin-bottom: 30px;
  text-align: center;
}

h2 {
  font-size: 1.2em;
  letter-spacing: -1px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: normal;
  color: #777;
}

p {
  font-size: 1.1em;
  line-height: 1.7em;
}

</style>
