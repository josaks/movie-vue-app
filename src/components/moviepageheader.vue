<template>
    <v-toolbar flat dense>
        <v-toolbar-title>
            <span>{{ movie.title }}</span>
            <span class="subheading">{{ `(${movie.year})` }}</span>
        </v-toolbar-title>
        <v-spacer />
        <div>
            Average rating: {{ movie.averageRating }} / 10 | Rate this
        </div>
    </v-toolbar>
</template>

<script>
export default {
    name: 'Moviepageheader',
    props: ['movie'],
}
</script>

<style scoped>
</style>

<v-card-title class="title">
        <v-flex xs2>
            {{ movie.title }}
            <span class="subheading">{{ `(${movie.year})` }}</span>
        </v-flex>
        <v-flex xs1 offset-xs9>
            <span>Average rating: {{ movie.averageRating }} / 10</span>
            <span>|</span>
            <span>Rate this</span>
        </v-flex>
        
    </v-card-title>