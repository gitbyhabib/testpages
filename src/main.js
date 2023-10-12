import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

import '../src/css/uni.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
