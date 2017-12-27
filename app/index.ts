import Vue from 'vue';
import VueRouter from 'vue-router';
import './bootstrap';
import {app, artists, artist, album} from './components';

Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    routes: [{
      name: 'home',
      path: '/',
      component: app,
      children: [{
        name: 'artists',
        path: 'artists',
        component: artists,
      }, {
        name: 'artist',
        path: 'artist/:id',
        component: artist,
      }, {
        name: 'album',
        path: 'album/:id',
        component: album,
      }]
    }]
  })
}).$mount('#app');
