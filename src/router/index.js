import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Index from '../pages/Index'
import Product from '../pages/Product'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import OrderList from '../pages/OrderList'
import OrderConfirm from '../pages/OrderConfirm'
import OrderPay from '../pages/OrderPay'
import AliPay from '../pages/AliPay'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'product/:id',
        name: 'product',
        component: Product
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'ali-pay',
        component: AliPay
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
