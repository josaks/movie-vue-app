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

    // describe("its header", () => {
    //     const header = vContainer.find("moviepageheader-stub");
    //     const { movie } = header.props();

    //     it("is rendered", () => {
    //         expect(vContainer.contains("moviepageheader-stub")).toBeTruthy();
    //     });

    //     it("gets the right movie as prop", () => {
    //         expect(movie).toBe(expectedMovie);
    //     });
    // });

    // describe("its storyline", () => {
    //     const storyline = vContainer.find("storyline-stub");
    //     const { movie } = storyline.props();

    //     it("is rendered", () => {
    //         expect(vContainer.contains("storyline-stub")).toBeTruthy();
    //     });

    //     it("gets the right movie as prop", () => {
    //         expect(movie).toBe(expectedMovie);
    //     });
    // });

    // describe("its misc info section", () => {
    //     const storyline = vContainer.find("moviemisc-stub");
    //     const { movie } = storyline.props();

    //     it("is rendered", () => {
    //         expect(vContainer.contains("moviemisc-stub")).toBeTruthy();
    //     });

    //     it("gets the right movie as prop", () => {
    //         expect(movie).toBe(expectedMovie);
    //     });
    // });

    // describe("its commentform", () => {
    //     const storyline = vContainer.find("commentform-stub");
    //     const { movie } = storyline.props();

    //     it("is rendered", () => {
    //         expect(vContainer.contains("commentform-stub")).toBeTruthy();
    //     });

    //     it("gets the right movie as prop", () => {
    //         expect(movie).toBe(expectedMovie);
    //     });
    // });

    // describe("its list of comments", () => {
    //     const storyline = vContainer.find("comments-stub");
    //     const { movie } = storyline.props();

    //     it("is rendered", () => {
    //         expect(vContainer.contains("comments-stub")).toBeTruthy();
    //     });

    //     it("gets the right movie as prop", () => {
    //         expect(movie).toBe(expectedMovie);
    //     });
    // });
});