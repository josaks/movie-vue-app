import Moviepage from "../src/pages/Moviepage";


describe("Moviepage", () => {
    let page;
    let vContainer;
    const expectedMovie = {};

    page = shallowMount(Moviepage, {
        computed: {
            movie: () => expectedMovie,
        },
    });
    vContainer = page.find("vcontainer-stub");


    it("renders a vue instance", () => {
        expect(page.isVueInstance()).toBeTruthy();
    });

    it("renders a container", () => {
        expect(page.contains("v-container"));
    });

    const components = [
        ["Movieheader", "moviepageheader-stub"],
        ["Storyline", "storyline-stub"],
        ["Misc", "moviemisc-stub"],
        ["Comment form", "commentform-stub"],
        ["Comments", "comments-stub"]
    ];

    describe.each(components)("Its %s", (compName, selector) => {
        const header = vContainer.find(selector);
        const { movie } = header.props();

        it("is rendered", () => {
            expect(vContainer.contains(selector)).toBeTruthy();
        });

        it("gets the right movie as prop", () => {
            expect(movie).toBe(expectedMovie);
        });
    });
});