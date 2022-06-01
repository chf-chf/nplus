import Vue from 'vue'
// import Antd from 'ant-design-vue'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

// Vue.use(Antd)
// const app = createApp(App)

// app.use(Antd).mount('#app')

new Vue({
  render: h => h(App),
}).$mount('#app')
