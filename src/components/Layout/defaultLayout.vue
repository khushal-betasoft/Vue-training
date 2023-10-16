<template>
    <v-app>
        <AppNavigator/>
        <router-view></router-view>        
        <AppFooter/>
    </v-app>
</template>
<script>
    import AppNavigator from '../AppNavigator.vue'
    import AppFooter from '../AppFooter.vue'
    export default{
        components:{
            AppNavigator,
            AppFooter
        }
    }
</script>