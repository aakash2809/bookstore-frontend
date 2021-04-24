import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(router);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
