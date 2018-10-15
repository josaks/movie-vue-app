<template>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon>
        </v-toolbar-side-icon>

        <v-toolbar-title>
            <router-link class="white--text removeUnderline" to="/">Movies</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu :nudge-width="100">
            <v-toolbar-title slot="activator">
                <v-btn icon>
                    <v-icon>account_circle</v-icon>
                </v-btn>
            </v-toolbar-title>
            <v-list>
                <v-list-tile>
                    <v-list-tile-action @click="login">
                        <div id="login">Log in</div>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
import { AuthenticationContext } from 'vue-adal';

export default {
    name: 'AppHeader',
    methods: {
        login(){
            /* Do authentication and log in */
            AuthenticationContext.login();
        },
    }
}
</script>

<style scoped>
.removeUnderline {
    text-decoration: none;
}
#login {
    cursor: pointer;
}
</style>