import Vue from 'vue';
import Router from 'vue-router';
import TheHeader from '@/components/TheHeader';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheHeader',
      component: TheHeader,
    },
  ],
});
