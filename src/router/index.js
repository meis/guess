import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Play from '@/components/Play.vue';
import Player from '@/components/Player.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/play',
    name: 'Play',
    component: Play,
  },
  {
    path: '/player/:playerId',
    name: 'Player',
    component: Player,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
