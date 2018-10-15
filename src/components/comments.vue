<template>
    <div>
        <div class="comment" v-for="comment in movie.comments" :key="comment.id">
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
export default {
    name: "Comments",
    props: ["movie"],
}
</script>

<style scoped>
.comment {
    margin-bottom: 1%;
}
</style>
