import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Fast from '../components/fast/Fast.vue'
import BuyCar from '../components/BuyCar.vue'
import Mine from '../components/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path: '/home',component: Home},
    {path:'/fast',component:Fast},
    {path:'/buycar',component:BuyCar},
    {path:'/mine',component:Mine}
  ]
})
