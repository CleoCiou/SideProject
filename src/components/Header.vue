<template>
  <header>
    <div class="message">
      Welcome! click 
      <button @click="changeTheme">
        {{ theme }}
      </button>
      to change theme!
    </div>
    <nav>
      <router-link :to="{name: 'Home'}"> UserTable </router-link> |
      <router-link :to="{name: 'Profile'}"> Profile </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    changeTheme(e) {
      const theme = (e.target.innerText === 'dark-theme') ? 'light-theme' : 'dark-theme'
      e.target.innerText = theme;
      this.$emit('change-theme', theme);
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>