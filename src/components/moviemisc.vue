<template>
    <div>
        <div class="actors">Actors: {{ movie.actors.toString() }}</div>
        <div class="genres">Genres: {{ movie.genres.toString() }}</div>
        <div class="releaseDate">Release date: {{ movie.releaseDate }}</div>
    </div>
</template>

<script>
export default {
    name: "MovieMisc",
    props: ["movie"]
}
</script>

<style>

</style>
