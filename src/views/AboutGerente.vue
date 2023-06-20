<template>
    <div>
        Bienvenido gerente
        <router-link to="/logout">Logout</router-link>
        <router-link to="/recepcionista">vista recepcionista</router-link>
        <button v-on:click="logout">Logout</button>
    </div>
</template>
<script>
    export default {
        name: 'aboutGerente',
        methods: {
            async logout() {
                await this.$store.dispatch('logout');
                return this.$router.push('/');
            }
        }
    }
</script>