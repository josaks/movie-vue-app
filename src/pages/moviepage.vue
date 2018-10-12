<template>
    <div>
        <div>{{ movie(parseInt(id)).title }}</div>
        <form v-on:submit.prevent="addComment()">
            <input v-model="text" type="text" name="text" vale="" placeholder="Write a comment">
            <button type="submit" name="Submit">Submit</button>
        </form>
        <ul>
            <li v-for="comment in movie(parseInt(id)).comments" :key="comment.text">{{ comment.text }}</li>
        </ul>
    </div>
</template>


<script>
import Movie from '../components/movie';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MoviePage',
    props: ['id'],
    computed: {
        ...mapGetters({
            movie: 'movie',
            comments: 'comments',
        }),
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
</style>