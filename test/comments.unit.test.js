import Comments from "../src/components/Comments";


describe("Comments", () => {
    const expectedMovie = { comments: [{ id : 1 }, { id : 2 }] };

    const comments = shallowMount(Comments, {
        propsData: {
            movie: expectedMovie
        }
    });

    it("renders a vue instance", () => {
        expect(comments.isVueInstance()).toBeTruthy();
    });

    it("displays comments from movie prop", () => {
        const commentsList = comments.findAll(".comment");
        expect(commentsList).toHaveLength(expectedMovie.comments.length);
    });
});

