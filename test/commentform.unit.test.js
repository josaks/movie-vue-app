import CommentForm from "../src/components/commentform";


describe("Comment form", () => {
    const mockMethod = jest.fn();
    const commentForm = mount(CommentForm);
    commentForm.setMethods({ submit: mockMethod });

    it("renders a vue instance", () => {
        expect(commentForm.isVueInstance()).toBeTruthy();
    });

    it("renders a form", () => {
        expect(commentForm.contains(".v-form")).toBeTruthy();
    });

    it("renders a button", () => {
        const btn = commentForm.find(".v-btn");
        expect(btn.exists()).toBeTruthy();
    });

    describe("button", () => {
        it("calls correct method when clicked", () => {
            const btn = commentForm.find(".v-btn");
            btn.trigger("click");
            expect(mockMethod).toBeCalled();
        });
    });
});