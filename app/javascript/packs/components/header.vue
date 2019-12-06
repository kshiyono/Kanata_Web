<template>
  <div>
    <nav>
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo left">Kanata</a>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/users">Users</router-link>
          </li>
          <li>
            <router-link to="/help">Help</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
        <ul class="right hide-on-large-only">
          <li>
            <a class="dropdown-button" href="#!" data-activates="dropdown">
              Menu<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
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
