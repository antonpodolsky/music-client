import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './app';

Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    routes: [{
      path: '/',
      component: app
    }]
  })
}).$mount('#app');
