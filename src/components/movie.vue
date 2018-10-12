<template>
    <v-card class="movie">
        <v-card-title primary-title class="top">
            <div class="headline">{{ movie.title }}</div>
            <div>{{movie.storyline.substring(0, 250)}}...</div>
            <router-link :to="`movie/${movie.id}`">Read more</router-link>
        </v-card-title>
        <v-img 
            :src="movie.posterURL" 
            aspect-ratio=0.60
        />
    </v-card>
</template>

<script>
export default {
    name: 'Movie',
    props: ['movie'],
};
</script>

<style scoped>
.top {
    height: 250px;
}
</style>