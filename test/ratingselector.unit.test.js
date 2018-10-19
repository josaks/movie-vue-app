import RatingSelector from "../src/components/ratingSelector";


describe("Rating selector", () => {
    let mockRate;
    let mockFill;
    let ratingSelector;

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

    it("renders stars with or without fill correctly", () => {
        let icons = ratingSelector.findAll(".icon");
        icons.at(5).trigger("mouseover");
        icons = ratingSelector.findAll(".icon");
        expect(icons.at(5).text()).toBe("star");
        expect(icons.at(4).text()).toBe("star");
        expect(icons.at(6).text()).toBe("star_border");
    });

    describe("icon", () => {
        it("calls rate method when clicked", () => {
            const icons = ratingSelector.findAll(".icon");
            icons.at(0).trigger("click");
            expect(mockRate).toBeCalled();
        });
    });
});