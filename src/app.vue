<template>
    <v-app id="app">
        <app-header />
        <router-view></router-view>
    </v-app>
</template>

<script>
import AppHeader from './components/appheader';

export default {
    name: 'app',
    components: {
        AppHeader,
    },
    
    created() {
        this.$store.dispatch('loadMoviesFromAPI');
    }
}
</script>

<style>
</style>
