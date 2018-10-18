import CommentForm from "../src/components/commentform";
import { shallowMount } from "@vue/test-utils";


describe("Comment form", () => {
    const commentForm = shallowMount(CommentForm, {
        methods: {
            addComment() {}
        }
    });
    

    it("renders a vue instance", () => {
        expect(commentForm.isVueInstance()).toBeTruthy();
    });

    it("renders a form", () => {
        expect(commentForm.contains("vform-stub")).toBeTruthy();
    });

    it("renders a button", () => {
        const btn = commentForm.find("vbtn-stub");
        expect(btn.exists()).toBeTruthy();
    });
});