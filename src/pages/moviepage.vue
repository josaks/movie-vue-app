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
                <comment-form :movie="movie" />
            </v-card>

            <v-card id="commentsection">
                <comments :movie="movie" />
            </v-card>
        </v-container>
    </div>
</template>


<script>
import MoviePageHeader from '../components/moviepageheader';
import MovieMisc from '../components/moviemisc';
import CommentForm from '../components/commentform';
import Comments from '../components/comments';


export default {
    name: 'MoviePage',
    components: {
        MoviePageHeader,
        MovieMisc,
        CommentForm,
        Comments
    },
    props: ['id'],
    computed: {
        movie: function() {
            return this.$store.getters['movie'](parseInt(this.id));
        },
    },
};
</script>

<style scoped>
#misc,
#storyline,
#commentsection {
    padding: 12px;
}

</style>