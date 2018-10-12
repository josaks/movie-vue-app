<template>
    <v-container grid-list-sm>
        <movielist />
    </v-container>
</template>

<script>
import Movielist from '../components/movielist';

export default {
    name: 'Homepage',
    components: {
        Movielist
    }
};
</script>

<style>
</style>