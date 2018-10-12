<template>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link class="white--text removeUnderline" to="/">Movies</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>account_circle</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
export default {
    name: 'AppHeader',
    components: {
    }
}
</script>

<style scoped>
.removeUnderline {
    text-decoration: none;
}
</style>