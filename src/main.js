import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.directive('handleClick', {
  bind (el, binding, vnode) {
    // console.log('bind', el, binding.value, vnode)
    document.addEventListener('click', binding.value, false)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
