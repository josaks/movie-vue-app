import AppHeader from "../src/components/appheader";
import { RouterLinkStub } from "@vue/test-utils";


describe("Appheader", () => {
    let appHeader;

    beforeEach(() => {
        appHeader = shallowMount(AppHeader, {
            stubs: {
                RouterLink: RouterLinkStub,
            }
        });
    });


    it("renders a vue instance", () => {
        expect(appHeader.isVueInstance()).toBeTruthy();
    });

    it("renders a toolbar", () => {
        expect(appHeader.contains("vtoolbar-stub")).toBeTruthy();
    });

    it("renders a router link", () => {
        expect(appHeader.contains(RouterLinkStub)).toBeTruthy();
    });

    it("renders a spacer", () => {
        expect(appHeader.contains("vspacer-stub")).toBeTruthy();
    });

    describe("Menu", () => {
        let menu;
        let button;

        beforeEach(() => {
            menu = appHeader.find("vmenu-stub");
            button = menu.find("vbtn-stub");
        });
        
        it("is rendered", () => {
            expect(appHeader.contains("vmenu-stub")).toBeTruthy();
        });

        it("contains a button that looks like an icon", () => {
            expect(button.exists()).toBeTruthy();
            const icon = button.find("vicon-stub");
            expect(icon.exists()).toBeTruthy();
        });
    });
});