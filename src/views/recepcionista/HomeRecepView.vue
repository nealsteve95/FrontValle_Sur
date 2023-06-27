<template>        
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarRecepcionista />
                </SidebarComponent>

                <div class="app-content">
                    <HeaderComponent> 
                        <template #title>
                            Inicio
                        </template>
                        <template #actions>
                            <ActionsComponent />
                        </template>
                    </HeaderComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import SidebarComponent from '@/components/SidebarComponent.vue';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import ActionsComponent from '@/components/ActionsComponent.vue';
    import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
    
    export default{
        name: 'HomeRecepView',
        components: {
            SidebarComponent,
            ListSidebarRecepcionista,
            HeaderComponent,
            ActionsComponent
        }
    }
</script>

<style>
    @import url('@/css/app.css');
</style>