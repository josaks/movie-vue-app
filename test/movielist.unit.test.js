import MovieList from "../src/components/movielist";

describe("Movielist", () => {
    const expectedMovies = [{id: 1}, {id: 2}, {id: 3}];
    const getters = {
        movies: () => expectedMovies
    }
    const store = new Vuex.Store({ getters })
    const movieList = shallowMount(MovieList, { store });

    it("renders a vue instance", () => {
        expect(movieList.isVueInstance()).toBe(true);
    });

    it("renders a list of movies from movie prop", () => {
        const movies = movieList.findAll("movie-stub");
        expect(movies).toHaveLength(expectedMovies.length);
    });
});