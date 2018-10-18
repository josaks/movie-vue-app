import AppHeader from "../src/components/appheader";
import { RouterLinkStub } from "@vue/test-utils";


describe("Appheader", () => {
    let appHeader;
    const mockLogin = jest.fn();

    beforeEach(() => {
        appHeader = mount(AppHeader, {
            stubs: {
                RouterLink: RouterLinkStub,
            }
        });
        appHeader.setMethods({ login: mockLogin });
    });


    it("renders a vue instance", () => {
        expect(appHeader.isVueInstance()).toBeTruthy();
    });

    it("renders a toolbar", () => {
        expect(appHeader.contains(".v-toolbar")).toBeTruthy();
    });

    it("renders a router link", () => {
        expect(appHeader.contains(RouterLinkStub)).toBeTruthy();
    });

    it("renders a spacer", () => {
        expect(appHeader.contains(".spacer")).toBeTruthy();
    });

    it("renders a menu", () => {
        expect(appHeader.contains(".v-menu")).toBeTruthy();
    });

    describe("Menu", () => {
        let menu;
        let button;

        beforeEach(() => {
            menu = appHeader.find(".v-menu");
            button = menu.find(".v-btn");
        });
        
        it("renders a button with icon", () => {
            expect(button.exists()).toBeTruthy();
            const icon = button.find(".v-icon");
            expect(icon.exists()).toBeTruthy();
        });

        describe("Log-in-tile in menu", () => {
            beforeEach(() => {
                menu = appHeader.find(".v-menu");
            });

            it("calls login method when clicked", () => {
                const action = menu.find(".v-list__tile__action");
                action.trigger("click");
                expect(mockLogin).toBeCalled();
            });
        });
    });
});