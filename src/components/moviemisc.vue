<template>
    <div>
        <div>Actors: {{ movie.actors.toString() }}</div>
        <div>Genres: {{ movie.genres.toString() }}</div>
        <div>Release date: {{ movie.releaseDate }}</div>
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
