import Vue from 'vue';
import store from './store/store';
import VueRouter from 'vue-router';
import app from './app';
import HomePage from './pages/homepage';
import MoviePage from './pages/moviepage';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    { path: '/', component: HomePage },
    { path: '/movie/:id', component: MoviePage, props: true },
    { path: '/notfound', component: { template: '<div>Not found</div>' }},
];

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(app)
});
