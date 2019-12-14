<template>    
  <v-app>
    <v-app-bar
      color="gray accent-4"
      dark
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <router-link to="/" class="white--text">
        <v-toolbar-title>かなた</v-toolbar-title>
      </router-link>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

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
          <v-list-item>
            <router-link to="/">
              <v-list-item-title>ホーム</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/group">
              <v-list-item-title>グループ一覧</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/users">
              <v-list-item-title>ユーザ一覧</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/help">
              <v-list-item-title>問合せ</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script>
</script>

<style>
.header{
  margin-bottom:0px;
}
</style>
