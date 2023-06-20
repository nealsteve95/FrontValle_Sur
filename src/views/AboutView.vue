<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/gerente">about de gerente</router-link>
    <router-link to="/recepcionista">about de recepcionista</router-link>
    <button @click="logout">logout</button>
  </div>
</template>
<style>
  /* @import url('../css/app.css'); */
</style>
<script >
  export default {
    methods: {
            async logout() {
                await this.$store.dispatch('logout');
                return this.$router.push('/');
            }
        }
  }
</script>