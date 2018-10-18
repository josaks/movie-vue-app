/* Jest setup */

import { shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';


/* Set globals for tests */
global.shallowMount = shallowMount;
global.mount = mount;

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
window.Vue = Vue;