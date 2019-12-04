<template>
  <header class="navbar navbar-fixed-top navbar-inverse">
    <div class="container">
      <a class="title nav-link" href="#">
        <router-link to="/">Kanata</router-link>
      </a>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/">Home</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/users">Users</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/help">Help</router-link>
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link">
            <router-link to="/login">Login</router-link>
          </a>
        </li>
      </ul>
    </div>
  </header>
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
</style>
