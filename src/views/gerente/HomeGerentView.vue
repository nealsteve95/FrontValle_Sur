<template>        
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarGerente />
                </SidebarComponent>

                <div class="app-content">
                    <HeaderComponent> 
                        <template #title>
                            Inicio
                        </template>
                        <template #actions>
                            <ActionsComponent />
                        </template>
                        <template #button-insert>
                            <router-link :to="{ name:'gerente-create-habitacion' }">
                                <button class="app-content-headerButton">Registrar habitación</button>
                            </router-link>
                        </template>
                    </HeaderComponent>

                    <!-- aqui contenido -->
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import SidebarComponent from '@/components/SidebarComponent.vue';
    import ListSidebarGerente from '@/components/ListSidebarGerente.vue';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import ActionsComponent from '@/components/ActionsComponent.vue';

    export default{
        name: 'HomeGerenteView',
        components: {
            SidebarComponent,
            ListSidebarGerente,
            HeaderComponent,
            ActionsComponent
        }
    }
</script>

<style>
    @import url('@/css/app.css');
</style>