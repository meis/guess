import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from './App.vue';
import router from './router';

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');
