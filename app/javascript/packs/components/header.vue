<template>
  <div>
    <v-app-bar
      color="gray"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <router-link to="/" class="white--text">
        <v-toolbar-title>Kanata / your task manager</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

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
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            @click=""
          >
            <v-list-item-title>
              <router-link :to="menuItem.path" class="blue-grey--text">{{ menuItem.title }}</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      menuItems: [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'User',
          disabled: true,
          path: '/users',
        },
        {
          title: 'Group',
          disabled: true,
          path: '/group',
        },
        {
          title: 'Help',
          disabled: true,
          path: '/help',
        },
      ],
    }),
  }
</script>

<style>
a {
  color: white;
  text-decoration: none;
  font-family: "游ゴシック","arial unicode ms",sans-serif;
}
</style>