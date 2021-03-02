import Vue from 'vue'
import App from './App.vue'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'



// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//css
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
//IMport sildejs
import VueSplide from '@splidejs/vue-splide';

//rutas
import router from '@/router'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//slide
Vue.use(VueSplide);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


