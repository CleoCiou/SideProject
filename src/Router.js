import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Profile from './pages/Profile';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
