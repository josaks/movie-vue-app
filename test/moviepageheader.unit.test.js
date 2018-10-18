import MoviePageHeader from "../src/components/moviepageheader";


describe("Moviepageheader", () => {
    const expectedMovie = { averageRating: 10, amountOfRatings: 100 };
    const moviePageHeader = shallowMount(MoviePageHeader, {
        propsData: {
            movie: expectedMovie
        }
    });

    
    it("renders a vue instance", () => {
        expect(moviePageHeader.isVueInstance()).toBeTruthy();
    });

    it("passes movie prop to rating selector component", () => {
        const ratingSelector = moviePageHeader.find("ratingselector-stub");
        const { movie } = ratingSelector.props();
        expect(movie).toBe(expectedMovie);
    });
});