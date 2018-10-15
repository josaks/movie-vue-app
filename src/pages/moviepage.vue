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
                <movie-misc :movie="movie" />
            </v-card>

            <v-card id="commentsection">
                <comment-section :movie="movie" />
            </v-card>
        </v-container>
    </div>
</template>


<script>
import MoviePageHeader from '../components/moviepageheader';
import MovieMisc from '../components/moviemisc';
import CommentSection from '../components/commentSection';

export default {
    name: 'MoviePage',
    components: {
        MoviePageHeader,
        MovieMisc,
        CommentSection
    },
    props: ['id'],
    computed: {
        movie: function() {
            return this.$store.getters['movie'](parseInt(this.id));
        },
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