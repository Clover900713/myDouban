import Vue from 'vue';
import Router from 'vue-router';
import PagesView from '../views/PagesView';
import HomeView from '../views/HomeView';
import MovieView from '../views/MovieView';
import BookView from '../views/BookView';
import GroupView from '../views/GroupView';
import BroadcastView from '../views/BroadcastView';
import SearchView from '../views/SearchView';
import DetailView from '../views/DetailView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages',
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home',
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView,
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView,
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView,
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView,
        },
        {
          path: 'broadcast',
          name: 'BroadcastView',
          component: BroadcastView,
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView,
        }
      ],
    },
    {
      path: '/search',
      name: 'SearchView',
      component: SearchView,
    },
  ],
});
