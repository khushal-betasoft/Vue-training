import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './routes'
//Axios-------------------------->
import axios from 'axios'
axios.defaults.baseURL = "http://localhost/Training/CRUD_PDO/"
//------------------------------->
Vue.config.productionTip = false
Vue.use(VueRouter)
const eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;
// Vue.use(VeeValidate)
new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')


