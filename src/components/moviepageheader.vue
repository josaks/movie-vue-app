<template>
    <v-toolbar flat dense>
        <v-toolbar-title>
            <span>{{ movie.title }}</span>
            <span class="subheading">{{ `(${movie.year})` }}</span>
        </v-toolbar-title>

        <v-spacer />

        <v-toolbar-items>
            <div>
                <div id="averageRating">{{ movie.averageRating }} / 10</div>
                <div id="amountOfRatings">{{ movie.amountOfRatings }}</div>
            </div>
        </v-toolbar-items>

        <v-menu :nudge-width="100">
            <v-toolbar-title slot="activator">
                <v-btn icon>
                    <v-icon color="yellow">star</v-icon>
                </v-btn>
            </v-toolbar-title>
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <rating-selector :movie="movie" />
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
import RatingSelector from './ratingSelector';

export default {
    name: 'Moviepageheader',
    props: ['movie'],
    components: {
        RatingSelector,
    },
}
</script>

<style scoped>
#averageRating {
    font-size: 1.2em;
}
#amountOfRatings {
    text-align: center;
    font-size: 0.9em;
}
</style>
