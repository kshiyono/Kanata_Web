import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import store from "../store/store.js";
import Home from '../components/home.vue'
import SignUp from '../components/signup.vue'
import LogIn from '../components/login.vue'
import UsersListPage from '../components/users_list_page.vue'
import UserDetalePage from '../components/user_detail_page.vue'
Vue.use(VueRouter);

const routes = [
    { path: '/',
      name: 'Home',
      component: Home,
      meta: { isPublic: true } },

    { path: '/users',
      name: 'UsersListPage',
      component: UsersListPage,
      meta: { isPublic: false } },

    { path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: { isPublic: true } },

    { path: '/login',
      name: 'LogIn',
      component: LogIn,
      meta: { isPublic: true } },

    { path: '/users/:id(\\d+)',
     name: 'UserDetalePage',
     component: UserDetalePage,
      meta: { isPublic: false } },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  store
});

router.beforeEach((to, from, next) => {

  // 認証が必要なページは、ログインしていない場合、Loginページにリダイレクト
  if (to.matched.some(record => record.meta.isPublic)) {
    console.log(store.state.isLoggedIn)
    next();
  } else {
    if (!store.state.isLoggedIn) {
      console.log(store.state.isLoggedIn)
      next({ name: 'LogIn' });
    }
    next();
  }
});

export default router;
