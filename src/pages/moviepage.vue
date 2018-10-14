<template>
    <div>
        <v-container>
            <v-card><movie-page-header :movie="movie" /></v-card>
            
            <v-card id="storyline">
                <v-layout>
                    <v-flex xs12 sm8>
                        {{ movie.storyline }}
                    </v-flex>
                </v-layout>
            </v-card>

            <v-card id="misc">
                Section with actors, genres, etc here
            </v-card>

            <v-card id="commentsection">
                <form v-on:submit.prevent="addComment()">
                    <input v-model="text" type="text" name="text" vale="" placeholder="Write a comment">
                    <button type="submit" name="Submit">Submit</button>
                </form>
                <ul>
                    <li v-for="comment in movie.comments" :key="comment.text">{{ comment.text }}</li>
                </ul>
            </v-card>
        </v-container>
    </div>
</template>


<script>
import MoviePageHeader from '../components/moviepageheader';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MoviePage',
    components: {
        MoviePageHeader
    },
    props: ['id'],
    computed: {
        ...mapGetters({
            comments: 'comments',
        }),
        movie: function() {
            return this.$store.getters['movie'](parseInt(this.id));
        },
    },
    methods: {
        ...mapActions({
            addComment: 'addComment',
        })
    },
    data() {
        return {
            text: "",
        }
    },
};
</script>

<style>
#misc,
#storyline,
#commentsection {
    padding: 12px;
}
form {
    display: flex;
    flex-direction: row;
}
form input {
    flex: 1;
}
</style>