import RatingSelector from "../src/components/ratingSelector";


describe("Rating selector", () => {
    const mockRate;
    const mockFill;
    const ratingSelector;

    beforeEach(() => {
        mockRate = jest.fn();
        mockFill = jest.fn();
        ratingSelector = mount(RatingSelector, {
                methods: {
                    rate: mockRate,
                    fill: mockFill
                }
         });
    });
    
    it("renders a vue instance", () => {
        expect(ratingSelector.isVueInstance()).toBe(true);
    });

    describe("icon", () => {
        it("calls rate method when clicked", () => {
            const icons = ratingSelector.findAll(".icon");
            icons[0].trigger("click");
            expect(mockRate).toBeCalled();
        });
        
        it("calls fill method on mouseover", () => {
            const icons = ratingSelector.findAll(".icon");
            icons[9].trigger("mouseover");
            expect(icon.vm.selectedIndex).toBe(9);
        });
    });

    it("renders stars with or without fill correctly", () => {
        const icons = ratingSelector.findAll(".icon");
        expect(icons[0].text()).toBe();
    });
});