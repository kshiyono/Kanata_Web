import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Home from '../components/home.vue'
import SignUp from '../components/signup.vue'
import LogIn from '../components/login.vue'
import UsersListPage from '../components/users_list_page.vue'
//import UserDetalePage from './components/user_detail_page.vue'
Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'Home',
      component: Home  },
    { path: '/users',
      name: 'UsersListPage',
      component: UsersListPage  },
    { path: '/signup',
      name: 'SignUp',
      component: SignUp  },
    { path: '/login',
      name: 'LogIn',
      component: LogIn  },
//    { path: '/users/:id(\\d+)',
//      name: 'UserDetalePage',
//      component: UserDetalePage }
  ]
})
