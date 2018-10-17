/* Jest setup */

import { shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';


/* Set globals for tests */
global.shallowMount = shallowMount;

/* Register vuetify for use in our tests */
Vue.use(Vuetify);
window.Vue = Vue;