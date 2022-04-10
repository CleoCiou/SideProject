import Vue from 'vue';
import VueRouter from 'vue-router';
import Require from './pages/Require';
import UserTable from './pages/UserTable';
import Profile from './pages/Profile';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Require',
    component: Require,
    meta: {
      title: 'UserTable'
    }
  },
  {
    path: '/UserTable',
    name: 'UserTable',
    component: UserTable,
    meta: {
      title: 'UserTable'
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'UserTable'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
