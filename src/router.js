import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Fleet from '@/views/Fleet'
import Client from '@/views/Client'
import Transportation from '@/views/Transportation'
import Delivery from '@/views/Delivery'
import Distribution from '@/views/Distribution'
import Coldtransport from '@/views/Coldtransport'
import Motorized from '@/views/Motorized'
import Logisticssolutions from '@/views/Logisticssolutions'
import Bodywork from '@/views/Bodywork'
import Contactus from '@/views/Contactus'

Vue.use(Router)


export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/about',
      name: 'about',
      component: About
    },
    {
      path:'/fleet',
      name: 'fleet',
      component: Fleet
    },
    {
      path:'/client',
      name:'client',
      component: Client
    },
    {
      path:'/transportation',
      name:'transportation',
      component: Transportation
    },
    {
      path:'/delivery',
      name:'delivery',
      component: Delivery
    },
    {
      path:'/distribution',
      name:'distribution',
      component: Distribution
    },
    {
      path:'/coldtransport',
      name:'coldtransport',
      component: Coldtransport
    },
    {
      path:'/motorized',
      name:'motorized',
      component: Motorized
    },
    {
      path:'/logisticssolutions',
      name:'logisticssolutions',
      component: Logisticssolutions
    },
    {
      path:'/bodywork',
      name:'bodywork',
      component: Bodywork
    },
    {
      path:'/contactus',
      name:'contactus',
      component: Contactus
    }
  ]
})