// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'css/reset.css'

Vue.config.productionTip = false

import FastClick from 'fastclick'//解决移动端300ms问题
FastClick.attach(document.body)

//适配
import './assets/js/font.js'

import axios from 'axios'
Vue.prototype.axios=axios
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
