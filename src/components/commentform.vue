<template>
    <div>
        <form v-on:submit.prevent="addComment()">
            <input v-model="text" type="text" name="text" vale="" placeholder="Write a comment">
            <button type="submit" name="Submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "CommentForm",
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

<style scoped>
form {
    display: flex;
    flex-direction: row;
}
form input {
    flex: 1;
}
</style>
