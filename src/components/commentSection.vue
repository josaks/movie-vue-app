<template>
    <div>
        <form v-on:submit.prevent="addComment()">
            <input v-model="text" type="text" name="text" vale="" placeholder="Write a comment">
            <button type="submit" name="Submit">Submit</button>
        </form>
        <div class="comment" v-for="comment in movie.comments" :key="comment.text">
            <div>
                {{ comment.text }}
            </div>
            <div>
                {{ comment.author }} - {{ comment.date }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "CommentSection",
    props: ["movie"],
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
}
</script>

<style>
.comment {
    margin-bottom: 1%;
}
</style>
