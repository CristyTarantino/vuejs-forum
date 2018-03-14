import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/PageHome';
import ThreadShow from '@/components/pages/PageThreadShow';
import NotFound from '@/components/pages/PageNotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
});
