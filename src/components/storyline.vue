<template>
    <v-layout>
        <v-flex xs12 sm8>
            {{ movie.storyline }}
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: "Storyline",
    props: ["movie"],
}
</script>

<style>

</style>
