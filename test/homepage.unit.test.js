import Homepage from '../src/pages/homepage.vue';
import Movielist from '../src/components/Movielist';


describe("Homepage", () => {
    let page;
    let vContainer;

    beforeEach(() => {
        page = shallowMount(Homepage);
        vContainer = page.find('vcontainer-stub');
    });

    
    it("renders a vue instance", () => {
        expect(page.isVueInstance()).toBe(true);
    });

    it("renders a container", () => {
        expect(page.contains('v-container'));
    });

    it("renders a list of movies", () => {
        expect(vContainer.contains(Movielist)).toBe(true);
    });
});