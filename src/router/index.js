import Vue from 'vue'
import Router from 'vue-router'
import House from '@/components/House'
import Marco from '@/components/Marco'
import Dois from '@/components/Dois'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'House',
      component: House
    },
    {
    	path:'/Marco',
    	name:'Marco',
    	component:Marco
    },
    {
    	path:'/Dois',
    	name:'Dois',
    	component:Dois
    }
  ]
})
