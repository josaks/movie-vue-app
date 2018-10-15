<template>
    <div id="picker">
        <v-icon 
            v-for="index in 10" 
            color="yellow" 
            :key="index"
            @click="rate(index)"
            @mouseover="fill(index)"
            size="20"
        >
            {{ getStar(index) }}
        </v-icon>
    </div>
</template>

<script>
export default {
    name: "RatingSelector",
    props: ["movie"],
    methods: {
        rate(index) {
        },
        fill(index) {
            this.$data.selectedIndex = index;
        },
        getStar(index) {
            if(index > this.$data.selectedIndex) return "star_border";
            else return "star";
        }
    },
    data() {
        return {
            selectedIndex: 0,
        }
    },
}
</script>

<style scoped>
</style>
