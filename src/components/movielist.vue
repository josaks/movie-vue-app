<template>
    <v-layout row wrap>
        <v-flex v-for="movie in movies" v-bind:key="movie.id" xs12 sm6 md4 lg3>
            <movie :movie="movie"/>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Movie from './movie';

export default {
    name: 'Movielist',
    components: {
        Movie,
    },
    computed: {
        ...mapGetters({
            movies: 'movies',
        }),
    },
};
</script>

<style scoped>
.movielist {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>