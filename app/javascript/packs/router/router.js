import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import store from "../store/store.js"
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

    { path: '/help',
      name: 'Help',
      // 暫定 component: Help,
      meta: { isPublic: true } },

    { path: '/users',
      name: 'UsersListPage',
      component: UsersListPage,
      meta: { isPublic: false } },

      { path: '/group',
      name: 'Group',
      // 暫定 component: Help,
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

// isLoggedIn の更新を検知し、ルーティングさせるために必要
const nextAuth = (to, from, next) => {

  // ログイ時、ページ表示
  if (store.getters.getIsLoggedIn)
    next()

  // 未ログイン時、ログインページに強制遷移
  else
    next({ name: 'LogIn' });
}

// 認証が必要なページは、未ログイン時Loginページにリダイレクト
router.beforeEach((to, from, next) => {

  // 公開ページはログイン不要
  if (to.matched.some(record => record.meta.isPublic)) {
    next();
  } else {

    // 未ログイン時、ログインページに強制遷移
    if (!store.getters.getIsLoggedIn) {

      // まだ認証していなければ isLoggedIn が更新されるのを監視
      const unwatch = store.watch(
        (state, getters) => getters.getIsLoggedIn,
        () => {
        unwatch(),
        nextAuth(to, from, next)
      })

    // ログイン時、ページ表示
    } else {
      next()
    }
  }
});

export default router;
