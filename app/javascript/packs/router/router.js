import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Home from '../components/home.vue'
import UsersListPage from '../components/users_list_page.vue'
//import UserDetalePage from './components/user_detail_page.vue'
Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history',
  routes: [
    { path: '/',
      component: Home  },
    { path: '/users',
      component: UsersListPage  },
//    { path: '/users/:id(\\d+)',
//      name: 'UserDetalePage',
//      component: UserDetalePage }
  ]
})
