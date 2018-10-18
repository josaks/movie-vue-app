import Movie from "../src/components/movie";
import { RouterLinkStub } from "@vue/test-utils";

describe("movie", () => {
    const expectedMovie = { title: "title", storyline: "storyline" };
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

    it("render the correct headline from movie prop", () => {
        const headline = movie.find(".headline");
        expect(headline.text()).toBe(expectedMovie.title);
    });

    it("renders the correct storyline from movie prop", () => {
        const storyline = movie.find(".storyline");
        expect(storyline.text()).toBe(`${expectedMovie.storyline}...`);
    });
});