import Movie from "../src/components/movie";
import { RouterLinkStub } from "@vue/test-utils";

describe("movie", () => {
    const storyline = "s".repeat(300);
    const expectedMovie = { 
        title: "title", 
        storyline,
        posterURL: "example.com" 
    };

    const movie = shallowMount(Movie, {
        propsData: {
            movie: expectedMovie
        },
        stubs: {
            RouterLink: RouterLinkStub
        }
    });


    it("renders a vue instance", () => {
        expect(movie.isVueInstance()).toBeTruthy();
    });

    it("renders a card", () => {
        expect(movie.contains("vcard-stub")).toBeTruthy();
    });

    it("renders the correct headline from movie prop", () => {
        const headline = movie.find(".headline");
        expect(headline.text()).toBe(expectedMovie.title);
    });

    it("renders the correct storyline from movie prop", () => {
        const storyline = movie.find(".storyline");
        expect(storyline.text()).toBe(`${expectedMovie.storyline.substring(0, 250)}...`);
    });

    it("renders an image", () => {
        const img = movie.find("vimg-stub");
        expect(movie.contains("vimg-stub")).toBeTruthy();
    })

    describe("image", () => {
        it("has correct posterURL from movie prop", () => {
            const img = movie.find("vimg-stub");
            const { src } = img.props();
            expect(src).toBe(expectedMovie.posterURL);
        });
    });
});