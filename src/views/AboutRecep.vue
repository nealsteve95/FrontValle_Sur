<template>
    <div>
        Bienvenido recepcionista
        <router-link to="/logout">Logout</router-link>
        <router-link to="/gerente">vista gerente</router-link>
    </div>
</template>
<script>
    export default {
        name: 'aboutRecep',
        methods: {
            async logout() {
                await this.$store.dispatch('logout');
                return this.$router.push('/');
            }
        }
    }
</script>