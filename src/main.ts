import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false

Vue.use(Vuesax, {
  colors: {
    primary: 'rgb(192, 134, 164)',
    success: '#68c5b8',
    danger: '#EC5843',
    warning: '#E99245',
    dark: '#226390'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
