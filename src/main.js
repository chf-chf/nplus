import Vue from 'vue'
import Antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'
import { Fabric } from 'vue-fabric';

import 'ant-design-vue/dist/antd.css'
// import 'vue-fabric/dist/vue-fabric.min.css';


Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(Fabric)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
