import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import VuePhoneNumberInput from 'vue-phone-number-input';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
// @ts-ignore
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

Vue.config.productionTip = false;

Vue.component('vue-phone-number-input', VuePhoneNumberInput);

new Vue({
  store,
  // @ts-ignore
  vuetify,
  firestorePlugin,
  render: h => h(App),
}).$mount('#app');
