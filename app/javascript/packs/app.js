import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from "vuetify"
import Router from './router/router'
import Store  from './store/store.js'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

Vue.use(Vuetify);
const vuetify = new Vuetify();

document.addEventListener("DOMContentLoaded", () => {
  var app = new Vue({
      router: Router,
      store: Store,
      el: '#app',
      vuetify,
      components: {
      'navbar': Header,
      'navfoo': Footer,
    }
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);
});
