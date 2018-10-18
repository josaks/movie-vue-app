<template>
    <div>
        <v-form ref="form">
            <v-textarea
                v-model="text"
                lable="Text"
                required
                placeholder="Write a comment"
            />
            <v-btn @click="submit">Submit</v-btn>
        </v-form>
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
        }),
        submit() {
            if(this.$refs.form.validate()) {
                this.addComment({
                    movieId: this.movie.id, 
                    text: this.text 
                });
            }
        }
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
