<template>        
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarGerente />
                </SidebarComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import SidebarComponent from '@/components/SidebarComponent.vue';
    import ListSidebarGerente from '@/components/ListSidebarGerente.vue';
    export default{
        name: 'HomeGerenteView',
        components: {
            SidebarComponent,
            ListSidebarGerente
        }
    }
</script>

<style scoped>
    @import url('@/css/app.css');
</style>