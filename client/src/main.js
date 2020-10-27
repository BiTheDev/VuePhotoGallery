import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
import keys from './assets/key'

Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: keys.api // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
