<template>
  <section class="edit">
    <input type="text" v-model=userName />
    <select v-model="city">
      <option v-for="city in citys">{{city}}</option>
    </select>
    <button class="add" @click="addUser">add</button>
    <button class="update" @click="updateUser">update</button>
    <button class="delete" @click="deleteUser">delete</button>
  </section>
</template>

<script>
import { v4 } from 'uuid';

export default {
  props: ['selectedData'],
  data() {
    return {
      id: '',
      userName: '',
      city: '',
      citys: [
        'London',
        'Madrid',
        'Paris',
        'Alabama'
      ]
    }
  },
  methods: {
    updateUser() {
      const info = {
        id: this.id,
        name: this.userName,
        city: this.city
      }
      this.$emit('update-user', info);
    },
    addUser() {
      if (this.userName === '' || this.city === '') return;
      const info = {
        id: v4(),
        name: this.userName,
        city: this.city
      }
      this.$emit('add-user', info);
    },
    deleteUser() {
      if (!this.selectedData) return
      this.$emit('delete-user', this.id);
    }
  },
  watch: {
    selectedData() {
      const {id, name, city} = this.selectedData;
      this.id = id
      this.userName = name;
      this.city = city;
    }
  }
}
</script>

<style lang="scss" scoped>
  .edit {
    text-align: center;
  }
</style>