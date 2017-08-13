import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Counter from '@/components/Counter'
import App from '@/components/shopping-cart/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/shopping-cart',
      name: 'App',
      component: App
    }
  ]
})
