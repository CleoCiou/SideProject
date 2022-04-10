<script>
import router from './Router';

// pages
import Home from './pages/Home';
import Profile from './pages/Profile';

// components
import Header from './components/Header';

export default {
  router,
  components: {
    Home,
    Profile,
    Header
  },
  data() {
    return {
      theme: 'light-theme'
    }
  },
  methods: {
    changeTheme(theme) {
      this.theme = theme;
    }
  }
}
</script>

<template>
  <div :class="theme">
    <Header :theme="theme" @change-theme="changeTheme" />
    <router-view />
  </div>
</template>

<style lang="scss">
  @import './styles/_base.scss';

  body {
    .light-theme {
      @include theme(true);

      header, th {
        @include theme(false);
      }
    }
    .dark-theme {
      @include theme(false);
      
      header, th {
        @include theme(true);
      }
    }
    header {
      padding: 1em;
    }
    .page {
      min-height: 100vh;
      padding: 1em;
    }
  }
</style>
