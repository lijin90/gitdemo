import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Header from '../views/Header'
import Login from '../views/Login'
import foundlist from '../views/foundlist'
import infoshow from '../views/infoshow'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect:'/foundlist',
      children:[
        { path: '/infoshow', name: 'infoshow', component: infoshow,},
        { path: '/foundlist', name: 'foundlist', component: foundlist},
      ]
    },

    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path:'*',
      redirect: '/'
    }
  ]
})
export default router //默认静态路由
