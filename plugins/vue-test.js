import Vue from 'vue'

Vue.myTest = (string) => console.log("myTest:", string)
Vue.prototype.$myTest = (string) => console.log("myTest:", string)
