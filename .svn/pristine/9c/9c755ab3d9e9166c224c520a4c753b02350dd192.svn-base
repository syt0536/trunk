// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/reset.css"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-happy-scroll/docs/happy-scroll.css'
import "./assets/main.css"
import axios from './axios'
import moment from 'moment'
import echarts from 'echarts'
import {HappyScroll}   from 'vue-happy-scroll'
import utils from './common/utils'

Vue.component('happy-scroll', HappyScroll)
Vue.use(ElementUI)
Vue.use(axios)
Vue.use(utils)



Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
