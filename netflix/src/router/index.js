
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

import App from '../App'
import Cadastro from '../components/Cadastro'
import Login from '../components/Login'



export default new Router({
  routes: [
    {path:'/', component:Login},
    {path: '/cadastro', component: Cadastro},
    {path: '/home', component:App }
  ]
})
