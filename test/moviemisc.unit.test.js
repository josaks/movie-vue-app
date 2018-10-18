import MovieMisc from "../src/components/moviemisc";

describe("Moviemisc", () => {
    const expectedMovie = {
        actors: ["actors 1", "actor 2"],
        genres: ["genre 1", "genre 2"],
        releaseDate: "date"
    };
    const movieMisc = shallowMount(MovieMisc, {
        propsData: {
            movie: expectedMovie
        }
    });


    it("renders a vue instance", () => {
        expect(movieMisc.isVueInstance()).toBe(true);
    });

    it("renders actors", () => {
        const actualActors = movieMisc.find(".actors");
        const { actors } = expectedMovie;
        expect(actualActors.text().includes(actors.toString())).toBeTruthy();
    })

    it("renders genres", () => {
        const actualGenres = movieMisc.find(".genres");
        const { genres } = expectedMovie;
        expect(actualGenres.text().includes(genres.toString())).toBeTruthy();
    })

    it("renders release date", () => {
        const actualReleaseDate = movieMisc.find(".releaseDate");
        const { releaseDate } = expectedMovie;
        expect(actualReleaseDate.text().includes(releaseDate.toString())).toBeTruthy();
    })
});