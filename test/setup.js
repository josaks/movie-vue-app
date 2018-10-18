/* Jest setup */

import { shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from "vuex";

/* Set globals for tests */
global.shallowMount = shallowMount;
global.mount = mount;
global.Vuex = Vuex;

/*
Mute vuetify and vue errors:
[Vuetify] Unable to locate target [data-app]
[Vue warn]: $listeners is readonly.
*/
global.console = {
    ...global.console,
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
};


/* Register vuetify for use in our tests */
Vue.use(Vuetify);
/* Register vuex for use in our test */
Vue.use(Vuex);


window.Vue = Vue;